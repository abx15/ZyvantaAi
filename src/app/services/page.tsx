import {
  Heart,
  BookOpen,
  Sprout,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "health",
    title: "AI Health Monitoring",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    description:
      "Personalized healthcare assistant that tracks your vitals, provides symptom analysis, and suggests wellness routines.",
    types: [
      "Symptom Checker",
      "Wellness Planning",
      "Medication Reminders",
      "Health History Logging",
    ],
    howItWorks: [
      {
        step: "Log Data",
        desc: "Enter your symptoms or sync with wearable devices.",
      },
      {
        step: "AI Analysis",
        desc: "Our models analyze patterns and potential risks.",
      },
      {
        step: "Recommendations",
        desc: "Receive personalized advice and next steps.",
      },
    ],
  },
  {
    id: "education",
    title: "Intelligent Learning",
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    description:
      "Adaptive education engine that helps students master complex concepts through AI-driven explanations and practice.",
    types: [
      "Concept Simplifier",
      "Practice Quiz Generator",
      "Career Path Guidance",
      "Instant Tutoring",
    ],
    howItWorks: [
      {
        step: "Choose Topic",
        desc: "Select the subject or concept you want to learn.",
      },
      {
        step: "Adaptive Content",
        desc: "AI adjusts the difficulty based on your pace.",
      },
      {
        step: "Mastery Check",
        desc: "Verify your knowledge with smart assessments.",
      },
    ],
  },
  {
    id: "agriculture",
    title: "Smart Farming Advice",
    icon: Sprout,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    description:
      "Digital agronomist providing real-time crop management, weather insights, and market price predictions for farmers.",
    types: [
      "Crop Disease Detection",
      "Soil Health Monitoring",
      "Market Analysis",
      "Irrigation Scheduling",
    ],
    howItWorks: [
      {
        step: "Field Check",
        desc: "Upload photos of crops or enter soil data.",
      },
      {
        step: "Specialized Analysis",
        desc: "Agronomy-tuned models process the data.",
      },
      {
        step: "Yield Optimization",
        desc: "Get specific instructions for better harvests.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200">
            <Zap className="w-4 h-4" />
            <span>✨ Specialized AI Services</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Specialized</span> AI Services
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how Zyvanta&apos;s intelligent engine can transform your daily
            life across agriculture, health, and education.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-40">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div
                    className={`inline-flex items-center space-x-3 ${service.color} ${service.bgColor} px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border ${service.borderColor}`}
                  >
                    <service.icon className="w-5 h-5" />
                    <span>{service.id} Service</span>
                  </div>

                  <h2 className="text-5xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.types.map((type) => (
                      <div
                        key={type}
                        className="flex items-center space-x-3 text-gray-700 font-medium"
                      >
                        <CheckCircle2 className={`w-5 h-5 ${service.color}`} />
                        <span>{type}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className={`${service.bgColor.replace("50", "600")} hover:opacity-90 text-white rounded-xl shadow-lg border-none`}
                  >
                    Explore {service.title}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* How it works side */}
                <div
                  className={`flex-1 w-full p-8 md:p-12 rounded-[2.5rem] ${service.bgColor} border ${service.borderColor} shadow-inner`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    How It Works
                  </h3>
                  <div className="space-y-8">
                    {service.howItWorks.map((step, i) => (
                      <div key={step.step} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl font-bold text-gray-900 border border-gray-100">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">
                            {step.step}
                          </h4>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50">
                    <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Tip: Our AI improves as you provide more context.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="space-y-4">
              <Shield className="w-12 h-12 text-blue-400 mx-auto" />
              <h3 className="text-xl font-bold">Data Privacy</h3>
              <p className="text-gray-400">
                Your personal data is encrypted and never shared with third
                parties.
              </p>
            </div>
            <div className="space-y-4">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto" />
              <h3 className="text-xl font-bold">Fast Processing</h3>
              <p className="text-gray-400">
                Get results in seconds thanks to our distributed AI inference
                network.
              </p>
            </div>
            <div className="space-y-4">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
              <h3 className="text-xl font-bold">Verified Expertise</h3>
              <p className="text-gray-400">
                Our models are fine-tuned on peer-reviewed data and expert
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
