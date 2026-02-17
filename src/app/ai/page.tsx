"use client";

import { Brain, Mic, MessageSquare, Sparkles, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AIEnginePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 to-pink-50/30">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Decision Engine
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Your intelligent companion for life's important decisions. Ask
              anything, get expert insights.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <div className="font-bold text-gray-900 mb-1">Health Query</div>
                <div className="text-sm text-gray-600">
                  Ask about symptoms, medications, or wellness
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-bold text-gray-900 mb-1">
                  Education Query
                </div>
                <div className="text-sm text-gray-600">
                  Get homework help or learning guidance
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-bold text-gray-900 mb-1">
                  Agriculture Query
                </div>
                <div className="text-sm text-gray-600">
                  Ask about crops, weather, or farming
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main AI Interface */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Chat Interface */}
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden mb-8">
              <CardContent className="p-0">
                {/* Chat Messages */}
                <div className="h-[500px] overflow-y-auto p-8 bg-gray-50">
                  <div className="space-y-6">
                    {/* Welcome Message */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                        <div className="font-bold text-gray-900 mb-2">
                          Zyvanta AI
                        </div>
                        <div className="text-gray-700 leading-relaxed">
                          Hello! I'm your AI assistant. I can help you with
                          questions about health, education, and agriculture.
                          What would you like to know today?
                        </div>
                      </div>
                    </div>

                    {/* Example Query */}
                    <div className="flex items-start space-x-4 justify-end">
                      <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-sm max-w-md">
                        <div className="leading-relaxed">
                          What are the best practices for preventing common
                          cold?
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold">U</span>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                        <div className="font-bold text-gray-900 mb-3">
                          Zyvanta AI
                        </div>
                        <div className="text-gray-700 leading-relaxed space-y-3">
                          <p>
                            Here are the key practices to prevent common cold:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-2">
                            <li>Wash hands frequently with soap and water</li>
                            <li>
                              Avoid touching your face, especially eyes, nose,
                              and mouth
                            </li>
                            <li>
                              Maintain social distance from sick individuals
                            </li>
                            <li>Get adequate sleep (7-9 hours for adults)</li>
                            <li>Stay hydrated and maintain a balanced diet</li>
                            <li>Exercise regularly to boost immunity</li>
                          </ul>
                          <p className="text-sm text-gray-500 pt-3 border-t">
                            💡 Would you like specific vitamin recommendations
                            or immune-boosting foods?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-6 bg-white border-t">
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full flex-shrink-0"
                    >
                      <Mic className="w-5 h-5" />
                    </Button>
                    <input
                      type="text"
                      placeholder="Ask me anything about health, education, or agriculture..."
                      className="flex-1 px-6 py-4 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 outline-none text-lg"
                    />
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Ask AI
                    </Button>
                  </div>
                  <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                      <span>Instant responses</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-blue-500" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="font-bold text-gray-900 mb-2">
                    Multi-Domain Expertise
                  </div>
                  <div className="text-sm text-gray-600">
                    Trained on health, education, and agriculture datasets
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-gray-900 mb-2">
                    Contextual Understanding
                  </div>
                  <div className="text-sm text-gray-600">
                    Remembers conversation context for better answers
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="font-bold text-gray-900 mb-2">
                    Voice Input
                  </div>
                  <div className="text-sm text-gray-600">
                    Speak your questions naturally in any language
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
