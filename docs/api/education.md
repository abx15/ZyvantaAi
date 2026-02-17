# Education AI API

This document describes the Education AI endpoints for school search, progress tracking, and AI tutoring.

## Base URL

```
http://localhost:3000/api/education
```

---

## Endpoints

### 1. Ask Education Question

Get AI-powered educational help.

**Endpoint**: `POST /api/education/ask`

**Headers**:

```
Authorization: Bearer <session_token>
Content-Type: application/json
```

**Request Body**:

```json
{
  "question": "Explain quadratic equations",
  "subject": "mathematics",
  "gradeLevel": 10,
  "context": {
    "currentTopic": "algebra",
    "difficulty": "intermediate"
  }
}
```

**Success Response** (200):

```json
{
  "answer": "A quadratic equation is a polynomial equation of degree 2...",
  "examples": ["x² + 5x + 6 = 0", "2x² - 3x + 1 = 0"],
  "steps": [
    "Identify coefficients a, b, c",
    "Calculate discriminant",
    "Apply quadratic formula"
  ],
  "practiceProblems": [
    { "question": "Solve: x² + 2x - 3 = 0", "difficulty": "easy" }
  ],
  "relatedTopics": ["factorization", "completing the square"]
}
```

---

### 2. Search Schools

Find and compare schools.

**Endpoint**: `GET /api/education/schools`

**Query Parameters**:

- `latitude` (required): Latitude
- `longitude` (required): Longitude
- `radius` (optional): Search radius in km (default: 10)
- `board` (optional): CBSE, ICSE, State, IB
- `grade` (optional): K-12 grade range
- `rating` (optional): Minimum rating (0-5)

**Example**:

```
GET /api/education/schools?latitude=28.7041&longitude=77.1025&radius=5&board=CBSE&rating=4
```

**Success Response** (200):

```json
{
  "schools": [
    {
      "id": "sch_123...",
      "name": "Cambridge Public School",
      "board": "CBSE",
      "grades": "K-12",
      "distance": 1.2,
      "rating": 4.9,
      "facilities": ["sports", "library", "labs"],
      "fees": {
        "annual": 250000,
        "currency": "INR"
      },
      "address": "123 Education St, City"
    }
  ],
  "total": 45
}
```

---

### 3. Track Academic Progress

Log student performance.

**Endpoint**: `POST /api/education/progress`

**Request Body**:

```json
{
  "studentId": "stu_456...",
  "subject": "Mathematics",
  "assessment": {
    "type": "test",
    "topic": "Algebra",
    "score": 85,
    "totalMarks": 100,
    "date": "2026-02-15"
  }
}
```

**Success Response** (201):

```json
{
  "id": "prog_789...",
  "subject": "Mathematics",
  "score": 85,
  "percentile": 92,
  "aiInsight": "Excellent performance! Focus on trigonometry next.",
  "trend": "improving",
  "recommendations": ["Practice word problems", "Review geometry concepts"]
}
```

---

### 4. Get Study Plan

Generate personalized study plan.

**Endpoint**: `POST /api/education/study-plan`

**Request Body**:

```json
{
  "studentId": "stu_456...",
  "subjects": ["Mathematics", "Science", "English"],
  "goals": {
    "targetExam": "Board Exams",
    "examDate": "2026-03-30",
    "targetScore": 90
  },
  "availability": {
    "hoursPerDay": 4,
    "daysPerWeek": 6
  }
}
```

**Success Response** (200):

```json
{
  "planId": "plan_012...",
  "duration": "45 days",
  "schedule": [
    {
      "day": 1,
      "tasks": [
        {
          "subject": "Mathematics",
          "topic": "Quadratic Equations",
          "duration": 90,
          "activities": ["video", "practice", "test"]
        }
      ]
    }
  ],
  "milestones": [
    {
      "week": 2,
      "assessment": "Chapter test on Algebra"
    }
  ]
}
```

---

### 5. Get Performance Analytics

View detailed analytics.

**Endpoint**: `GET /api/education/analytics`

**Query Parameters**:

- `studentId` (required)
- `period` (optional): `week`, `month`, `semester`, `year`
- `subjects` (optional): Comma-separated list

**Success Response** (200):

```json
{
  "overall": {
    "average": 88.5,
    "rank": 12,
    "percentile": 95
  },
  "subjectWise": [
    {
      "subject": "Mathematics",
      "average": 92,
      "trend": "stable",
      "strengths": ["algebra", "geometry"],
      "weaknesses": ["trigonometry"]
    }
  ],
  "aiRecommendations": [
    "Allocate more time to Science",
    "Practice previous year papers"
  ]
}
```

---

## AI Models Used

### Tutoring & Q&A

- **Primary**: OpenAI GPT-4 (educational content)
- **Secondary**: Google Gemini (multi-modal explanations)
- **Specialized**: Subject-specific fine-tuned models

### Study Plan Generation

- **Algorithm**: Spaced repetition + AI optimization
- **Factors**: Performance history, learning style, time available

---

## Data Types

### Subjects

```typescript
type Subject =
  | "Mathematics"
  | "Science"
  | "English"
  | "Social Studies"
  | "Hindi"
  | "Computer Science";
```

### Assessment Types

```typescript
type AssessmentType = "test" | "quiz" | "assignment" | "project" | "exam";
```

---

## Rate Limits

| Endpoint      | Limit              |
| ------------- | ------------------ |
| `/ask`        | 15 requests/minute |
| `/schools`    | 30 requests/minute |
| `/progress`   | 50 requests/hour   |
| `/study-plan` | 10 requests/day    |
| `/analytics`  | 60 requests/hour   |

---

## Best Practices

1. **Provide grade level** for accurate tutoring
2. **Log progress regularly** for better recommendations
3. **Review AI-generated plans** with educators
4. **Track multiple subjects** for holistic view
5. **Set realistic goals** in study plans
