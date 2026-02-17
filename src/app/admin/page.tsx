"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, AlertTriangle, TrendingUp, Monitor } from "lucide-react";

export default function AdminPage() {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      icon: <Users />,
      color: "text-blue-600",
    },
    {
      title: "Active Alerts",
      value: "5",
      icon: <AlertTriangle />,
      color: "text-rose-600",
    },
    {
      title: "AI Cost (MTD)",
      value: "$125.40",
      icon: <TrendingUp />,
      color: "text-emerald-600",
    },
    {
      title: "Sys Health",
      value: "99.9%",
      icon: <Monitor />,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Oversight Portal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                {stat.title}
              </CardTitle>
              <div className={stat.color}>{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Disease Outbreak Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center text-slate-400">
              Interactive Map Plugin Ready
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "User signed up from Bihar",
                "Crop disease detected (Wheat Rust)",
                "High severity health alert: Fever in Sector 4",
                "AI fallback to Ollama (Local) for User 402",
              ].map((log, i) => (
                <div
                  key={i}
                  className="text-sm border-b pb-2 flex justify-between"
                >
                  <span>{log}</span>
                  <span className="text-xs text-slate-400">2m ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
