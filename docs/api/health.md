# Health AI API

This document describes the Health AI endpoints for managing family health, hospitals, and AI health insights.

## Base URL

```
http://localhost:3000/api/health
```

---

## Endpoints

### 1. Ask Health Question

Get AI-powered health insights.

**Endpoint**: `POST /api/health/ask`

**Headers**:

```
Authorization: Bearer <session_token>
Content-Type: application/json
```

**Request Body**:

```json
{
  "question": "What are the symptoms of high blood pressure?",
  "context": {
    "age": 45,
    "gender": "male",
    "existingConditions": ["diabetes"]
  }
}
```

**Success Response** (200):

```json
{
  "answer": "High blood pressure symptoms include...",
  "sources": ["WHO Guidelines", "Mayo Clinic"],
  "recommendations": [
    "Monitor blood pressure daily",
    "Reduce sodium intake",
    "Exercise 30 minutes daily"
  ],
  "urgency": "medium",
  "followUp": ["Should I see a doctor?", "What foods should I avoid?"]
}
```

---

### 2. Add Family Member

Add a family member to health tracker.

**Endpoint**: `POST /api/health/family`

**Request Body**:

```json
{
  "name": "Jane Doe",
  "relationship": "spouse",
  "dateOfBirth": "1980-05-15",
  "bloodGroup": "A+",
  "allergies": ["peanuts"],
  "medications": []
}
```

**Success Response** (201):

```json
{
  "id": "mem_123...",
  "name": "Jane Doe",
  "relationship": "spouse",
  "createdAt": "2026-02-17T10:00:00.000Z"
}
```

---

### 3. Add Health Log

Record vital signs or health data.

**Endpoint**: `POST /api/health/logs`

**Request Body**:

```json
{
  "familyMemberId": "mem_123...",
  "type": "blood_pressure",
  "readings": {
    "systolic": 120,
    "diastolic": 80
  },
  "timestamp": "2026-02-17T09:30:00.000Z",
  "notes": "Morning reading before breakfast"
}
```

**Success Response** (201):

```json
{
  "id": "log_456...",
  "type": "blood_pressure",
  "readings": {
    "systolic": 120,
    "diastolic": 80
  },
  "status": "normal",
  "aiInsight": "Your blood pressure is within normal range."
}
```

---

### 4. Find Hospitals

Search nearby hospitals.

**Endpoint**: `GET /api/health/hospitals`

**Query Parameters**:

- `latitude` (required): User's latitude
- `longitude` (required): User's longitude
- `radius` (optional): Search radius in km (default: 10)
- `specialty` (optional): Filter by specialty

**Example**:

```
GET /api/health/hospitals?latitude=28.7041&longitude=77.1025&radius=5&specialty=cardiology
```

**Success Response** (200):

```json
{
  "hospitals": [
    {
      "id": "hos_789...",
      "name": "City General Hospital",
      "distance": 2.5,
      "rating": 4.8,
      "specialties": ["cardiology", "neurology"],
      "address": "123 Main St, City",
      "phone": "+91-123-456-7890",
      "emergency": true
    }
  ],
  "total": 15
}
```

---

### 5. Get Health Summary

Get overall health summary for user/family.

**Endpoint**: `GET /api/health/summary`

**Query Parameters**:

- `memberId` (optional): Specific family member (default: all)
- `period` (optional): Time period - `week`, `month`, `year` (default: month)

**Success Response** (200):

```json
{
  "healthScore": 92,
  "insights": [
    "Blood pressure stable",
    "Weight trending down",
    "Sleep quality improved"
  ],
  "alerts": [
    {
      "severity": "medium",
      "message": "Overdue for dental checkup"
    }
  ],
  "stats": {
    "logsCount": 127,
    "checkupsCompleted": 3,
    "medicationAdherence": 0.95
  }
}
```

---

## AI Models Used

### Health Query Processing

- **Primary**: OpenAI GPT-4 (medical knowledge base)
- **Secondary**: Google Gemini (multi-modal support)
- **Refinement**: Domain-specific fine-tuned model

### Health Score Calculation

- **Algorithm**: Proprietary scoring system
- **Factors**: Vital signs, activity, sleep, nutrition, medications
- **Range**: 0-100 (higher is better)

---

## Data Types

### Vital Signs Types

- `blood_pressure`
- `heart_rate`
- `temperature`
- `weight`
- `blood_sugar`
- `oxygen_saturation`

### Health Log Structure

```typescript
{
  id: string;
  familyMemberId: string;
  type: VitalSignType;
  readings: Record<string, number>;
  timestamp: Date;
  notes?: string;
  aiInsight?: string;
}
```

---

## Rate Limits

| Endpoint     | Limit              |
| ------------ | ------------------ |
| `/ask`       | 10 requests/minute |
| `/family`    | 20 requests/hour   |
| `/logs`      | 100 requests/hour  |
| `/hospitals` | 30 requests/minute |
| `/summary`   | 60 requests/hour   |

---

## Error Handling

```json
{
  "error": "Invalid vital sign type",
  "code": "INVALID_TYPE",
  "details": {
    "validTypes": ["blood_pressure", "heart_rate", "..."]
  }
}
```

---

## Best Practices

1. **Always include context** when asking health questions
2. **Verify AI responses** with healthcare professionals
3. **Log vitals regularly** for accurate health tracking
4. **Set up reminders** for medications and checkups
5. **Never share** sensitive health data without encryption
