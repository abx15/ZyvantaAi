"use client";

import React, { useState } from "react";
import { Mail, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to send reset link");

      setIsSent(true);
      toast.success("Reset link sent! Check your inbox.");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/favicon.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-gray-900">Zyvanta</span>
          </div>
        </div>

        <Card className="border-none shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm">
          {!isSent ? (
            <>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Reset Password
                </CardTitle>
                <CardDescription className="text-center">
                  Enter your email and we'll send you a link to reset your
                  password.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-3 py-3 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>

                  <button
                    type="button"
                    onClick={() => router.push("/auth/login")}
                    className="w-full text-center text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-2 mt-4"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to login
                  </button>
                </form>
              </CardContent>
            </>
          ) : (
            <CardContent className="pt-10 pb-10 text-center space-y-6">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-10 h-10 text-green-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  Check your email
                </h2>
                <p className="text-gray-600">
                  We've sent a password reset link to{" "}
                  <span className="font-bold text-gray-900">{email}</span>.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full h-12 rounded-2xl border-gray-200"
                onClick={() => setIsSent(false)}
              >
                Try different email
              </Button>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
