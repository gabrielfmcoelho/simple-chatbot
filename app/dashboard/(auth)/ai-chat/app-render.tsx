"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Input,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea
} from "@/components/ui/custom/prompt/input";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, Paperclip, SquareIcon, X } from "lucide-react";
import { Suggestion } from "@/components/ui/custom/prompt/suggestion";
import { ChatContainer } from "@/components/ui/custom/prompt/chat-container";
import { Message, MessageContent } from "@/components/ui/custom/prompt/message";
import { Markdown } from "@/components/ui/custom/prompt/markdown";
import { cn } from "@/lib/utils";
import { PromptLoader } from "@/components/ui/custom/prompt/loader";
import { PromptScrollButton } from "@/components/ui/custom/prompt/scroll-button";
import { BotIcon } from "lucide-react";
import { useChat } from "@/hooks/use-chat";

const chatSuggestions = [
  "Qual o setor do Ubaldo Junior ?",  
  "Quais os objetivos estratégicos da SEAD ?",
  "Quais as minhas tarefas próximas a vencer ?",
  "A SEAD tem algum projeto de IA ?",
];

// Configurável - defina o ID do agente aqui
const AGENT_ID = "gestor"; // Substitua pelo ID correto do seu agente

export default function AppRender() {
  const [prompt, setPrompt] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { 
    messages, 
    isStreaming, 
    isLoading, 
    error, 
    sendMessage, 
    stopStreaming 
  } = useChat(AGENT_ID);

  const isFirstResponse = messages.length > 0;

  const handleSubmit = () => {
    if (isStreaming) {
      stopStreaming();
      return;
    }

    if (prompt.trim() || files.length > 0) {
      sendMessage(prompt, files);
      setPrompt("");
      setFiles([]);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (uploadInputRef?.current) {
      uploadInputRef.current.value = "";
    }
  };

  const FileListItem = ({
    file,
    dismiss = true,
    index
  }: {
    file: File;
    dismiss?: boolean;
    index: number;
  }) => (
    <div className="bg-secondary flex items-center gap-2 rounded-lg px-3 py-2 text-sm">
      <Paperclip className="size-4" />
      <span className="max-w-[120px] truncate">{file.name}</span>
      {dismiss && (
        <button
          onClick={() => handleRemoveFile(index)}
          className="hover:bg-secondary/50 rounded-full p-1">
          <X className="size-4" />
        </button>
      )}
    </div>
  );

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
      <ChatContainer
        className={cn("relative w-full flex-1 space-y-4 pe-2", { hidden: !isFirstResponse })}
        ref={containerRef}
        scrollToRef={bottomRef}>
        
        {messages.map((message) => {
          const isAssistant = message.role === "assistant";
          return (
            <Message
              key={message.id}
              className={message.role === "user" ? "justify-end" : "justify-start"}>
              <div
                className={cn("max-w-[85%] flex-1 sm:max-w-[75%]", {
                  "justify-end text-end": !isAssistant
                })}>
                {isAssistant ? (
                  <div className="bg-muted text-foreground prose rounded-lg border px-3 py-2">
                    <Markdown className={"space-y-4"}>{message.content}</Markdown>
                  </div>
                ) : message?.files && message.files.length > 0 ? (
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-wrap justify-end gap-2">
                      {message.files.map((file, index) => (
                        <FileListItem key={index} index={index} file={file} dismiss={false} />
                      ))}
                    </div>
                    {message.content ? (
                      <MessageContent className="bg-primary text-primary-foreground inline-flex">
                        {message.content}
                      </MessageContent>
                    ) : null}
                  </div>
                ) : (
                  <MessageContent className="bg-primary text-primary-foreground inline-flex text-start">
                    {message.content}
                  </MessageContent>
                )}
              </div>
            </Message>
          );
        })}

        {(isStreaming || isLoading) && (
          <div className="ps-2">
            <PromptLoader variant="pulse-dot" />
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border p-3">
            <p className="text-sm">
              **Erro:** {error.message || 'Ocorreu um erro inesperado.'}
            </p>
          </div>
        )}
      </ChatContainer>

      <div className="fixed right-4 bottom-4">
        <PromptScrollButton
          containerRef={containerRef}
          scrollRef={bottomRef}
          className="shadow-sm"
        />
      </div>

      {!isFirstResponse && (
        <div className="flex w-full max-w-3xl flex-col items-center justify-center space-y-20 p-4 mb-20">
          <Image
            src="/logo-gestor.svg"
            alt="Chatbot"
            width={150}
            height={150}
          />
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <BotIcon className="text-primary size-8" />
            <h1>
              Olá! Eu sou o assistente virtual da SEAD. Como posso te ajudar hoje?
            </h1>
            {chatSuggestions.map((suggestion: string, key: number) => (
              <Suggestion key={key} onClick={() => setPrompt(suggestion)}>
                {suggestion}
              </Suggestion> 
            ))}
          </div>
        </div>
      )}

      <Input
        value={prompt}
        onValueChange={setPrompt}
        onSubmit={handleSubmit}
        className="w-full max-w-(--breakpoint-md)">
        
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 pb-2">
            {files.map((file, index) => (
              <FileListItem key={index} index={index} file={file} />
            ))}
          </div>
        )}

        <PromptInputTextarea 
          placeholder="Me pergunte algo..." 
          disabled={isLoading}
        />

        <PromptInputActions className="flex items-center justify-end gap-2 pt-2">
          <PromptInputAction tooltip={isStreaming ? "Parar geração" : "Enviar mensagem"}>
            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={handleSubmit}
              disabled={isLoading && !isStreaming}>
              {(isStreaming || isLoading) ? <SquareIcon /> : <ArrowUpIcon />}
            </Button>
          </PromptInputAction>
        </PromptInputActions>
      </Input>
    </div>
  );
}
