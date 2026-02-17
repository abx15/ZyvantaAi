"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { VoiceUI } from "./VoiceUI";
import { Send, Image as ImageIcon } from "lucide-react";
import { processAiDecision } from "@/app/actions/ai";
import { toast } from "sonner";

const DecisionBarContent: React.FC = () => {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return;
    setIsProcessing(true);

    // In a real app, we'd get the actual userId from auth
    const result = await processAiDecision("demo-user", "reasoning", text);

    if (result.success) {
      toast.success("Strategy Engine processed your request");
      console.log("AI Result:", result.data);
      // Here you would navigate to a result page or update state
    } else {
      toast.error("Processing failed");
    }

    setIsProcessing(false);
    setInput("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 pb-8 flex items-center gap-3 z-20 shadow-lg">
      <button className="p-2 text-slate-400 hover:text-slate-600">
        <ImageIcon className="w-6 h-6" />
      </button>

      <div className="flex-1 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="I have 20k rupees - what should I do?"
          className="w-full bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(input)}
        />
      </div>

      <VoiceUI onTranscript={(text) => handleSubmit(text)} />

      {input.trim() && (
        <button
          onClick={() => handleSubmit(input)}
          className="p-2 text-blue-600"
          disabled={isProcessing}
        >
          <Send className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export const DecisionBar = dynamic(() => Promise.resolve(DecisionBarContent), {
  ssr: false,
  loading: () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 pb-8 flex items-center gap-3 z-20 shadow-lg">
      <div className="flex-1 h-10 bg-slate-100 rounded-full"></div>
    </div>
  ),
});
