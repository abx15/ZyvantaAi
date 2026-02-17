# 🌌 Zyvanta - Intelligent Life Assistant

Zyvanta is a production-grade, offline-first intelligent platform designed to serve as a decision engine for **Health, Education, and Agriculture**. Built with Next.js 16, it leverages a polyglot persistence layer and multi-AI orchestration to provide a seamless, state-of-the-art experience.

## ✨ Key Features

- 🏥 **Health Engine**: Symptom triage, prescription analysis, and doctor matching.
- 🎓 **Education Engine**: Personalized career paths, study planners, and skill gap analysis.
- 🌾 **Agriculture Engine**: Crop disease identification, market price forecasting, and seasonal planning.
- 🤖 **Multi-AI Orchestrator**: Dynamic routing between **OpenAI (GPT-4)**, **Google Gemini**, **xAI Grok**, and local **Ollama** models.
- 📷 **Vision AI**: On-device image analysis using **TensorFlow.js** and **MobileNet**.
- 📶 **Offline-First**: Robust PWA support with **Service Workers**, **IndexedDB (idb)**, and **Background Sync**.
- 🔐 **Secure Auth**: Role-based access control (User, Admin, Authority) using **NextAuth.js**.
- 🎤 **Voice Input**: Speech-to-text capabilities with OpenAI Whisper integration.
- 💬 **Smart Decision Bar**: AI-powered interface for natural language queries.

## 🚀 Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Databases**:
  - **PostgreSQL (Prisma)**: Structured domain data.
  - **MongoDB (Mongoose)**: AI reasoning logs and unstructured chat history.
  - **Redis (Upstash)**: Real-time caching and job queues.
- **AI/ML**: OpenAI, Google Gemini, xAI Grok, Ollama, TensorFlow.js
- **Tools**: ImageKit (Media), Zod (Validation), Sonner (Toast notifications)

## 🛠️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/zyvanta.git
   cd zyvanta
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file from `.env.example` and fill in your credentials.

   ```bash
   cp .env.example .env
   ```

   **Required Environment Variables:**
   - `DATABASE_URL`: PostgreSQL connection string
   - `MONGODB_URI`: MongoDB connection string
   - `REDIS_URL`: Redis connection string
   - `OPENAI_API_KEY`: OpenAI API key for GPT-4 and Whisper
   - `GEMINI_API_KEY`: Google Gemini API key
   - `XAI_GROK_API_KEY`: xAI Grok API key
   - `NEXTAUTH_SECRET`: NextAuth.js secret key
   - `NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY`: ImageKit public key
   - `IMAGEKIT_PRIVATE_KEY`: ImageKit private key
   - `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT`: ImageKit URL endpoint

4. **Database Setup**:

   ```bash
   npx prisma generate
   npx prisma db push
   npm run seed
   ```

5. **Run Development Server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 🎯 How to Use

1. **Open the application** in your browser
2. **Ask questions** using the decision bar at the bottom
3. **Use voice input** by clicking the microphone button
4. **Upload images** for AI analysis using the image button
5. **Get personalized recommendations** based on your queries

**Example Queries:**
- "I have 20k rupees - what should I do?"
- "What are the symptoms of vitamin D deficiency?"
- "Best crops to grow in monsoon season?"
- "Explain quantum computing in simple terms"

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── actions/        # Server actions
│   ├── auth/           # Authentication pages
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── ui/            # Shadcn UI components
│   ├── DecisionBar.tsx # Main input interface
│   ├── VoiceUI.tsx     # Voice input component
│   └── Providers.tsx   # App providers
├── lib/                # Utility libraries
│   ├── ai/            # AI orchestration
│   ├── mongodb.ts     # MongoDB connection
│   └── vision.ts      # Image processing
├── models/             # MongoDB schemas
└── hooks/              # Custom React hooks
```

## 🔧 Development

- **Linting**: `npm run lint`
- **Building**: `npm run build`
- **Production**: `npm start`
- **Database Seeding**: `npm run seed`

## 🛡️ Security

Sensitive data (API keys, passwords) are strictly managed via environment variables and are excluded from version control. Sample data seeding is handled via `prisma/seed.ts` for a controlled development environment.

## 🌟 Features in Detail

### AI Orchestrator
- Automatically selects the best AI model based on query type
- Supports fallback to local Ollama models for offline usage
- Caches responses for improved performance

### Voice Input
- Real-time speech-to-text using OpenAI Whisper
- Fallback to browser speech recognition
- Audio recording with visual feedback

### Vision AI
- On-device image classification using TensorFlow.js
- MobileNet model for object detection
- Privacy-focused processing (no server upload required)

### Offline Support
- Service Worker for caching critical resources
- IndexedDB for local data storage
- Background sync for queued actions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
