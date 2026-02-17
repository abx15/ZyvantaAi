"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { useBackgroundSync } from "@/hooks/useBackgroundSync";

export default function Providers({ children }: { children: React.ReactNode }) {
  useBackgroundSync();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
}
