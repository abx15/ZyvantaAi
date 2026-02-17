import {
  Brain,
  Database,
  Zap,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Advanced AI</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            How Zyvanta Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the technology and process behind Zyvanta's intelligent
            decision engine.
          </p>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From your question to actionable insights in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-200">
                <span className="text-5xl font-bold text-white">1</span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Ask Your Question
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Type or speak your query in our intelligent decision bar.
                Whether it's a health concern, educational topic, or farming
                question—Zyvanta understands natural language and context.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Voice Input
                </span>
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Text Input
                </span>
                <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Multi-language
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-12 h-12 text-gray-300" />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-200">
                <span className="text-5xl font-bold text-white">2</span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                AI Processing
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our advanced AI orchestrator analyzes your query using multiple
                specialized models. Each domain (health, education, agriculture)
                has fine-tuned AI that understands nuances and contextual
                details specific to that field.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  GPT-4
                </span>
                <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  Gemini Pro
                </span>
                <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  Custom Models
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-12 h-12 text-gray-300" />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-200">
                <span className="text-5xl font-bold text-white">3</span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Get Actionable Results
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Receive clear, data-driven recommendations with explanations.
                All insights are backed by verified sources and expert
                knowledge. You also get follow-up suggestions and resources for
                deeper learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Instant Results
                </span>
                <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Source Citations
                </span>
                <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Follow-ups
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest advancements in AI and cloud
              infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Models
              </h3>
              <p className="text-gray-600">
                Multiple LLMs working in harmony for domain-specific expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data Storage
              </h3>
              <p className="text-gray-600">
                Secure PostgreSQL and MongoDB databases for lightning-fast
                queries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-time Processing
              </h3>
              <p className="text-gray-600">
                Redis caching ensures sub-second response times for common
                queries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Security First
              </h3>
              <p className="text-gray-600">
                End-to-end encryption and compliance with global privacy
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zyvanta */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Zyvanta?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Domain Expertise
                  </h3>
                  <p className="text-gray-600">
                    Unlike generic chatbots, our AI is fine-tuned for health,
                    education, and agriculture.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Always Learning
                  </h3>
                  <p className="text-gray-600">
                    Our models continuously improve with new data and user
                    interactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Offline Capability
                  </h3>
                  <p className="text-gray-600">
                    PWA support means you can access core features even without
                    internet.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Privacy Focused
                  </h3>
                  <p className="text-gray-600">
                    Your data stays yours. We never sell or share personal
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white flex flex-col justify-center">
            <Users className="w-16 h-16 mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to experience intelligent assistance?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of users who have transformed their decision-making
              with Zyvanta.
            </p>
            <Link href="/auth/register">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 h-14 font-bold"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
