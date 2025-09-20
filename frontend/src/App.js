import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { Toaster } from "./components/ui/toaster";

const PortfolioApp = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Portfolio />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Kalash Dang. Built with React and designed with passion for AI innovation.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "Building the future, one algorithm at a time."
          </p>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;