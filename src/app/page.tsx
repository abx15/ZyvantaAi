"use client";

import {
  Brain,
  Heart,
  BookOpen,
  Sprout,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Globe,
  Target,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const partners = [
    { name: "Microsoft", color: "from-blue-600 to-blue-700", icon: "MS" },
    { name: "Google", color: "from-red-500 to-yellow-500", icon: "G" },
    { name: "Amazon", color: "from-orange-500 to-yellow-600", icon: "AMZ" },
    { name: "Meta", color: "from-blue-500 to-purple-600", icon: "M" },
    { name: "Apple", color: "from-gray-700 to-gray-900", icon: "" },
    { name: "IBM", color: "from-blue-700 to-blue-900", icon: "IBM" },
    { name: "Oracle", color: "from-red-600 to-red-800", icon: "O" },
    { name: "SAP", color: "from-blue-600 to-indigo-700", icon: "SAP" },
    { name: "Adobe", color: "from-red-600 to-pink-600", icon: "Ad" },
    { name: "Salesforce", color: "from-cyan-500 to-blue-600", icon: "SF" },
  ];

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
            <Sparkles className="w-4 h-4" />
            <span>✨ AI-Powered Decision Engine</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Zyvanta
            </span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            Intelligence for Everyday Life
          </p>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-4">
            Advanced AI decision engine for Health, Education, and Agriculture.
            Get personalized insights and make smarter decisions with
            cutting-edge technology.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Powered by state-of-the-art machine learning models, Zyvanta
            analyzes your queries in real-time to deliver accurate, actionable
            recommendations tailored to your specific needs across multiple
            domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth/register" className="cursor-pointer">
              <Button
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-10 h-14 font-bold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/how-it-works" className="cursor-pointer">
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-10 h-14 font-bold transition-all"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              Three Powerful Domains
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Driven Insights Across Multiple Domains
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Zyvanta combines cutting-edge AI technology with specialized
            expertise in health, education, and agriculture to deliver
            domain-specific intelligence that understands your unique
            challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Health */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Health Intelligence
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Comprehensive health management platform that tracks vital signs,
              provides personalized health recommendations based on your medical
              history, and helps you find the best healthcare facilities near
              you with verified ratings and reviews.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Track family health metrics and medical history in one secure
                  place
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Find hospitals with real-time availability, ratings, and
                  specializations
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Get AI-powered health insights and symptom analysis instantly
                </span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Smart Education
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Revolutionize your learning experience with AI-powered
              explanations that adapt to your learning style, personalized study
              paths based on your strengths and weaknesses, and interactive
              tutoring that makes complex concepts easy to understand.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Adaptive learning paths that evolve with your progress and
                  goals
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Instant concept explanations with visual aids and real-world
                  examples
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Smart study recommendations based on learning patterns and
                  performance
                </span>
              </li>
            </ul>
          </div>

          {/* Agriculture */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
              <Sprout className="w-7 h-7 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AgriTech Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Transform your farming operations with intelligent insights. Get
              smart farming advice tailored to your soil type and location,
              precise crop management recommendations, and advanced weather
              predictions to optimize yields and reduce risk.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  AI-powered crop recommendations based on soil, climate, and
                  market trends
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Hyperlocal weather forecasts with precision down to your farm
                  location
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Early pest detection and management strategies to protect your
                  crops
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Explore Our Services
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Click on any service to explore detailed features, view
              comprehensive dashboards, and start making smarter, data-driven
              decisions in your area of interest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Health Service Card */}
            <Link href="/health" className="cursor-pointer">
              <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 p-8 text-white">
                  <Heart className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Health Intelligence
                  </h3>
                  <p className="text-red-100">
                    Complete health management solution for you and your family
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Track your family&apos;s health metrics, find top-rated
                    hospitals in your area, and get personalized AI-powered
                    health insights and recommendations based on your medical
                    history.
                  </p>
                  <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Explore Health Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Education Service Card */}
            <Link href="/education" className="cursor-pointer">
              <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                  <BookOpen className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Smart Education</h3>
                  <p className="text-blue-100">
                    Personalized learning experience powered by AI
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Find the best educational institutions, track academic
                    progress with detailed analytics, and learn with AI-powered
                    tutoring that adapts to your unique learning style and pace.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Explore Education Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Agriculture Service Card */}
            <Link href="/agriculture" className="cursor-pointer">
              <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white">
                  <Sprout className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    AgriTech Solutions
                  </h3>
                  <p className="text-green-100">
                    Smart farming made simple with AI assistance
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Optimize crop yields with AI recommendations, monitor
                    precise weather patterns for your location, and get
                    intelligent farming guidance to maximize productivity and
                    minimize risks.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Explore Agriculture Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Simple & Powerful
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Zyvanta Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Get AI-powered insights in three simple steps - no technical
              knowledge required, just ask your question and let our intelligent
              system do the rest.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-200">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ask Your Question
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Type or speak your query using natural language in the decision
                bar. No need for technical jargon - just ask as you would to a
                friend.
              </p>
              <p className="text-sm text-gray-500 italic">
                Example: &quot;What crops are best for my soil type?&quot;
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-200">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI Processing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our advanced AI engine analyzes your question using multiple
                specialized models, cross-referencing real-time data sources and
                domain-specific knowledge bases.
              </p>
              <p className="text-sm text-gray-500 italic">
                Processing happens in milliseconds with 95%+ accuracy
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-200">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Get Results
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Receive personalized, actionable recommendations with supporting
                data, visualizations, and step-by-step guidance instantly on
                your dashboard.
              </p>
              <p className="text-sm text-gray-500 italic">
                Results are tailored specifically to your situation and location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 text-blue-600 font-bold">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span>TRUSTED BY THOUSANDS</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">
              Making an impact every day
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Zyvanta is transforming how people make decisions in their daily
              lives. Our AI-powered platform has helped thousands of users
              across India get smarter, data-driven insights for health,
              education, and agriculture.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From helping farmers increase crop yields by 30% to assisting
              students improve their grades by 2 full points, our platform
              delivers real, measurable results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our growing community and experience the power of intelligent
              decision-making backed by cutting-edge AI technology.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">50K+</div>
                  <div className="text-blue-100 text-lg">
                    Active Users Nationwide
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">10M+</div>
                  <div className="text-blue-100 text-lg">
                    AI Queries Processed Successfully
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-blue-100 text-lg">
                    AI Accuracy Rate Across Domains
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-blue-100 text-lg">
                    Bank-Level Data Security & Privacy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zyvanta */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zyvanta?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Advanced features and capabilities that set us apart from generic
              AI assistants and make us the intelligent choice for your
              decision-making needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Domain Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike generic chatbots that provide surface-level answers, our
                AI is meticulously fine-tuned specifically for health,
                education, and agriculture using specialized machine learning
                models trained on domain-specific data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This means you get expert-level insights that understand the
                nuances and complexities of your specific field, backed by the
                latest research and best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy First
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your data stays yours - always. We never sell, share, or
                monetize your personal information. Every interaction is
                protected with bank-level AES-256 encryption, ensuring your
                sensitive health, education, and agricultural data remains
                completely private.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re GDPR and ISO 27001 compliant, with regular
                third-party security audits to maintain the highest standards of
                data protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get instant answers with our highly optimized AI infrastructure
                deployed across multiple data centers. Real-time processing
                delivers accurate results in under 2 seconds, with 99.9% uptime
                guaranteed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our advanced caching and prediction algorithms ensure that
                common queries are answered almost instantaneously, while
                complex analyses still complete in record time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join thousands of users and organizations worldwide who trust
              Zyvanta for intelligent, data-driven decision-making across
              critical domains.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="py-8"
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-28">
                    <div
                      className={`bg-gradient-to-r ${partner.color} text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      <div className="text-center">
                        {partner.icon && (
                          <div className="text-3xl font-extrabold mb-1">
                            {partner.icon}
                          </div>
                        )}
                        {partner.icon === "" && (
                          <div className="text-3xl mb-1"></div>
                        )}
                        <div className="text-sm font-semibold">
                          {partner.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-white text-center">
          <Globe className="w-16 h-16 mx-auto mb-8 opacity-90" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Decision-Making?
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            Join over 50,000 users making smarter decisions with AI-powered
            insights across health, education, and agriculture.
          </p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
            Start your free trial today - no credit card required, no hidden
            fees, and full access to all features for 30 days.
          </p>
          <Link href="/auth/register" className="cursor-pointer inline-block">
            <Button
              size="lg"
              className="cursor-pointer bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 h-14 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
