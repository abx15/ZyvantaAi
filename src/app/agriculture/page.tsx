"use client";

import React, { useState } from "react";
import { 
  Sprout, 
  Cloud, 
  Droplets, 
  Sun, 
  TrendingUp,
  AlertTriangle,
  Calendar,
  MapPin,
  Thermometer,
  Wind,
  Camera,
  BookOpen,
  DollarSign,
  Users,
  ChevronLeft,
  Tractor,
  Wheat,
  Bug,
  Flower,
  Leaf,
  ThermometerSun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const agricultureServices = [
  {
    icon: Cloud,
    title: "Weather Forecast",
    description: "Hyperlocal weather predictions and farming recommendations",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Bug,
    title: "Pest Detection",
    description: "AI-powered pest identification and treatment suggestions",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Droplets,
    title: "Irrigation Planning",
    description: "Smart water management and irrigation scheduling",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    icon: DollarSign,
    title: "Market Prices",
    description: "Real-time crop prices and market trend analysis",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Flower,
    title: "Crop Health",
    description: "Monitor crop health and disease detection",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: BookOpen,
    title: "Farming Guide",
    description: "Best practices and modern farming techniques",
    color: "bg-purple-100 text-purple-600"
  }
];

const crops = [
  { name: "Wheat", icon: Wheat, season: "Rabi", price: "₹2,200/quintal", trend: "+5%" },
  { name: "Rice", icon: Sprout, season: "Kharif", price: "₹1,900/quintal", trend: "+3%" },
  { name: "Cotton", icon: Flower, season: "Kharif", price: "₹6,500/quintal", trend: "-2%" },
  { name: "Pulses", icon: Leaf, season: "Rabi", price: "₹4,500/quintal", trend: "+8%" }
];

const weatherData = {
  temperature: "28°C",
  humidity: "65%",
  rainfall: "2.5mm",
  windSpeed: "12 km/h",
  condition: "Partly Cloudy"
};

export default function AgriculturePage() {
  const [selectedCrop, setSelectedCrop] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ChevronLeft />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full">
              <Sprout className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Agriculture Engine</h1>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Smart Farming Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered agricultural intelligence for better yields, sustainable farming, and increased profits
          </p>
        </div>

        {/* Crop Disease Detection */}
        <Card className="bg-emerald-50 border-emerald-200 mb-12">
          <CardHeader>
            <CardTitle className="text-emerald-700 flex items-center gap-2">
              <Camera className="w-5 h-5" /> Disease Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-emerald-600 mb-4">
              Notice spots on leaves? Upload a photo for instant diagnosis.
            </p>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              Take Photo
            </Button>
          </CardContent>
        </Card>

        {/* Weather Widget */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Today's Farming Weather
            </CardTitle>
            <CardDescription>
              Real-time weather conditions optimized for agricultural decisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <Thermometer className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-lg font-semibold">{weatherData.temperature}</div>
                <p className="text-sm text-gray-600">Temperature</p>
              </div>
              <div className="text-center">
                <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-lg font-semibold">{weatherData.humidity}</div>
                <p className="text-sm text-gray-600">Humidity</p>
              </div>
              <div className="text-center">
                <Cloud className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
                <div className="text-lg font-semibold">{weatherData.rainfall}</div>
                <p className="text-sm text-gray-600">Rainfall</p>
              </div>
              <div className="text-center">
                <Wind className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                <div className="text-lg font-semibold">{weatherData.windSpeed}</div>
                <p className="text-sm text-gray-600">Wind Speed</p>
              </div>
              <div className="text-center">
                <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-lg font-semibold">{weatherData.condition}</div>
                <p className="text-sm text-gray-600">Condition</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather & Soil */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <ThermometerSun className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <p className="text-xs text-slate-500 uppercase">Weather</p>
              <p className="text-lg font-bold">32°C</p>
              <p className="text-[10px] text-slate-400">Clear Skies</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Leaf className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
              <p className="text-xs text-slate-500 uppercase">Soil Moisture</p>
              <p className="text-lg font-bold">45%</p>
              <p className="text-[10px] text-slate-400">Optimum</p>
            </CardContent>
          </Card>
        </div>

        {/* Market Prices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Today's Market Prices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crops.map((crop, index) => {
              const Icon = crop.icon;
              const isPositive = crop.trend.startsWith('+');
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-6 w-6 text-green-600" />
                        <CardTitle className="text-lg">{crop.name}</CardTitle>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {crop.trend}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-gray-900">{crop.price}</div>
                      <p className="text-sm text-gray-600">Season: {crop.season}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mandi Prices */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              Live Mandi Prices (Nearby)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center text-sm border-b pb-2">
              <span>Wheat</span>
              <span className="font-bold">₹2,450 / quintal</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b pb-2">
              <span>Mustard</span>
              <span className="font-bold">₹5,120 / quintal</span>
            </div>
          </CardContent>
        </Card>

        {/* Crop Advisor */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-5 w-5" />
              Crop Advisor
            </CardTitle>
            <CardDescription>
              Get personalized recommendations for your crops and region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Crop</label>
                <select 
                  className="w-full p-2 border rounded-lg"
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                >
                  <option value="">Choose a crop</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="cotton">Cotton</option>
                  <option value="pulses">Pulses</option>
                  <option value="vegetables">Vegetables</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Select Region</label>
                <select 
                  className="w-full p-2 border rounded-lg"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value="">Choose your region</option>
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="east">East India</option>
                  <option value="west">West India</option>
                  <option value="central">Central India</option>
                </select>
              </div>
            </div>
            <Button className="w-full md:w-auto">
              Get Recommendations
            </Button>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Agriculture Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agricultureServices.map((service, index) => {
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

        {/* Farming Alerts */}
        <Card className="mb-12 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Farming Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-sm">Pest Alert: Locusts</h4>
                  <p className="text-xs text-gray-600">High risk in western regions. Take preventive measures.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-sm">Weather Warning</h4>
                  <p className="text-xs text-gray-600">Heavy rainfall expected in next 48 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-sm">Optimal Planting Time</h4>
                  <p className="text-xs text-gray-600">Best conditions for wheat planting this week.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Farming Resources */}
        <div className="bg-green-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Farming Resources
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Camera className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium mb-1">Crop Scanner</h4>
              <p className="text-sm text-gray-600">AI disease detection</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium mb-1">Farm Calendar</h4>
              <p className="text-sm text-gray-600">Planting schedules</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium mb-1">Expert Connect</h4>
              <p className="text-sm text-gray-600">Talk to agronomists</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Tractor className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-medium mb-1">Equipment</h4>
              <p className="text-sm text-gray-600">Modern tools guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
