"use client";

import React, { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Activity,
  Calendar,
  Clock,
  Brain,
  Heart,
  BookOpen,
  Sprout,
  ChevronLeft,
  Settings,
  Bell,
  Search,
  Filter,
  User as UserIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const stats = [
  {
    title: "Total Queries",
    value: "1,234",
    change: "+12%",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Health Checks",
    value: "45",
    change: "+8%",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    title: "Study Sessions",
    value: "89",
    change: "+23%",
    icon: BookOpen,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Farm Analysis",
    value: "12",
    change: "+5%",
    icon: Sprout,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  }
];

const recentActivity = [
  {
    id: 1,
    type: "AI Query",
    description: "Asked about investment strategies",
    time: "2 minutes ago",
    icon: Brain,
    color: "text-blue-600"
  },
  {
    id: 2,
    type: "Health Check",
    description: "Completed symptom analysis",
    time: "1 hour ago",
    icon: Heart,
    color: "text-red-600"
  },
  {
    id: 3,
    type: "Study Progress",
    description: "Completed mathematics module",
    time: "3 hours ago",
    icon: BookOpen,
    color: "text-green-600"
  },
  {
    id: 4,
    type: "Crop Analysis",
    description: "Checked wheat disease symptoms",
    time: "1 day ago",
    icon: Sprout,
    color: "text-yellow-600"
  }
];

const upcomingTasks = [
  {
    title: "Complete UPSC Study Module",
    due: "Today",
    priority: "high",
    category: "Education"
  },
  {
    title: "Follow-up Health Check",
    due: "Tomorrow",
    priority: "medium",
    category: "Health"
  },
  {
    title: "Review Crop Market Prices",
    due: "This Week",
    priority: "low",
    category: "Agriculture"
  }
];

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ChevronLeft />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back! Here's your activity overview.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bgColor}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100`}>
                        <Icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">{activity.type}</h4>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="p-3 rounded-lg border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        task.priority === 'high' ? 'bg-red-100 text-red-700' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{task.category}</span>
                      <span>{task.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Frequently used features and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Brain className="h-6 w-6" />
                <span className="text-sm">Ask AI</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-sm">Health Check</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm">Study Mode</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Sprout className="h-6 w-6" />
                <span className="text-sm">Farm Analysis</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Usage Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Usage Analytics
                </CardTitle>
                <CardDescription>
                  Track your activity across all services
                </CardDescription>
              </div>
              <select 
                className="px-3 py-1 border rounded-lg text-sm"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="day">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Analytics Chart</p>
                <p className="text-sm text-gray-500">Usage statistics will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
