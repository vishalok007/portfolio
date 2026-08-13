import { useState, useEffect } from "react";
import { Volume2, Play, Pause, Sparkles } from "lucide-react";
import { portfolio } from "../constants/portfolio";

export default function AudioGreeting() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setIsSupported(false);
      return;
    }

    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const pitchText = `Welcome! I'm speaking on behalf of ${portfolio.name}, an AI and Data Science Engineer. Vishal specializes in building production-grade Machine Learning recommendation models, Large Language Model RAG pipelines, and automated analytics platforms. Feel free to explore his live Streamlit apps and interactive ML benchmarks below!`;

  const getNaturalFemaleVoice = (): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;

    // Filter English voices
    const enVoices = voices.filter((v) => v.lang.startsWith("en"));

    // Known high-quality natural female voices across browsers & OS (Chrome, Edge, Mac, Windows)
    const femaleKeywords = [
      "Google US English",
      "Microsoft Aria",
      "Microsoft Jenny",
      "Microsoft Zira",
      "Samantha",
      "Victoria",
      "Karen",
      "Moira",
      "Fiona",
      "Natural (Female)",
      "Neural"
    ];

    for (const keyword of femaleKeywords) {
      const found = enVoices.find((v) => v.name.includes(keyword));
      if (found) return found;
    }

    // Fallback: Find any English voice containing 'Female' or female names
    const fallbackFemale = enVoices.find((v) =>
      /female|woman|samantha|zira|aria|jenny|victoria/i.test(v.name)
    );

    return fallbackFemale || enVoices[0] || voices[0] || null;
  };

  const toggleAudio = () => {
    if (!isSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(pitchText);

      // Natural female speech settings
      utterance.rate = 0.92; // Slightly slower pacing for natural clarity
      utterance.pitch = 1.08; // Warm, natural female pitch curve

      const selectedVoice = getNaturalFemaleVoice();
      if (selectedVoice) {
        utterance.voice = selectedVoice;
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
          {isPlaying ? "Playing Female AI Voice..." : "Listen to Natural AI Voice Pitch 🎙️"}
          <Sparkles className="w-3 h-3 text-cyan-400" />
        </span>
        <span className="text-[9px] font-mono text-cyan-400/80">
          {isPlaying ? "Click to pause audio" : "Natural Female AI Voice Intro"}
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
