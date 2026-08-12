import { useState, useRef, useEffect, type ReactNode } from "react";
import { Bot, X, Send, Sparkles, User, RefreshCw } from "lucide-react";
import { portfolio } from "../constants/portfolio";

interface Message {
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: `Hi! I'm **Vishal's AI Assistant**. Ask me anything about his Machine Learning projects, skills, education, or how to collaborate!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "What are Vishal's main AI skills?",
    "Tell me about the AI Career Advisor project",
    "What is his education background?",
    "How can I contact Vishal for a role?"
  ];

  // Helper function to render rich formatted text with bold highlights and clickable markdown links
  const renderFormattedMessage = (text: string): ReactNode => {
    const lines = text.split("\n");

    return (
      <div className="space-y-1.5 leading-relaxed font-sans">
        {lines.map((line, lineIdx) => {
          if (!line.trim()) return <div key={lineIdx} className="h-1" />;

          // Process markdown links [text](url) and bold **text**
          const parts: ReactNode[] = [];
          let currentStr = line;
          let keyCounter = 0;

          // Regular expression for [label](url) and **bold**
          const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
          let match;
          let lastIdx = 0;

          while ((match = regex.exec(currentStr)) !== null) {
            if (match.index > lastIdx) {
              parts.push(currentStr.substring(lastIdx, match.index));
            }

            const token = match[0];
            if (token.startsWith("[") && token.includes("](")) {
              const label = token.substring(1, token.indexOf("]"));
              const url = token.substring(token.indexOf("](") + 2, token.length - 1);
              parts.push(
                <a
                  key={`link-${lineIdx}-${keyCounter++}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium underline font-mono hover:text-cyan-300 transition-colors"
                >
                  {label}
                </a>
              );
            } else if (token.startsWith("**") && token.endsWith("**")) {
              const content = token.substring(2, token.length - 2);
              parts.push(
                <strong
                  key={`bold-${lineIdx}-${keyCounter++}`}
                  className="font-semibold text-cyan-300"
                >
                  {content}
                </strong>
              );
            }

            lastIdx = regex.lastIndex;
          }

          if (lastIdx < currentStr.length) {
            parts.push(currentStr.substring(lastIdx));
          }

          return (
            <p key={lineIdx} className="text-xs text-white/90">
              {parts}
            </p>
          );
        })}
      </div>
    );
  };

  // System context facts about Vishal
  const systemKnowledge = `
    Name: ${portfolio.name}
    Title: ${portfolio.title}
    Bio: ${portfolio.about.bio.join(" ")}
    Education: ${portfolio.about.education}
    Location: ${portfolio.about.location}
    Email: ${portfolio.socials.email}
    GitHub: ${portfolio.socials.github}
    Key Projects:
    1. AI Career Advisor - Streamlit Live Demo: https://dqpxbjdk4lkej2v9uayhcp.streamlit.app/
    2. AI Data Analyst - Streamlit Live Demo: https://3cibvktrrltbwhrdg39ieh.streamlit.app/
    3. Enterprise Document RAG Pipeline
    4. Real-Time NLP Sentiment Analyzer
    Skills: Recommendation Systems, RAG, Python, PyTorch, Scikit-Learn, FastAPI, React, TypeScript, Vector Databases (FAISS, Chroma).
  `;

  const generateAIResponse = async (userQuery: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `You are the official AI Portfolio Assistant for ${portfolio.name}. Respond concisely, professionally, and enthusiastically using these verified facts:\n\n${systemKnowledge}\n\nUser Question: ${userQuery}`
                    }
                  ]
                }
              ]
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) return reply;
        }
      } catch (e) {
        console.error("Gemini API error, falling back to local KB engine:", e);
      }
    }

    // Built-in Knowledge Base Engine Fallback
    const q = userQuery.toLowerCase();

    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("python")) {
      return `Vishal specializes in **Machine Learning & Generative AI**.\n\nCore technical skills include **Python**, **PyTorch**, **Scikit-Learn**, **LangChain**, **RAG**, **FAISS Vector Search**, **FastAPI**, and **React 19 with TypeScript**.`;
    }

    if (q.includes("project") || q.includes("career advisor") || q.includes("data analyst") || q.includes("rag")) {
      return `Vishal has built flagship live projects:\n\n🎯 **AI Career Advisor**: Intelligent ML Recommendation System ([Live Streamlit App](https://dqpxbjdk4lkej2v9uayhcp.streamlit.app/))\n\n📊 **AI Data Analyst**: Automated EDA & AutoML Platform ([Live Streamlit App](https://3cibvktrrltbwhrdg39ieh.streamlit.app/))\n\n⚡ **Enterprise RAG Pipeline**: Multi-modal document search with FAISS & reranking.`;
    }

    if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("college")) {
      return `Vishal is pursuing **B.Sc. (Hons.) Data Science & AI**.\n\nHe specializes in Machine Learning, Statistical Inference, Deep Learning, Natural Language Processing, and Software Engineering.`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("job")) {
      return `You can reach Vishal directly via email at **${portfolio.socials.email}** or connect on GitHub at [github.com/vishalok007](https://github.com/vishalok007).\n\nHe is available for AI Engineering roles and collaborations!`;
    }

    return `Vishal is a Data Science & AI student focused on Machine Learning, LLMs, and RAG architectures.\n\nHe has built live projects like the **AI Career Advisor** and **AI Data Analyst**.\n\nFeel free to email him directly at **${portfolio.socials.email}**!`;
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const aiReplyText = await generateAIResponse(query);
      const aiMsg: Message = {
        sender: "ai",
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-2.5 group border border-white/20"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black animate-ping" />
          </div>
          <span className="text-xs font-semibold tracking-wide pr-1">Ask Vishal's AI</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
        </button>
      )}

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[94vw] sm:w-[430px] h-[560px] max-h-[85vh] bg-slate-950/95 border border-cyan-500/30 backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in font-sans">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white flex items-center gap-1.5 font-mono">
                  Vishal.AI Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h4>
                <p className="text-[10px] text-cyan-400/80 font-mono">Powered by Gemini 1.5 & Knowledge Engine</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none shadow-md"
                      : "bg-slate-900/90 border border-white/10 text-white/90 rounded-bl-none font-sans"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <p className="text-xs text-white leading-relaxed font-sans">{msg.text}</p>
                  ) : (
                    renderFormattedMessage(msg.text)
                  )}
                  <span className="block text-[9px] text-white/40 mt-1.5 text-right font-mono">{msg.timestamp}</span>
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono p-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Thinking & querying knowledge base...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 border-t border-white/10 bg-black/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/40 text-[10px] text-white/70 hover:text-cyan-300 transition-all shrink-0 whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Vishal..."
              className="flex-1 px-3 py-2 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-white/40 font-sans"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition-colors disabled:opacity-40"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
