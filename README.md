<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Travukwik - Modern Travel Agency

A modern travel agency website built with Next.js, featuring AI-powered travel planning assistance.

View the original app in AI Studio: https://ai.studio/apps/drive/13LZ8iiLijuZ11dUFKbzPJwk8DKD2pFqZ

## Features

- ✈️ Flight booking services
- 🛂 Visa assistance
- 🏨 Hotel reservations
- 🗺️ Holiday packages
- 🤖 AI-powered travel planning (optional)

## Run Locally

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set up AI features - Create a `.env.local` file and add your Gemini API key:
   ```
   NEXT_PUBLIC_API_KEY=your_gemini_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **AI:** Google Gemini API (optional)

## Project Structure

```
travukwik/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # React components
├── services/         # API services
├── public/           # Static assets
└── types.ts          # TypeScript types
```