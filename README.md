# 🌌 Athar | Senior Full Stack Engineer Portfolio

A premium, high-performance portfolio built with **Next.js 15**, **React 19**, and **Three.js**. This project showcases high-end web architecture, immersive 3D backgrounds, and an integrated Gemini-powered AI assistant.

## ✨ Core Features

- **🚀 Next.js 15 & React 19**: Leveraging the latest features like Server Components, Actions, and enhanced hydration.
- **✨ Immersive 3D Background**: A dynamic, GPU-accelerated star field powered by `Three.js` and `@react-three/fiber`.
- **🤖 Gemini AI Chatbot**: An integrated AI assistant trained on personal professional data to answer queries in real-time.
- **⚡ Performance Optimized**: Achieving near-perfect Lighthouse scores with optimized image delivery and minimal bundle size.
- **🎨 Premium UI/UX**: Custom-designed using Tailwind CSS, Framer Motion, and GSAP for fluid, "Awwwards-level" transitions.
- **📱 Responsive & Accessible**: Fully optimized for all device sizes with semantic HTML and accessibility best practices.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion, GSAP
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei, maath
- **AI Integration**: Google Gemini API (@google/genai)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- A Google Gemini API Key

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/AI_Portfolio.git
   cd AI_Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_GEMINI_API_KEY="your_gemini_api_key"
   EMAIL_USER="your_email@gmail.com"
   EMAIL_PASS="your_app_password"
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Project Structure

```text
├── app/              # Next.js 15 App Router (Pages, API routes)
├── components/       # Reusable UI components
├── lib/              # Shared data, constants, and utility functions
├── public/           # Static assets (Images, Icons)
├── styles/           # Global CSS and Tailwind configuration
└── next.config.ts    # Next.js configuration
```

## 🌐 Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Configure the environment variables in the Vercel Dashboard.
4. Deploy!

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
Built with ❤️ by Athar
</p>
