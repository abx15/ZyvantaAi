"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { transcribeAudio } from "@/app/actions/ai";
import { toast } from "sonner";

interface VoiceUIProps {
  onTranscript: (text: string) => void;
  lang?: string;
}

export const VoiceUI: React.FC<VoiceUIProps> = ({ onTranscript }) => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [browserSupportsSpeech, setBrowserSupportsSpeech] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const supports =
      typeof window !== "undefined" &&
      ("SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window ||
        "MediaRecorder" in window);
    setTimeout(() => setBrowserSupportsSpeech(supports), 0);
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("file", audioBlob, "recording.webm");
        formData.append("model", "whisper-1");

        setIsProcessing(true);
        const result = await transcribeAudio(formData);
        setIsProcessing(false);

        if (result.success && result.text) {
          onTranscript(result.text);
        } else {
          toast.error(
            "Transcription failed. Reverting to browser speech recognition.",
          );
          // Fallback logic could go here
        }

        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setIsListening(true);
    } catch (error) {
      console.error("Recording error:", error);
      toast.error("Could not access microphone");
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setIsListening(false);
    }
  };

  if (!browserSupportsSpeech) {
    return (
      <Button disabled variant="outline">
        Voice Search Unsupported
      </Button>
    );
  }

  return (
    <Button
      variant={isListening ? "destructive" : "default"}
      className="rounded-full w-12 h-12 flex items-center justify-center relative"
      onClick={isListening ? stopRecording : startRecording}
      disabled={isProcessing}
    >
      {isProcessing ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : isListening ? (
        <MicOff className="w-6 h-6" />
      ) : (
        <Mic className="w-6 h-6" />
      )}
      {isListening && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
      )}
    </Button>
  );
};
