<!-- <h1 align="center">SplitShare</h1>
<p align="center">
  <img src="Main.png" alt="SplitShare Logo" width="400"/>
</p>

---

A full-stack group expense splitting application built with the **MERN stack** (MongoDB, Express, React, Node.js).

---

## 📖 Introduction

**SplitShare** is a group expense management app built using the MERN stack.  
It allows users to create groups, invite other users, and manage shared expenses efficiently.  

Whether you're managing **trips, shared rentals, or team expenses**, SplitShare simplifies expense tracking and makes settling up easy and transparent.

---

## ✨ Features

### 🔐 Authentication
- Secure **login** and **signup** using JWT and bcrypt for password hashing.

### 📊 Dashboard
- Interactive **dashboard with charts and graphs** to visualize expenses clearly.
- View **group-wise summaries** and **individual spending trends**.

### 👥 Group Management
- **Create new groups** and invite people.
- **Rename or delete existing groups** easily.
- Manage members within each group.

### 💸 Expense Management
- **Add, update, or delete expenses** in specific groups.
- View **detailed breakdown of each expense**, including contributors.
- Track **expense slips and history** for transparency.

### 🔁 Settlement
- Automatically **calculate balances**.
- View **who owes whom** and **settle up** within the group.

---

## 📸 Screenshots

<table>
  <tr>
    <td align="center"><img src="login.png" width="180" alt="Login"/><br>Login</td>
    <td align="center"><img src="signup.png" width="180" alt="Signup"/><br>Signup</td>
    <td align="center"><img src="dashboard.png" width="180" alt="Dashboard"/><br>Dashboard</td>
    <td align="center"><img src="Group View Page.jpg" width="180" alt="Group Page"/><br>Group Page</td>
    <td align="center"><img src="profile.png" width="180" alt="Profile"/><br>Profile</td>
    <td align="center"><img src="Main.png" width="180" alt="Main Image"/><br>Main Image</td>
  </tr>
</table>

---

## ⚙️ Technologies Used

### 🖥️ Frontend
- **React JS**
- **Redux** – State management
- **Axios** – HTTP communication
- **Material UI** – Component library
- **Chart.js & React-chartjs-2** – Analytics graphs

### 🛠️ Backend
- **Express JS**
- **Mongoose** – MongoDB object modeling
- **JWT** – Authentication
- **bcryptjs** – Password hashing
- **MongoDB Atlas** – Cloud-hosted NoSQL database

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sourabh1211/SplitShare.git
   cd SplitShare
 -->





<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SplitShare • README</title>
  <!-- Tailwind via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ['Inter', 'ui-sans-serif', 'system-ui'],
          },
          keyframes: {
            floaty: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-6px)' },
            },
            fadeUp: {
              '0%': { opacity: 0, transform: 'translateY(12px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            shimmer: {
              '0%': { backgroundPosition: '200% 0' },
              '100%': { backgroundPosition: '-200% 0' },
            },
          },
          animation: {
            floaty: 'floaty 4s ease-in-out infinite',
            fadeUp: 'fadeUp .7s ease forwards',
            shimmer: 'shimmer 2s linear infinite',
          },
          boxShadow: {
            soft: '0 10px 30px -12px rgba(0,0,0,0.25)',
          },
          backgroundImage: {
            grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)' ,
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="bg-slate-950 text-slate-100 font-display selection:bg-indigo-500/30 selection:text-indigo-100">
  <!-- Decorative background -->
  <div class="fixed inset-0 -z-10 bg-grid bg-[length:22px_22px]"></div>
  <div class="pointer-events-none fixed inset-0 -z-10 opacity-30">
    <div class="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-indigo-600 blur-3xl mix-blend-screen"></div>
    <div class="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-fuchsia-600 blur-3xl mix-blend-screen"></div>
  </div>

  <!-- Header -->
  <header class="relative">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div class="group inline-flex items-center gap-3">
        <img src="Main.png" alt="SplitShare" class="h-10 w-10 rounded-xl ring-1 ring-white/10 group-hover:scale-110 transition"/>
        <span class="text-xl font-semibold tracking-tight">SplitShare</span>
      </div>
      <div class="hidden gap-2 sm:flex">
        <a href="#features" class="px-3 py-2 rounded-xl hover:bg-white/10 transition">Features</a>
        <a href="#tech" class="px-3 py-2 rounded-xl hover:bg-white/10 transition">Tech</a>
        <a href="#get-started" class="px-3 py-2 rounded-xl hover:bg-white/10 transition">Getting Started</a>
        <a href="#screens" class="px-3 py-2 rounded-xl hover:bg-white/10 transition">Screenshots</a>
        <a href="https://github.com/sourabh1211/SplitShare" target="_blank" class="px-3 py-2 rounded-xl bg-indigo-500/20 ring-1 ring-indigo-400/30 hover:ring-indigo-300 hover:bg-indigo-500/30 transition">GitHub</a>
      </div>
    </nav>
  </header>

  <!-- Hero -->
  <section class="mx-auto max-w-6xl px-6 pt-6 pb-16 sm:pt-10">
    <div class="grid items-center gap-10 md:grid-cols-2">
      <div class="space-y-6 animate-fadeUp">
        <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
          Split group expenses with <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 animate-shimmer bg-[length:300%_100%]">clarity</span> and <span class="text-indigo-300">ease</span>.
        </h1>
        <p class="text-slate-300/90 text-lg">A full‑stack expense splitting app built on the <span class="font-semibold text-indigo-300">MERN</span> stack. Create groups, add expenses, visualize spending, and settle up—fast.</p>
        <div class="flex flex-wrap gap-3">
          <a href="#get-started" class="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-semibold shadow-soft ring-1 ring-indigo-300/30 hover:translate-y-[-1px] hover:shadow-lg transition">Get Started
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3"/></svg>
          </a>
          <a href="https://github.com/sourabh1211/SplitShare" target="_blank" class="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold ring-1 ring-white/15 hover:bg-white/10 transition">View Repository</a>
        </div>
        <div class="flex flex-wrap items-center gap-2 text-sm text-slate-300/80">
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">JWT Auth</span>
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">MongoDB Atlas</span>
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Redux</span>
          <span class="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Chart.js</span>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-2xl"></div>
        <img src="dashboard.png" alt="Dashboard" class="relative z-10 w-full rounded-3xl ring-1 ring-white/10 shadow-soft hover:scale-[1.01] transition duration-300 will-change-transform animate-floaty"/>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section id="features" class="mx-auto max-w-6xl px-6 py-16">
    <h2 class="text-3xl font-bold mb-8">✨ Features</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Card -->
      <article class="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-300/30 group-hover:scale-110 transition">
          🔐
        </div>
        <h3 class="font-semibold text-xl mb-2">Authentication</h3>
        <p class="text-slate-300/90">Secure signup/login with JWT and bcrypt password hashing.</p>
      </article>
      <article class="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-300/30 group-hover:scale-110 transition">
          📊
        </div>
        <h3 class="font-semibold text-xl mb-2">Dashboard</h3>
        <p class="text-slate-300/90">Charts & graphs to visualize group and individual spending.</p>
      </article>
      <article class="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-300/30 group-hover:scale-110 transition">
          👥
        </div>
        <h3 class="font-semibold text-xl mb-2">Group Management</h3>
        <p class="text-slate-300/90">Create, rename, delete groups, and manage members easily.</p>
      </article>
      <article class="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-300/30 group-hover:scale-110 transition">
          💸
        </div>
        <h3 class="font-semibold text-xl mb-2">Expense Management</h3>
        <p class="text-slate-300/90">Add/update/delete expenses with detailed breakdowns.</p>
      </article>
      <article class="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-300/30 group-hover:scale-110 transition">
          🔁
        </div>
        <h3 class="font-semibold text-xl mb-2">Settlement</h3>
        <p class="text-slate-300/90">Auto-calculated balances to see who owes whom.</p>
      </article>
      <article class="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition">
        <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-300/30 group-hover:scale-110 transition">
          🧾
        </div>
        <h3 class="font-semibold text-xl mb-2">Transparency</h3>
        <p class="text-slate-300/90">Expense history & slips for full visibility.</p>
      </article>
    </div>
  </section>

  <!-- Screenshots -->
  <section id="screens" class="mx-auto max-w-6xl px-6 py-16">
    <h2 class="text-3xl font-bold mb-8">📸 Screenshots</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <figure class="rounded-2xl overflow-hidden ring-1 ring-white/10 hover:shadow-2xl hover:-translate-y-1 transition">
        <img src="login.png" alt="Login" class="w-full" />
        <figcaption class="px-4 py-3 text-sm text-slate-300/90">Login</figcaption>
      </figure>
      <figure class="rounded-2xl overflow-hidden ring-1 ring-white/10 hover:shadow-2xl hover:-translate-y-1 transition">
        <img src="signup.png" alt="Signup" class="w-full" />
        <figcaption class="px-4 py-3 text-sm text-slate-300/90">Signup</figcaption>
      </figure>
      <figure class="rounded-2xl overflow-hidden ring-1 ring-white/10 hover:shadow-2xl hover:-translate-y-1 transition">
        <img src="dashboard.png" alt="Dashboard" class="w-full" />
        <figcaption class="px-4 py-3 text-sm text-slate-300/90">Dashboard</figcaption>
      </figure>
      <figure class="rounded-2xl overflow-hidden ring-1 ring-white/10 hover:shadow-2xl hover:-translate-y-1 transition">
        <img src="Group View Page.jpg" alt="Group Page" class="w-full" />
        <figcaption class="px-4 py-3 text-sm text-slate-300/90">Group Page</figcaption>
      </figure>
      <figure class="rounded-2xl overflow-hidden ring-1 ring-white/10 hover:shadow-2xl hover:-translate-y-1 transition">
        <img src="profile.png" alt="Profile" class="w-full" />
        <figcaption class="px-4 py-3 text-sm text-slate-300/90">Profile</figcaption>
      </figure>
      <figure class="rounded-2xl overflow-hidden ring-1 ring-white/10 hover:shadow-2xl hover:-translate-y-1 transition">
        <img src="Main.png" alt="Main" class="w-full" />
        <figcaption class="px-4 py-3 text-sm text-slate-300/90">Main Image</figcaption>
      </figure>
    </div>
  </section>

  <!-- Tech Stack -->
  <section id="tech" class="mx-auto max-w-6xl px-6 py-16">
    <h2 class="text-3xl font-bold mb-8">⚙️ Technologies</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 transition">
        <h3 class="text-xl font-semibold mb-4">Frontend</h3>
        <ul class="space-y-2 text-slate-300/90">
          <li>React</li>
          <li>Redux (state management)</li>
          <li>Axios (HTTP)</li>
          <li>Material UI</li>
          <li>Chart.js & react-chartjs-2</li>
        </ul>
      </div>
      <div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 transition">
        <h3 class="text-xl font-semibold mb-4">Backend</h3>
        <ul class="space-y-2 text-slate-300/90">
          <li>Express</li>
          <li>Mongoose (MongoDB ODM)</li>
          <li>JWT (auth)</li>
          <li>bcryptjs (password hashing)</li>
          <li>MongoDB Atlas</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Getting Started -->
  <section id="get-started" class="mx-auto max-w-6xl px-6 py-16">
    <h2 class="text-3xl font-bold mb-8">🚀 Getting Started</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
        <h3 class="text-lg font-semibold mb-4">Prerequisites</h3>
        <ul class="list-disc pl-6 space-y-1 text-slate-300/90">
          <li>Node.js (LTS)</li>
          <li>MongoDB Atlas account</li>
          <li>Git</li>
        </ul>
      </div>
      <div class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
        <h3 class="text-lg font-semibold mb-4">Installation</h3>
        <pre class="rounded-xl bg-black/60 p-4 text-sm ring-1 ring-white/10 overflow-x-auto"><code>git clone https://github.com/sourabh1211/SplitShare.git
cd SplitShare

# install root tools (if any)
npm install

# install client & server deps
cd client && npm install && cd ..
cd server && npm install && cd ..

# environment variables
# server/.env
# MONGODB_URI=...
# JWT_SECRET=...
# CLIENT_URL=http://localhost:5173

# run dev (adjust scripts as needed)
cd server && npm run dev &
cd client && npm run dev</code></pre>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="mx-auto max-w-6xl px-6 pb-16">
    <div class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="Main.png" class="h-8 w-8 rounded-lg ring-1 ring-white/10" alt="logo"/>
        <p class="text-sm text-slate-300/90">© <span id="y"></span> SplitShare. All rights reserved.</p>
      </div>
      <div class="flex gap-2 text-sm">
        <a href="https://github.com/sourabh1211/SplitShare" target="_blank" class="px-3 py-2 rounded-xl hover:bg-white/10 transition">GitHub</a>
        <a href="#" class="px-3 py-2 rounded-xl hover:bg-white/10 transition">Issues</a>
        <a href="#" class="px-3 py-2 rounded-xl hover:bg-white/10 transition">License</a>
      </div>
    </div>
  </footer>

  <script>
    // set year
    document.getElementById('y').textContent = new Date().getFullYear();

    // simple on-scroll reveal
    const revealEls = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('animate-fadeUp');
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  </script>
</body>
</html>
