"use client";

import React, { useState } from "react";
import { 
  Heart, 
  Activity, 
  Pill, 
  Stethoscope, 
  AlertCircle, 
  CheckCircle,
  Thermometer,
  Brain,
  Eye,
  Bone,
  ChevronLeft,
  Plus,
  Clipboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const healthServices = [
  {
    icon: Stethoscope,
    title: "Symptom Checker",
    description: "AI-powered symptom analysis and potential conditions",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Pill,
    title: "Medication Info",
    description: "Drug information, interactions, and side effects",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Track vital signs and health metrics over time",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Mental wellness assessment and support resources",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Eye,
    title: "Vision Care",
    description: "Eye health assessment and care recommendations",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Bone,
    title: "Bone Health",
    description: "Bone density assessment and osteoporosis risk",
    color: "bg-yellow-100 text-yellow-600"
  }
];

const commonSymptoms = [
  "Fever", "Headache", "Cough", "Fatigue", "Nausea", 
  "Chest Pain", "Shortness of Breath", "Dizziness", "Joint Pain", "Skin Rash"
];

export default function HealthPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const analyzeSymptoms = async () => {
    if (selectedSymptoms.length === 0) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ChevronLeft />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-full">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Health Engine</h1>
          </div>
        </header>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Thermometer className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <CardTitle>Quick Check-up</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                Fast symptom assessment in 2 minutes
              </p>
              <Button className="w-full">Start Check-up</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <CardTitle>Emergency Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                When to seek immediate medical care
              </p>
              <Button variant="outline" className="w-full">View Guide</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle>Health Score</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-4">
                Get your overall health assessment
              </p>
              <Button variant="outline" className="w-full">Calculate Score</Button>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Health Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                    <Button variant="ghost" className="mt-4 p-0 h-auto">
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Symptom Checker */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              Interactive Symptom Checker
            </CardTitle>
            <CardDescription>
              Select your symptoms to get AI-powered health insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {commonSymptoms.map((symptom) => (
                <Button
                  key={symptom}
                  variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSymptom(symptom)}
                  className="text-sm"
                >
                  {symptom}
                </Button>
              ))}
            </div>
            
            {selectedSymptoms.length > 0 && (
              <div className="mb-6">
                <h4 className="font-medium mb-2">Selected Symptoms:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button 
              onClick={analyzeSymptoms}
              disabled={selectedSymptoms.length === 0 || isAnalyzing}
              className="w-full md:w-auto"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Symptoms"}
            </Button>
          </CardContent>
        </Card>

        {/* Health Timeline */}
        <div className="mb-12">
          <h3 className="font-semibold mb-3">Family Health Timeline</h3>
          <div className="space-y-2">
            {[
              { name: "Arjun (Self)", date: "Today", status: "Healthy" },
              {
                name: "Sita (Daughter)",
                date: "Yesterday",
                status: "Vaccination Due",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white p-3 rounded-lg border text-sm"
              >
                <span>{item.name}</span>
                <span
                  className={
                    item.status.includes("Due")
                      ? "text-rose-500 font-medium"
                      : "text-emerald-500"
                  }
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Daily Health Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Stay Hydrated</h4>
                <p className="text-gray-600 text-sm">Drink at least 8 glasses of water daily</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Regular Exercise</h4>
                <p className="text-gray-600 text-sm">30 minutes of moderate activity daily</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Balanced Diet</h4>
                <p className="text-gray-600 text-sm">Include fruits and vegetables in every meal</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Quality Sleep</h4>
                <p className="text-gray-600 text-sm">7-9 hours of sleep per night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
