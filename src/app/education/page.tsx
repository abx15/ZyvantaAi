"use client";

import {
  BookOpen,
  Search,
  TrendingUp,
  Award,
  Target,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-indigo-50/30">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Education Assistant
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find the best schools, track academic progress, and get
              personalized learning recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Search className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  1,245
                </div>
                <div className="text-sm text-gray-600">Schools Indexed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">85%</div>
                <div className="text-sm text-gray-600">Progress Rate</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">7</div>
                <div className="text-sm text-gray-600">Active Goals</div>
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
              {/* School Finder */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Search className="w-6 h-6 mr-3" />
                    School Finder
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Discover top-rated schools in your area with detailed
                    rankings, facilities, and reviews.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900">
                          Cambridge Public School
                        </div>
                        <div className="text-sm font-bold text-blue-600">
                          4.9★
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        K-12 • 1.2 km away
                      </div>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          CBSE
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          Sports
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900">
                          St. Mary's Academy
                        </div>
                        <div className="text-sm font-bold text-blue-600">
                          4.7★
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        6-12 • 2.5 km away
                      </div>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          ICSE
                        </span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                          Arts
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                    Explore More Schools
                  </Button>
                </CardContent>
              </Card>

              {/* Progress Tracker */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    Academic Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Track your child's academic performance across subjects and
                    get insights for improvement.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Mathematics
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Science
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          88%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          English
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          95%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full">
                    View Detailed Report
                  </Button>
                </CardContent>
              </Card>

              {/* AI Tutor */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden md:col-span-2">
                <CardHeader className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Brain className="w-6 h-6 mr-3" />
                    AI Learning Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Get personalized study plans, homework help, and concept
                    explanations from our AI tutor.
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 mb-2">
                          Today's Recommendation
                        </div>
                        <div className="text-gray-600 text-sm leading-relaxed mb-4">
                          Based on recent performance, focus on strengthening
                          algebra concepts. I've created a personalized practice
                          set with 15 problems covering quadratic equations and
                          factorization.
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                        >
                          Start Practice
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Ask for help with homework..."
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">
                      Ask
                    </Button>
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
