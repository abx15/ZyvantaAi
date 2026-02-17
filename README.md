# 🧠 Zyvanta - AI Decision Intelligence Platform

![Zyvanta](./public/favicon.png)

**Zyvanta** is a next-generation AI-powered decision intelligence platform that provides personalized insights across three core domains: **Health**, **Education**, and **Agriculture**. Built with Next.js 16, React 19, and powered by multiple AI models, Zyvanta helps users make smarter, data-driven decisions for everyday life.

---

## ✨ Features

### 🏥 Health Intelligence

- **Family Health Tracker** - Monitor vital signs and health records for all family members
- **Hospital Finder** - Discover nearby hospitals with ratings, specialties, and reviews
- **AI Health Assistant** - Get instant, AI-powered health insights and recommendations
- **Checkup Reminders** - Never miss important medical appointments

### 📚 Education Assistant

- **School Finder** - Search and compare schools with detailed rankings and facilities
- **Progress Tracking** - Monitor academic performance across subjects
- **AI Tutor** - Personalized study plans and homework assistance
- **Achievement System** - Track milestones and learning goals

### 🌱 Agriculture Optimizer

- **Crop Management** - Track crop growth stages and manage multiple fields
- **Weather Intelligence** - Hyper-local forecasts and climate insights
- **AI Farming Assistant** - Yield optimization and pest control recommendations
- **Soil Analysis** - Data-driven farming decisions

### 🤖 AI Decision Engine

- **Multi-Domain Expertise** - Specialized AI models for each domain
- **Contextual Understanding** - Remembers conversation history for better answers
- **Voice Input** - Natural language processing for voice queries
- **24/7 Availability** - Always-on intelligent assistant

---

## 🚀 Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with server components
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Lucide React** - Beautiful icon library

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Primary database (Neon)
- **MongoDB** - Document storage (optional)
- **Redis** - Caching and session management

### Authentication

- **NextAuth.js** - Complete authentication solution
- **JWT** - Secure token-based authentication
- **bcryptjs** - Password hashing

### AI Integration

- **OpenAI API** - GPT models for general intelligence
- **Google Gemini** - Multi-modal AI capabilities
- **Grok API** - Real-time AI processing

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (or Neon serverless)
- MongoDB (optional)
- Redis (optional, for caching)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/zyvanta.git
cd zyvanta
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/zyvanta"
MONGODB_URI="mongodb://localhost:27017/zyvanta"
REDIS_URL="redis://localhost:6379"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-change-this"

# AI APIs
OPENAI_API_KEY="sk-..."
GOOGLE_AI_API_KEY="AIza..."
GROK_API_KEY="xai-..."

# Email (for verification)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@zyvanta.com"

# ImageKit (optional)
IMAGEKIT_PUBLIC_KEY="your-public-key"
IMAGEKIT_PRIVATE_KEY="your-private-key"
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your-id"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma db push

# Seed database (optional)
npm run seed
```

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Documentation

Comprehensive API and integration documentation is available in the `/docs` folder:

- [Authentication API](./docs/api/auth.md) - User registration, login, password reset
- [Health AI API](./docs/api/health.md) - Health queries and recommendations
- [Education AI API](./docs/api/education.md) - Educational insights and tutoring
- [Agriculture AI API](./docs/api/agriculture.md) - Farming insights and predictions
- [User Management](./docs/api/users.md) - Profile and settings management

---

## 🎯 Quick Start Guide

### 1. Register an Account

Visit `/auth/register` and create your account. You'll receive a verification email.

### 2. Explore Features

- **Home Page** - See all features and capabilities (no login required)
- **Dashboard** - Your personalized overview (requires login)
- **AI Apps** - Access Health, Education, Agriculture, and AI Engine (requires login)

### 3. Ask the AI

Navigate to the AI Engine (`/ai`) and start asking questions:

- "What are the symptoms of diabetes?"
- "Find me the best schools for science education"
- "What's the best time to plant wheat in my region?"

---

## 🔐 Authentication

Zyvanta uses **NextAuth.js** with middleware-based route protection.

### Protected Routes

- `/dashboard`
- `/health`
- `/education`
- `/agriculture`
- `/ai`
- `/profile`
- `/settings`

Unauthenticated users are automatically redirected to `/auth/login` with a callback URL.

### Public Routes

- `/` (Home)
- `/about`
- `/contact`
- `/how-it-works`
- `/services`
- `/auth/login`
- `/auth/register`

---

## 🏗️ Project Structure

```
zyvanta/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/             # Authentication pages
│   │   ├── api/                # API routes
│   │   ├── health/             # Health domain pages
│   │   ├── education/          # Education domain pages
│   │   ├── agriculture/        # Agriculture domain pages
│   │   ├── ai/                 # AI Engine page
│   │   ├── dashboard/          # User dashboard
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   └── Header.tsx          # Main navigation
│   ├── lib/                    # Utility functions
│   │   ├── db.ts               # Prisma client
│   │   ├── email.ts            # Email utilities
│   │   └── ai.ts               # AI integrations
│   ├── models/                 # Data models
│   └── middleware.ts           # Route protection
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Database seeding
├── public/                     # Static assets
├── docs/                       # Documentation
│   └── api/                    # API documentation
├── .env.example                # Environment variables template
└── README.md                   # This file
```

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t zyvanta .

# Run container
docker run -p 3000:3000 zyvanta
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment
- **OpenAI** - For GPT models
- **shadcn** - For beautiful UI components

---

## 📧 Contact

- **Website**: [https://zyvanta.com](https://zyvanta.com)
- **Email**: support@zyvanta.com
- **Twitter**: [@ZyvantaAI](https://twitter.com/ZyvantaAI)

---

## 🌟 Star Us!

If you find Zyvanta useful, please consider giving us a star ⭐ on GitHub!

---

**Made with ❤️ by the Zyvanta Team**
