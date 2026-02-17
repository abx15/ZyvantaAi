"use client";

import {
  BarChart3,
  Heart,
  BookOpen,
  Sprout,
  TrendingUp,
  Calendar,
  Bell,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's your personalized overview.
              </p>
            </div>
            <div className="relative">
              <Button variant="outline" className="rounded-full">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Stats */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          AI Queries
                        </div>
                        <div className="text-3xl font-bold text-gray-900">
                          248
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          +12% this week
                        </div>
                      </div>
                      <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                        <Activity className="w-7 h-7 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Health Score
                        </div>
                        <div className="text-3xl font-bold text-gray-900">
                          92%
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          Excellent
                        </div>
                      </div>
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                        <Heart className="w-7 h-7 text-red-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Active Tasks
                        </div>
                        <div className="text-3xl font-bold text-gray-900">
                          17
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          5 due today
                        </div>
                      </div>
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Domain Overview */}
              <Card className="border-none shadow-lg rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                    Domain Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Heart className="w-5 h-5 text-red-600 mr-2" />
                          <span className="font-medium text-gray-900">
                            Health
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          127 logs
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-red-500 h-3 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium text-gray-900">
                            Education
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          64 activities
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Sprout className="w-5 h-5 text-green-600 mr-2" />
                          <span className="font-medium text-gray-900">
                            Agriculture
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          42 updates
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-none shadow-lg rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Activity className="w-6 h-6 mr-3 text-purple-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          Health Log Added
                        </div>
                        <div className="text-sm text-gray-600">
                          Blood pressure reading recorded for John Doe
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          2 hours ago
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          Study Progress Updated
                        </div>
                        <div className="text-sm text-gray-600">
                          Math assignment completed - 95% score
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          5 hours ago
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Sprout className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          Crop Status Update
                        </div>
                        <div className="text-sm text-gray-600">
                          Wheat in Field A reached 60% growth stage
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          1 day ago
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="border-none shadow-lg rounded-3xl">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/health">
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl h-12"
                    >
                      <Heart className="w-5 h-5 mr-3 text-red-600" />
                      Add Health Log
                    </Button>
                  </Link>
                  <Link href="/education">
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl h-12"
                    >
                      <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                      Track Progress
                    </Button>
                  </Link>
                  <Link href="/agriculture">
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl h-12"
                    >
                      <Sprout className="w-5 h-5 mr-3 text-green-600" />
                      Update Crops
                    </Button>
                  </Link>
                  <Link href="/ai">
                    <Button className="w-full rounded-xl h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Activity className="w-5 h-5 mr-3" />
                      Ask AI Anything
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Upcoming Tasks */}
              <Card className="border-none shadow-lg rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Upcoming Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <div className="font-medium text-gray-900 text-sm mb-1">
                      Dental Checkup
                    </div>
                    <div className="text-xs text-gray-600">
                      Tomorrow, 3:00 PM
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <div className="font-medium text-gray-900 text-sm mb-1">
                      Math Assignment Due
                    </div>
                    <div className="text-xs text-gray-600">In 2 days</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                    <div className="font-medium text-gray-900 text-sm mb-1">
                      Fertilizer Application
                    </div>
                    <div className="text-xs text-gray-600">In 3 days</div>
                  </div>
                </CardContent>
              </Card>

              {/* Insights */}
              <Card className="border-none shadow-lg rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                <CardContent className="p-6">
                  <TrendingUp className="w-10 h-10 mb-4 opacity-90" />
                  <div className="font-bold text-lg mb-2">Weekly Insights</div>
                  <div className="text-purple-100 text-sm mb-4">
                    You're 23% more active this week! Keep up the great progress
                    across all domains.
                  </div>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 rounded-full w-full"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
