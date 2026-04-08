# Personal Portfolio Website

A full-stack portfolio for Nyuti Bhesania, built with React (Vite), Tailwind CSS, Framer Motion and an Express.js backend.

## Tech Stack
- Frontend: React + Vite, Tailwind CSS, Framer Motion, Axios, React Type Animation, Lucide React
- Backend: Node.js, Express, Nodemailer, CORS, dotenv

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository** (if applicable) or navigate to the directory:
   ```bash
   cd portfolio
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```
   - Create a `.env` file in the `server` directory (one is provided). Uncomment and add your `EMAIL_USER` and `EMAIL_PASS` (e.g. Gmail App Password) if you wish to actually receive emails from the contact form.
   - Start the backend:
   ```bash
   # Starts server on http://localhost:5000
   node server.js 
   ```
   *(Or you can use `nodemon server.js` for development)*

3. **Setup Frontend**
   Open a new terminal window:
   ```bash
   cd client
   npm install
   ```
   - Start the React frontend development server:
   ```bash
   npm run dev
   ```

4. **View Application**
   Open `http://localhost:5173` in your browser.

## Features
- ✨ Dynamic Typewriter animations
- 📱 Fully responsive layout
- 🎨 Beautiful Tailwind styling with glassmorphism effects
- 📜 Smooth scrolling sections
- 📧 Working Contact Form tied to backend API
- 🏆 Timeline based Experience/Education views

## Project Structure
- `/client` - Contains all frontend Vite + React code, components, and styling.
- `/server` - Contains simple Express application for handling the Contact Form API.
