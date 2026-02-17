import {
  Target,
  Users,
  Zap,
  Heart,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200">
            <Award className="w-4 h-4" />
            <span>✨ Trusted by 50,000+ Users</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Zyvanta</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&#39;re building the future of intelligent decision-making, empowering
            individuals with AI-driven insights across health, education, and
            agriculture.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 text-blue-600 font-bold">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <span>OUR MISSION</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">
              Making intelligence accessible to everyone
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Zyvanta was born from a simple idea: advanced AI shouldn&#39;t be
              exclusive to tech giants. We believe every person deserves access
              to intelligent systems that can help them make better decisions in
              their daily life—from health tracking to learning new skills and
              managing agricultural operations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform combines cutting-edge AI models with domain-specific
              expertise to deliver actionable insights that truly matter.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">1.2M+</div>
                  <div className="text-blue-100">AI Recommendations</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50K+</div>
                  <div className="text-blue-100">Active Users</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">AI Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Zyvanta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                User-First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature is designed with the user in mind. We prioritize
                simplicity, speed, and usefulness above all else.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push the boundaries of what&#39;s possible with AI,
                staying ahead with the latest models and techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                We measure success by the positive impact we have on people&#39;s
                lives, not just metrics and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built by Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team combines decades of experience in AI research, software
            engineering, and domain expertise.
          </p>
        </div>

        <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-white text-center">
          <Globe className="w-16 h-16 mx-auto mb-8 opacity-90" />
          <h3 className="text-3xl font-bold mb-6">
            Global Impact, Local Touch
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            We&apos;re a distributed team working across multiple continents, united
            by a shared mission to democratize AI.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 h-14"
            >
              Join Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
