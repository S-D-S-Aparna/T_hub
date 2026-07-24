# BE-Yourself

Welcome to **BE-Yourself**, a comprehensive platform connecting students and individuals to mentors, educational roadmaps, community discussions, upskilling modules, sports domains, and much more.

## Overview

BE-Yourself is built with a modern tech stack to provide an intuitive and seamless experience. It features various modules catering to holistic development:
- **Education & Roadmaps**: Find structured paths after 10th/12th/Bachelors/Masters.
- **Mentorship**: Browse and book 1-on-1 sessions with featured mentors.
- **Community**: Join groups, share ideas, and connect.
- **Upskilling**: Enhance your skills with curated modules.
- **Sports & Co-curricular**: Discover and explore extracurricular domains.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express, Prisma, PostgreSQL (Neon)
- **AI Integrations**: Gemini / HuggingFace
- **Maps API**: Google Maps Platform

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### 1. Setup Backend
```bash
cd "Back end"
npm install
```
Add your `.env` file with `DATABASE_URL` (PostgreSQL) and other required keys.
```bash
npx prisma db push
npm run dev
```

### 2. Setup Frontend
```bash
cd "Front end"
npm install
```
Add your `.env.local` file with the necessary API keys (`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, etc.).
```bash
npm run dev
```

### Accessing the app
Open your browser and navigate to `http://localhost:3000`.

## Features
- Fully responsive modern UI
- Chatbot integration on the frontend
- Authentication and User Registration using PostgreSQL
- Comprehensive dashboard and module-specific sidebars
