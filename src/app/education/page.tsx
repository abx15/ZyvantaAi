"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  GraduationCap, 
  Brain, 
  Target, 
  Award,
  Clock,
  TrendingUp,
  Users,
  ChevronLeft,
  Play,
  FileText,
  Video,
  Headphones,
  Calculator,
  Globe,
  Microscope,
  BarChart2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const educationServices = [
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description: "AI-powered career path recommendations based on skills and interests",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Target,
    title: "Study Planner",
    description: "Personalized study schedules and learning optimization",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Brain,
    title: "Skill Assessment",
    description: "Identify strengths and areas for improvement",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Award,
    title: "Certification Tracker",
    description: "Track professional certifications and requirements",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Connect with peers for collaborative learning",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Detailed insights into learning progress and performance",
    color: "bg-red-100 text-red-600"
  }
];

const subjects = [
  { name: "Mathematics", icon: Calculator, students: "2.3M", color: "bg-blue-50 text-blue-600" },
  { name: "Science", icon: Microscope, students: "1.8M", color: "bg-green-50 text-green-600" },
  { name: "Languages", icon: Globe, students: "3.1M", color: "bg-purple-50 text-purple-600" },
  { name: "Computer Science", icon: Brain, students: "2.7M", color: "bg-orange-50 text-orange-600" }
];

const learningPaths = [
  {
    title: "Web Development Bootcamp",
    duration: "12 weeks",
    level: "Beginner",
    enrolled: 15420,
    rating: 4.8
  },
  {
    title: "Data Science Fundamentals",
    duration: "16 weeks",
    level: "Intermediate",
    enrolled: 12350,
    rating: 4.9
  },
  {
    title: "Machine Learning Mastery",
    duration: "20 weeks",
    level: "Advanced",
    enrolled: 8920,
    rating: 4.7
  }
];

export default function EducationPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Education Engine</h1>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Personalized Learning Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered education platform that adapts to your learning style and pace
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">10M+</div>
              <p className="text-sm text-gray-600">Active Learners</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600 mb-1">500+</div>
              <p className="text-sm text-gray-600">Courses</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <p className="text-sm text-gray-600">AI Support</p>
            </CardContent>
          </Card>
        </div>

        {/* Career Path Generator */}
        <Card className="bg-blue-50 border-blue-200 mb-12">
          <CardHeader>
            <CardTitle className="text-blue-700 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" /> Career Navigator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-600 mb-4">
              Unsure about your next step? Let AI chart your career path based on your skills.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Generate Path
            </Button>
          </CardContent>
        </Card>

        {/* Learning Path Finder */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Find Your Learning Path
            </CardTitle>
            <CardDescription>
              Tell us about your interests and goals to get personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Subject of Interest</label>
                <select 
                  className="w-full p-2 border rounded-lg"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option value="">Select a subject</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="programming">Programming</option>
                  <option value="languages">Languages</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <select 
                  className="w-full p-2 border rounded-lg"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
            <Button className="w-full md:w-auto">
              Get Recommendations
            </Button>
          </CardContent>
        </Card>

        {/* Popular Subjects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Subjects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${subject.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      {subject.students} students
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Education Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationServices.map((service, index) => {
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

        {/* Study Planner */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-500" /> Exam Study Planner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border">
                <div>
                  <p className="text-sm font-medium">UPSC Prelims</p>
                  <p className="text-[10px] text-slate-500">45 Days Remaining</p>
                </div>
                <Button size="sm" variant="outline">Resume</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Tracker */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <BarChart2 className="w-4 h-4" /> Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1 text-slate-500">
                  <span>General Science</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[70%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1 text-slate-500">
                  <span>Quantitative Aptitude</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[45%]" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Learning Paths */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Learning Paths
          </h2>
          <div className="space-y-4">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{path.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {path.duration}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {path.level}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {path.enrolled.toLocaleString()} enrolled
                        </span>
                        <span className="flex items-center gap-1 text-yellow-600">
                          ⭐ {path.rating}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Start Learning</Button>
                        <Button variant="outline" size="sm">Preview</Button>
                      </div>
                    </div>
                    <div className="ml-4">
                      <Play className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium mb-1">Video Lessons</h4>
              <p className="text-sm text-gray-600">HD video content</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium mb-1">Study Materials</h4>
              <p className="text-sm text-gray-600">Comprehensive notes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium mb-1">Audio Lectures</h4>
              <p className="text-sm text-gray-600">Learn on the go</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-medium mb-1">Live Sessions</h4>
              <p className="text-sm text-gray-600">Interactive classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
