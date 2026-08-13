import { useState, useEffect } from "react";
import { Volume2, Play, Pause, Sparkles } from "lucide-react";
import { portfolio } from "../constants/portfolio";

export default function AudioGreeting() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setIsSupported(false);
    }
  }, []);

  const pitchText = `Hi! I'm ${portfolio.name}, a Data Science and AI Engineer. I specialize in building production-grade Machine Learning models, Large Language Model pipelines, RAG systems, and full-stack AI applications. Explore my portfolio to see live projects like my AI Career Advisor and automated Data Analyst platform!`;

  const toggleAudio = () => {
    if (!isSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); // Stop any existing playback
      const utterance = new SpeechSynthesisUtterance(pitchText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Try to select a natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) => (v.lang.startsWith("en") && v.name.includes("Natural")) || v.name.includes("Google") || v.name.includes("Samantha")
      ) || voices.find((v) => v.lang.startsWith("en"));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  if (!isSupported) return null;

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl shadow-cyan-950/40 animate-fade-in my-3 group">
      <button
        onClick={toggleAudio}
        className="w-8 h-8 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 transition-all hover:scale-110"
        aria-label={isPlaying ? "Pause Intro Audio" : "Play Intro Audio"}
      >
        {isPlaying ? (
          <Pause className="w-3.5 h-3.5 fill-cyan-300 text-cyan-300" />
        ) : (
          <Play className="w-3.5 h-3.5 fill-cyan-300 text-cyan-300 ml-0.5" />
        )}
      </button>

      <div className="flex flex-col text-left">
        <span className="text-[11px] font-mono font-semibold text-white flex items-center gap-1.5">
          {isPlaying ? "Playing AI Voice Greeting..." : "Listen to 15s AI Voice Pitch"}
          <Sparkles className="w-3 h-3 text-cyan-400" />
        </span>
        <span className="text-[9px] font-mono text-cyan-400/80">
          {isPlaying ? "Click to pause audio" : "Synthesized AI Elevator Pitch"}
        </span>
      </div>

      {/* Animated Sound Equalizer Waves */}
      {isPlaying ? (
        <div className="flex items-end gap-0.5 h-4 px-1">
          <div className="w-0.5 bg-cyan-400 rounded-full animate-[bounce_0.6s_infinite_0.1s] h-full" />
          <div className="w-0.5 bg-cyan-400 rounded-full animate-[bounce_0.6s_infinite_0.3s] h-2/3" />
          <div className="w-0.5 bg-cyan-400 rounded-full animate-[bounce_0.6s_infinite_0.2s] h-5/6" />
          <div className="w-0.5 bg-cyan-400 rounded-full animate-[bounce_0.6s_infinite_0.4s] h-1/2" />
        </div>
      ) : (
        <Volume2 className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors ml-1" />
      )}
    </div>
  );
}
