"use client";

import {
  Sprout,
  CloudRain,
  Thermometer,
  Droplets,
  TrendingUp,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgriculturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-emerald-50/30">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sprout className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Agriculture Optimizer
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Optimize crop yields, monitor weather patterns, and make
              data-driven farming decisions with AI.
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
                <Sprout className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
                <div className="text-sm text-gray-600">Active Crops</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  +32%
                </div>
                <div className="text-sm text-gray-600">Yield Increase</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CloudRain className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  7 Days
                </div>
                <div className="text-sm text-gray-600">Weather Forecast</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Calendar className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-sm text-gray-600">Pending Tasks</div>
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
              {/* Crop Management */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <Sprout className="w-6 h-6 mr-3" />
                    Crop Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Track all your crops, monitor growth stages, and get
                    AI-powered recommendations for optimal yields.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900">
                          Wheat (Field A)
                        </div>
                        <span className="text-sm bg-green-200 text-green-800 px-3 py-1 rounded-full font-medium">
                          Growing
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        Planted: 45 days ago • Expected harvest: 30 days
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-gray-900">
                          Rice (Field B)
                        </div>
                        <span className="text-sm bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-medium">
                          Needs Attention
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        Planted: 20 days ago • Soil moisture low
                      </div>
                      <div className="w-full bg-yellow-100 rounded-full h-2">
                        <div
                          className="bg-yellow-600 h-2 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full">
                    Add New Crop
                  </Button>
                </CardContent>
              </Card>

              {/* Weather & Climate */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <CloudRain className="w-6 h-6 mr-3" />
                    Weather Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Get hyper-local weather forecasts, rainfall predictions, and
                    climate insights tailored for farming.
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                    <div className="text-center mb-4">
                      <CloudRain className="w-16 h-16 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        28°C
                      </div>
                      <div className="text-gray-600">Partly Cloudy</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <Thermometer className="w-5 h-5 text-orange-600 mx-auto mb-2" />
                        <div className="text-xs text-gray-500">Temp</div>
                        <div className="font-bold text-gray-900">28°C</div>
                      </div>
                      <div>
                        <Droplets className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                        <div className="text-xs text-gray-500">Humidity</div>
                        <div className="font-bold text-gray-900">65%</div>
                      </div>
                      <div>
                        <CloudRain className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
                        <div className="text-xs text-gray-500">Rain</div>
                        <div className="font-bold text-gray-900">40%</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                    7-Day Forecast
                  </Button>
                </CardContent>
              </Card>

              {/* AI Recommendations */}
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden md:col-span-2">
                <CardHeader className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    AI Farming Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6">
                    Get personalized farming advice, optimal planting schedules,
                    and pest control recommendations.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-2">
                            Yield Optimization Tip
                          </div>
                          <div className="text-gray-700 text-sm">
                            Based on soil analysis, increasing nitrogen content
                            by 15% in Field A could boost wheat yield by 20-25%.
                            Consider organic fertilizers for best results.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-600">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-2">
                            Pest Alert
                          </div>
                          <div className="text-gray-700 text-sm">
                            Weather conditions favorable for aphid activity in
                            the next 3 days. Monitor rice crops closely and
                            apply preventive measures if needed.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Ask farming questions..."
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">
                      Ask AI
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
