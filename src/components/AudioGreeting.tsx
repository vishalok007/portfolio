import { useState, useEffect, useRef } from "react";
import { Volume2, Play, Pause, Sparkles } from "lucide-react";
import { portfolio } from "../constants/portfolio";

export default function AudioGreeting() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const pitchText = `Welcome! I'm speaking on behalf of ${portfolio.name}, an AI and Data Science Engineer. Vishal specializes in building production-grade Machine Learning models, Large Language Model RAG pipelines, and automated analytics platforms. Explore his portfolio to see live projects like his AI Career Advisor and automated Data Analyst platform!`;

  // Select ultra-realistic Neural / Studio Human-sounding Female Voices
  const getNaturalFemaleVoice = (): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;

    const enVoices = voices.filter((v) => v.lang.startsWith("en"));

    // Priority list for ultra-realistic Azure/Google Neural & Natural human voices
    const neuralFemaleNames = [
      "Microsoft Aria Online (Natural)",
      "Microsoft Jenny Online (Natural)",
      "Google US English",
      "Microsoft Ana Online (Natural)",
      "Microsoft Emma Online (Natural)",
      "Google UK English Female",
      "Samantha",
      "Victoria",
      "Karen"
    ];

    for (const name of neuralFemaleNames) {
      const found = enVoices.find((v) => v.name.includes(name));
      if (found) return found;
    }

    // Secondary search for any voice containing 'Natural' or 'Neural'
    const anyNeural = enVoices.find(
      (v) => (v.name.includes("Natural") || v.name.includes("Neural") || v.name.includes("Google")) && !v.name.includes("Male")
    );
    if (anyNeural) return anyNeural;

    // Fallback: Female names
    const fallbackFemale = enVoices.find((v) =>
      /aria|jenny|samantha|zira|victoria|female/i.test(v.name)
    );

    return fallbackFemale || enVoices[0] || voices[0] || null;
  };

  const toggleAudio = () => {
    if (!isSupported) return;

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();

      // Check if custom studio MP3 file exists in public/audio/intro.mp3
      if (audioRef.current && audioRef.current.src) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          playSpeechSynth();
        });
      } else {
        playSpeechSynth();
      }
    }
  };

  const playSpeechSynth = () => {
    const utterance = new SpeechSynthesisUtterance(pitchText);

    // Natural Human Speech settings
    utterance.rate = 0.95; // Crisp, human conversational speed
    utterance.pitch = 1.0; // Natural 1.0 human pitch

    const voice = getNaturalFemaleVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  if (!isSupported) return null;

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl shadow-cyan-950/40 animate-fade-in my-3 group">
      {/* Hidden audio element for custom studio MP3 */}
      <audio
        ref={audioRef}
        src="/audio/intro.mp3"
        onEnded={() => setIsPlaying(false)}
        onError={() => { /* fallback gracefully to neural TTS */ }}
      />

      <button
        onClick={toggleAudio}
        className="w-8 h-8 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 transition-all hover:scale-110"
        aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
      >
        {isPlaying ? (
          <Pause className="w-3.5 h-3.5 fill-cyan-300 text-cyan-300" />
        ) : (
          <Play className="w-3.5 h-3.5 fill-cyan-300 text-cyan-300 ml-0.5" />
        )}
      </button>

      <div className="flex flex-col text-left">
        <span className="text-[11px] font-mono font-semibold text-white flex items-center gap-1.5">
          {isPlaying ? "Playing Neural Voice Pitch..." : "Listen to Studio Voice Intro 🎙️"}
          <Sparkles className="w-3 h-3 text-cyan-400" />
        </span>
        <span className="text-[9px] font-mono text-cyan-400/80">
          {isPlaying ? "Click to pause audio" : "Natural Studio Narration Pitch"}
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
