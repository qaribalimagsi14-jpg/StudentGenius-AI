import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import CTA from "./components/cta/CTA";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
    </>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;