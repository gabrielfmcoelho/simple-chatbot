'use client';

import React from "react";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function QueryProvider({children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minuto
      },
    },
  }));

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="@container/main p-4 xl:group-data-[theme-content-layout=centered]/layout:container xl:group-data-[theme-content-layout=centered]/layout:mx-auto xl:group-data-[theme-content-layout=centered]/layout:mt-8">
          {children}
        </div>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </>
  );
}
