# Agriculture AI API

This document describes the Agriculture AI endpoints for crop management, weather insights, and farming recommendations.

## Base URL

```
http://localhost:3000/api/agriculture
```

---

## Endpoints

### 1. Ask Farming Question

Get AI-powered farming advice.

**Endpoint**: `POST /api/agriculture/ask`

**Headers**:

```
Authorization: Bearer <session_token>
Content-Type: application/json
```

**Request Body**:

```json
{
  "question": "When should I plant wheat in North India?",
  "context": {
    "location": {
      "latitude": 28.7041,
      "longitude": 77.1025,
      "region": "North India"
    },
    "soilType": "loamy",
    "farmSize": 5,
    "previousCrop": "rice"
  }
}
```

**Success Response** (200):

```json
{
  "answer": "Wheat planting in North India is optimal from mid-October to mid-November...",
  "recommendations": [
    "Soil preparation: Start 2 weeks before planting",
    "Seed rate: 100kg per hectare",
    "Fertilizer: NPK 120:60:40"
  ],
  "weatherConsiderations": [
    "Ensure soil moisture is adequate",
    "Avoid planting if heavy rain is forecast"
  ],
  "expectedYield": {
    "range": "40-45 quintals/hectare",
    "factors": ["soil quality", "weather", "management"]
  }
}
```

---

### 2. Add Crop

Add a new crop to track.

**Endpoint**: `POST /api/agriculture/crops`

**Request Body**:

```json
{
  "name": "Wheat",
  "variety": "HD-2967",
  "fieldName": "Field A",
  "area": 2.5,
  "unit": "hectare",
  "plantingDate": "2025-11-15",
  "expectedHarvestDate": "2026-04-15",
  "soilType": "loamy",
  "irrigationType": "drip"
}
```

**Success Response** (201):

```json
{
  "id": "crop_123...",
  "name": "Wheat",
  "variety": "HD-2967",
  "status": "growing",
  "growthStage": "germination",
  "daysPlanted": 0,
  "expectedHarvest": 150,
  "aiInsights": [
    "Monitor soil moisture closely in first 2 weeks",
    "Apply first fertilizer dose after 21 days"
  ]
}
```

---

### 3. Update Crop Status

Log crop observations.

**Endpoint**: `PATCH /api/agriculture/crops/:cropId`

**Request Body**:

```json
{
  "observation": {
    "date": "2025-12-01",
    "growthStage": "tillering",
    "height": 15,
    "healthStatus": "good",
    "issues": [],
    "photos": ["url1", "url2"]
  },
  "actions": [
    {
      "type": "fertilization",
      "details": "Applied NPK 120:60:40",
      "date": "2025-11-30"
    }
  ]
}
```

**Success Response** (200):

```json
{
  "crop": {
    "id": "crop_123...",
    "growthStage": "tillering",
    "healthScore": 95,
    "daysPlanted": 16
  },
  "aiAnalysis": {
    "health": "Crop is developing well",
    "recommendations": [
      "Continue current irrigation schedule",
      "Watch for aphid activity"
    ],
    "predictedYield": "42 quintals/hectare"
  }
}
```

---

### 4. Get Weather Forecast

Hyper-local agricultural weather.

**Endpoint**: `GET /api/agriculture/weather`

**Query Parameters**:

- `latitude` (required)
- `longitude` (required)
- `days` (optional): Forecast days (1-14, default: 7)

**Success Response** (200):

```json
{
  "current": {
    "temperature": 28,
    "humidity": 65,
    "rainfall": 0,
    "windSpeed": 12,
    "soilMoisture": 45
  },
  "forecast": [
    {
      "date": "2026-02-18",
      "temperature": { "min": 18, "max": 30 },
      "rainfall": 40,
      "rainfallProbability": 0.6,
      "windSpeed": 15,
      "advisory": "Postpone irrigation, rain expected"
    }
  ],
  "weeklyInsights": {
    "totalRainfall": 45,
    "avgTemperature": 27,
    "farmingAdvisory": "Good week for field preparation"
  }
}
```

---

### 5. Pest & Disease Detection

Identify crop issues from images.

**Endpoint**: `POST /api/agriculture/detect`

**Request Body** (multipart/form-data):

```
cropId: crop_123...
photo: <file upload>
description: "Yellow spots on leaves"
```

**Success Response** (200):

```json
{
  "detection": {
    "issue": "Leaf Rust",
    "confidence": 0.92,
    "severity": "medium",
    "affectedArea": "leaves"
  },
  "treatment": {
    "chemical": ["Spray Mancozeb 75% WP @ 2.5g/liter"],
    "organic": ["Neem oil spray @ 5ml/liter"],
    "cultural": ["Remove infected leaves", "Improve air circulation"]
  },
  "prevention": ["Avoid overhead irrigation", "Maintain proper spacing"]
}
```

---

### 6. Yield Prediction

Get AI-powered yield forecast.

**Endpoint**: `GET /api/agriculture/crops/:cropId/yield-prediction`

**Success Response** (200):

```json
{
  "predicted": {
    "value": 42,
    "unit": "quintals/hectare",
    "confidence": 0.85
  },
  "factors": {
    "weather": 0.9,
    "soilHealth": 0.88,
    "cropHealth": 0.92,
    "management": 0.85
  },
  "scenarios": {
    "optimistic": 48,
    "realistic": 42,
    "pessimistic": 36
  },
  "recommendations": [
    "Maintain current fertilization schedule",
    "Monitor for potential pest issues"
  ]
}
```

---

## AI Models Used

### Crop Advisory

- **Primary**: OpenAI GPT-4 (agricultural knowledge)
- **Regional**: Fine-tuned models for local conditions
- **Weather**: Integration with meteorological AI

### Pest Detection

- **Computer Vision**: Custom trained CNN
- **Classification**: 200+ pest and disease types
- **Accuracy**: 92% on validation set

### Yield Prediction

- **Algorithm**: Ensemble of ML models
- **Features**: Weather, soil, crop health, historical data
- **Accuracy**: ±15% of actual yield

---

## Data Types

### Crop Types

```typescript
type CropType =
  | "wheat"
  | "rice"
  | "corn"
  | "cotton"
  | "sugarcane"
  | "potato"
  | "tomato"
  | "vegetables"
  | "fruits";
```

### Soil Types

```typescript
type SoilType = "sandy" | "loamy" | "clayey" | "silt" | "peaty" | "chalky";
```

### Irrigation Types

```typescript
type IrrigationType = "drip" | "sprinkler" | "flood" | "pivot" | "rainfed";
```

---

## Rate Limits

| Endpoint            | Limit              |
| ------------------- | ------------------ |
| `/ask`              | 10 requests/minute |
| `/crops`            | 50 requests/hour   |
| `/weather`          | 100 requests/hour  |
| `/detect`           | 20 requests/hour   |
| `/yield-prediction` | 30 requests/day    |

---

## Best Practices

1. **Provide accurate location** for weather and regional advice
2. **Update crop status regularly** for better predictions
3. **Upload clear photos** for pest detection
4. **Log all farming activities** for comprehensive analysis
5. **Review AI recommendations** with agricultural experts
6. **Monitor weather forecasts** before major activities
