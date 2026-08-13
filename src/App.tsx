import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import AIPlayground from "./section/AIPlayground";
import MLExplorer from "./section/MLExplorer";
import Experience from "./section/Experience";
import Contact from "./section/Contact";
import AIChatAssistant from "./components/AIChatAssistant";
import ResumeModal from "./components/ResumeModal";
import CinematicSpaceLanding from "./pages/CinematicSpaceLanding";
import { portfolio } from "./constants/portfolio";
import { Terminal, Heart, Rocket, UserCheck } from "lucide-react";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"portfolio" | "cinematic-space">("portfolio");

  if (currentView === "cinematic-space") {
    return (
      <div className="relative w-full min-h-screen bg-black">
        {/* Toggle Switcher Floating Bar */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-white/20 backdrop-blur-xl shadow-2xl">
          <button
            onClick={() => setCurrentView("portfolio")}
            className="px-3 py-1.5 rounded-full text-xs font-mono bg-white text-black font-semibold hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Back to Vishal's Portfolio</span>
          </button>
        </div>

        <CinematicSpaceLanding />
      </div>
    );
  }

  return (
    <div className="w-full bg-black min-h-screen font-inter text-white selection:bg-cyan-500 selection:text-black relative">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content Sections */}
      <main className="w-full">
        {/* Banner launcher to switch to Space Landing Page */}
        <div className="w-full bg-gradient-to-r from-purple-950 via-slate-900 to-cyan-950 border-b border-cyan-500/30 py-2.5 px-4 text-center flex items-center justify-center gap-3 pt-24">
          <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
            <Rocket className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Cinematic Space-Travel Experience Enabled!</span>
          </span>
          <button
            onClick={() => setCurrentView("cinematic-space")}
            className="px-3 py-1 rounded-full bg-cyan-500 text-black text-[11px] font-mono font-bold hover:bg-cyan-300 transition-colors shadow-lg"
          >
            Launch Space Demo →
          </button>
        </div>

        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <AIPlayground />
        <MLExplorer />
        <Experience />
        <Contact />
      </main>

      {/* Global Interactive AI Assistant Widget */}
      <AIChatAssistant />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Footer */}
      <footer className="w-full bg-black border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold tracking-wider font-mono text-white">
              {portfolio.name} <span className="text-white/40">// AI Engineer</span>
            </span>
          </div>

          <p className="text-white/40 text-xs font-mono flex items-center gap-1">
            Built with React 19, TypeScript & Tailwind CSS <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
          </p>

          <p className="text-white/40 text-xs font-mono">
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
