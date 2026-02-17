"use client";

import React, { useState } from "react";
import { 
  Brain, 
  Sparkles, 
  Zap, 
  MessageCircle, 
  Image,
  Mic,
  Settings,
  ChevronLeft,
  Bot,
  Cpu,
  Network,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const aiModels = [
  {
    name: "GPT-4",
    provider: "OpenAI",
    description: "Advanced reasoning and complex problem solving",
    icon: Brain,
    color: "bg-green-100 text-green-600",
    capabilities: ["Reasoning", "Analysis", "Coding", "Writing"],
    status: "online"
  },
  {
    name: "Gemini Pro",
    provider: "Google",
    description: "Multimodal AI with vision capabilities",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-600",
    capabilities: ["Vision", "Text", "Code", "Translation"],
    status: "online"
  },
  {
    name: "Grok",
    provider: "xAI",
    description: "Real-time information processing",
    icon: Zap,
    color: "bg-purple-100 text-purple-600",
    capabilities: ["Real-time", "Analysis", "Research", "Q&A"],
    status: "online"
  },
  {
    name: "Llama 3",
    provider: "Ollama (Local)",
    description: "Privacy-focused local processing",
    icon: Cpu,
    color: "bg-orange-100 text-orange-600",
    capabilities: ["Privacy", "Offline", "Custom", "Secure"],
    status: "offline"
  }
];

const aiFeatures = [
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description: "Chat naturally with multiple AI models",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Image,
    title: "Vision Analysis",
    description: "Upload images for AI analysis and description",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Talk to AI using voice commands",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Settings,
    title: "Model Selection",
    description: "Choose the best AI model for your task",
    color: "bg-orange-100 text-orange-600"
  }
];

const usageStats = {
  totalQueries: 12543,
  avgResponseTime: "1.2s",
  successRate: "98.5%",
  activeModels: 3
};

export default function AIPage() {
  const [selectedModel, setSelectedModel] = useState<string>("gpt4");
  const [query, setQuery] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ChevronLeft />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-full">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Engine</h1>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Multi-Model AI Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of multiple AI models for comprehensive insights and solutions
          </p>
        </div>

        {/* Usage Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {usageStats.totalQueries.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">Total Queries</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {usageStats.avgResponseTime}
              </div>
              <p className="text-sm text-gray-600">Avg Response Time</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {usageStats.successRate}
              </div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {usageStats.activeModels}
              </div>
              <p className="text-sm text-gray-600">Active Models</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Models */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Available AI Models
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aiModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${model.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{model.name}</CardTitle>
                          <p className="text-sm text-gray-500">{model.provider}</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        model.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {model.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {model.capabilities.map((capability, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                    <Button 
                      className="w-full"
                      variant={selectedModel === model.name.toLowerCase().replace(' ', '').replace('-', '') ? "default" : "outline"}
                      onClick={() => setSelectedModel(model.name.toLowerCase().replace(' ', '').replace('-', ''))}
                    >
                      {model.status === 'online' ? 'Select Model' : 'Configure'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Query */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Quick AI Query
            </CardTitle>
            <CardDescription>
              Ask anything to the selected AI model
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Model</label>
                <select 
                  className="w-full p-2 border rounded-lg"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  {aiModels.filter(model => model.status === 'online').map(model => (
                    <option key={model.name} value={model.name.toLowerCase().replace(' ', '').replace('-', '')}>
                      {model.name} ({model.provider})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Query</label>
                <textarea
                  className="w-full p-3 border rounded-lg resize-none"
                  rows={4}
                  placeholder="Ask me anything..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Button className="w-full" disabled={!query.trim()}>
                Send Query
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AI Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color} mx-auto mb-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AI Orchestrator */}
        <Card className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5" />
              AI Orchestrator
            </CardTitle>
            <CardDescription>
              Intelligent routing to the best AI model for your specific task
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Task Type Routing</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-sm">Health & Medical</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">GPT-4</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-sm">Education & Learning</span>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Gemini</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-sm">General Reasoning</span>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Grok</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <span className="text-sm">Privacy Tasks</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">Llama 3</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Performance Metrics</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Response Quality</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[94%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy</span>
                      <span>91%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[91%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Speed</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Model Preferences</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Auto-select best model</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Enable local models</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Cache responses</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Performance</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm mb-1">Response Length</label>
                    <select className="w-full p-2 border rounded-lg text-sm">
                      <option>Concise</option>
                      <option>Balanced</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Temperature</label>
                    <select className="w-full p-2 border rounded-lg text-sm">
                      <option>Conservative (0.3)</option>
                      <option>Balanced (0.7)</option>
                      <option>Creative (1.0)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
