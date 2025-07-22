import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useRef } from 'react';

interface ChatMessage {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  files?: File[];
}

interface ChatRequest {
  message: string;
  model: string;
  thread_id: string;
  user_id: string;
  agent_config: Record<string, unknown>;
  spicy_level: number;
}

interface ChatResponse {
  type: string;
  content: string;
  tool_calls: unknown[];
  tool_call_id: string;
  run_id: string;
  response_metadata: Record<string, unknown>;
  custom_data: Record<string, unknown>;
}

const sendChatMessage = async (agentId: string, payload: ChatRequest): Promise<ChatResponse> => {
  // Ler da variável de ambiente
  const agents_api_base_url = process.env.NEXT_PUBLIC_AGENTS_API_BASE_URL;
  const endpoint_url = agents_api_base_url + `/${agentId}/invoke`
  console.log(`endpoint: ${endpoint_url}`)
  
  if (!agents_api_base_url) {
    throw new Error('NEXT_PUBLIC_AGENTS_API_BASE_URL não está configurada');
  }

  const response = await fetch(`${endpoint_url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}, ${response}`)
  }

  return response.json();
};

export const useChat = (agentId: string = 'default') => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [threadId] = useState(() => crypto.randomUUID());
  const [userId] = useState(() => crypto.randomUUID());
  const streamIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const queryClient = useQueryClient();

  const chatMutation = useMutation({
    mutationFn: (message: string) => sendChatMessage(agentId, {
      message,
      model: "openai-compatible",
      thread_id: threadId,
      user_id: userId,
      agent_config: {},
      spicy_level: 0.0
    }),
    onSuccess: (data, variables) => {
      // Simular streaming da resposta da API
      simulateStreaming(data.content);
    },
    onError: (error) => {
      console.error('Erro no chat:', error);
      // Adicionar mensagem de erro
      const errorMessage = "Desculpe, ocorreu um erro. Tente novamente mais tarde.";
      simulateStreaming(errorMessage);
    },
  });

  const simulateStreaming = (fullResponse: string) => {
    setIsStreaming(true);
    let charIndex = 0;
    let currentContent = "";
    
    const assistantMessageId = messages.length + 2; // +1 para user, +1 para assistant
    
    // Adicionar mensagem vazia do assistente
    setMessages(prev => [
      ...prev,
      {
        id: assistantMessageId,
        role: 'assistant',
        content: ""
      }
    ]);

    streamIntervalRef.current = setInterval(() => {
      if (charIndex < fullResponse.length) {
        currentContent += fullResponse[charIndex];
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessageId 
              ? { ...msg, content: currentContent }
              : msg
          )
        );
        charIndex++;
      } else {
        clearInterval(streamIntervalRef.current!);
        setIsStreaming(false);
      }
    }, 30);
  };

  const sendMessage = (prompt: string, files: File[] = []) => {
    if (!prompt.trim() && files.length === 0) return;

    const userMessageId = messages.length + 1;
    
    // Adicionar mensagem do usuário
    setMessages(prev => [
      ...prev,
      {
        id: userMessageId,
        role: 'user',
        content: prompt,
        files: files
      }
    ]);

    // Enviar para API
    chatMutation.mutate(prompt);
  };

  const clearChat = () => {
    setMessages([]);
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
    }
    setIsStreaming(false);
  };

  const stopStreaming = () => {
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
      setIsStreaming(false);
    }
  };

  return {
    messages,
    isStreaming,
    isLoading: chatMutation.isPending,
    error: chatMutation.error,
    sendMessage,
    clearChat,
    stopStreaming,
  };
};
