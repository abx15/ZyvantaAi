"use client";

import {
  Heart,
  Plus,
  Users,
  Activity,
  Calendar,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 to-pink-50/30">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Health Intelligence
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Track your family's health, find the best hospitals, and get
              AI-powered health recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                <div className="text-sm text-gray-600">Family Members</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Activity className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">127</div>
                <div className="text-sm text-gray-600">Health Logs</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-sm text-gray-600">Next Checkups</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Health Score</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Family Health Tracker */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-red-500 to-pink-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="w-6 h-6 mr-3" />
                    Family Health Tracker
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Monitor vital signs, medications, and health records for all
                    family members in one place.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="font-bold text-gray-900">John Doe</div>
                        <div className="text-sm text-gray-500">
                          Last checkup: 2 days ago
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="font-bold text-gray-900">Sarah Doe</div>
                        <div className="text-sm text-gray-500">
                          Last checkup: 1 week ago
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 rounded-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Family Member
                  </Button>
                </CardContent>
              </Card>

              {/* Hospital Finder */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Heart className="w-6 h-6 mr-3" />
                    Hospital Finder
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Find nearby hospitals, view ratings, specialties, and get AI
                    recommendations based on your needs.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900">
                          City General Hospital
                        </div>
                        <div className="text-sm font-bold text-blue-600">
                          4.8★
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        2.5 km away • Multi-specialty
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900">
                          Metro Health Center
                        </div>
                        <div className="text-sm font-bold text-blue-600">
                          4.6★
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        3.8 km away • Cardiac Care
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                    Search Hospitals
                  </Button>
                </CardContent>
              </Card>

              {/* AI Health Assistant */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden md:col-span-2">
                <CardHeader className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Activity className="w-6 h-6 mr-3" />
                    AI Health Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Ask health-related questions and get instant, AI-powered
                    insights backed by medical knowledge.
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 mb-2">
                          Recent Insight
                        </div>
                        <div className="text-gray-600 text-sm leading-relaxed">
                          Based on your recent vital signs, your blood pressure
                          is slightly elevated. Consider reducing sodium intake
                          and increasing physical activity. Schedule a checkup
                          if symptoms persist.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Ask a health question..."
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">
                      Ask AI
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alerts */}
            <Card className="mt-8 border-yellow-200 bg-yellow-50 rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900 mb-1">
                      Upcoming Checkup Reminder
                    </div>
                    <div className="text-gray-600 text-sm">
                      John Doe has a dental checkup scheduled for tomorrow at
                      3:00 PM.
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="ml-auto rounded-full border-yellow-300"
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
