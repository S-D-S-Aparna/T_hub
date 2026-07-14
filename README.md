# 🎓 BE Yourself

> **A full-stack AI-powered career guidance and mentoring platform** that helps students explore career paths, connect with mentors, receive AI-powered guidance, discover colleges and courses, and track their learning journey.

---

## 🌟 Overview

**BE Yourself** is a comprehensive platform designed to empower students in making informed career decisions. It combines AI-powered career assistance with mentor guidance, educational resources, and community features — all in one place.

Whether you're a student exploring career options after 10th, 12th, or during your bachelor's/master's, BE Yourself provides personalized roadmaps, curated resources, and expert mentorship to guide your journey.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI Career Assistant** | Chat with an AI-powered bot for personalized career advice and guidance |
| 🗺️ **Personalized Roadmaps** | Get step-by-step career roadmaps tailored to your interests and goals |
| 📅 **Mentor Booking System** | Browse mentor profiles, book sessions, and receive expert guidance |
| 📊 **Student Dashboard** | Track your learning progress, bookings, and saved resources |
| 🔐 **Authentication** | Secure signup/login with JWT-based authentication |
| 🔔 **Notifications** | Stay updated with real-time notifications and alerts |
| 🗺️ **Google Maps Integration** | Discover nearby colleges, coaching centers, and educational institutions |
| 📚 **Course Recommendations** | Explore curated courses for upskilling, competitive exams, and more |
| 🎯 **Career Guidance** | Explore paths after 10th, 12th, bachelor's, master's, and PhD |
| 📱 **Responsive UI** | Beautiful, mobile-friendly interface built with Tailwind CSS |
| 🏫 **Admin Dashboard** | Manage users, mentors, events, and platform content |
| 🏅 **Sports & Co-curricular** | Discover opportunities in sports and extracurricular activities |
| 🎓 **Scholarships** | Browse and discover relevant scholarship opportunities |
| 🤝 **Community** | Connect with peers, share experiences, and participate in discussions |
| 📅 **Events** | Discover and RSVP for career fairs, workshops, and seminars |

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Language:** TypeScript

### Database
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)

### Deployment
- **Frontend:** [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)
- **Backend:** Netlify Serverless Functions

---

## 🚀 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (or use Prisma Postgres)

### Clone Repository
```bash
git clone https://github.com/S-D-S-Aparna/BE-Yourself.git
cd BE-Yourself
```

### Install Dependencies

**Frontend:**
```bash
cd "Front end"
npm install
```

**Backend:**
```bash
cd "Back end"
npm install
```

### Configure Environment

Create a `.env` file in both `Front end/` and `Back end/` directories using the examples below:

**Backend `.env`:**
```env
DATABASE_URL="your-database-connection-string"
JWT_SECRET="your-jwt-secret"
PORT=5000
```

**Frontend `.env.local`:**
```env
NEXT_PUBLIC_API_URL="http://localhost:5000"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
```

### Set Up Database
```bash
cd "Back end"
npx prisma migrate dev
npx prisma db seed
```

### Run the Application

**Start Backend Server:**
```bash
cd "Back end"
npm run dev
```

**Start Frontend Dev Server:**
```bash
cd "Front end"
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

---

## 📁 Project Structure

```
BE-Yourself/
├── Front end/                    # Next.js frontend application
│   ├── src/
│   │   ├── app/                  # Next.js App Router pages
│   │   │   ├── admin/            # Admin dashboard
│   │   │   ├── chat/             # AI chatbot interface
│   │   │   ├── co-curricular/    # Co-curricular activities
│   │   │   ├── community/        # Community features
│   │   │   ├── competitive-exams/# Competitive exam resources
│   │   │   ├── dashboard/        # Student dashboard
│   │   │   ├── education/        # Education pathways
│   │   │   ├── events/           # Events & workshops
│   │   │   ├── login/            # Authentication - login
│   │   │   ├── mentors/          # Mentor profiles & booking
│   │   │   ├── notifications/    # Notifications center
│   │   │   ├── resources/        # Learning resources
│   │   │   ├── roadmap/          # Career roadmaps
│   │   │   ├── saved/            # Saved items
│   │   │   ├── scholarships/     # Scholarship listings
│   │   │   ├── search/           # Global search
│   │   │   ├── signup/           # Authentication - signup
│   │   │   ├── sports/           # Sports careers
│   │   │   ├── support/          # Help & support
│   │   │   └── upskilling/       # Skill development
│   │   ├── components/           # Reusable UI components
│   │   │   ├── chat/             # Chat components
│   │   │   ├── education/        # Education components
│   │   │   ├── layout/           # Layout (Navbar, Sidebar)
│   │   │   ├── maps/             # Google Maps components
│   │   │   └── mentors/          # Mentor components
│   │   └── context/              # React Context providers
│   ├── public/                   # Static assets
│   ├── package.json
│   └── tsconfig.json
│
├── Back end/                     # Express.js backend API
│   ├── src/
│   │   ├── controllers/          # Route controllers
│   │   ├── middleware/            # Auth middleware
│   │   ├── routes/               # API route definitions
│   │   ├── db.ts                 # Database connection
│   │   └── server.ts             # Express server entry point
│   ├── prisma/
│   │   ├── schema.prisma         # Database schema
│   │   ├── seed.ts               # Database seeder
│   │   └── seed-education.ts     # Education data seeder
│   ├── netlify/                  # Netlify serverless functions
│   ├── package.json
│   └── tsconfig.json
│
├── prisma/                       # Root Prisma configuration
│   └── schema.prisma
├── .gitignore
├── LICENSE
└── README.md
```

---

## 📸 Screenshots

> Screenshots coming soon! The platform features a modern, responsive UI with:
> - 🏠 Landing page with feature highlights
> - 📊 Interactive student dashboard
> - 🤖 AI-powered chatbot interface
> - 👨‍🏫 Mentor profiles and booking system
> - 🗺️ Google Maps college finder
> - 📚 Education pathway explorer

---

## 🔮 Future Improvements

- [ ] 📄 **Resume Analyzer** — AI-powered resume review and suggestions
- [ ] 🎤 **Interview Preparation** — Practice questions and tips for interviews
- [ ] 🤖 **AI Mock Interviews** — Simulate real interview experiences with AI
- [ ] 💼 **Internship Portal** — Discover and apply for internship opportunities
- [ ] 📈 **Placement Tracker** — Track placement drives and application status
- [ ] 📊 **Learning Analytics** — Detailed insights into learning progress and patterns
- [ ] 🌐 **Multi-language Support** — Support for regional languages
- [ ] 📱 **Mobile App** — Native mobile application for iOS and Android

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Author

**S. Divya Sri Aparna**

- GitHub: [@S-D-S-Aparna](https://github.com/S-D-S-Aparna)

---

<p align="center">
  Made with ❤️ for students, by a student.
</p>
