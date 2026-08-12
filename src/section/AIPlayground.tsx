import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { Sparkles, Database, Cpu, ArrowRight, RefreshCw, CheckCircle2, Search } from "lucide-react";

export default function AIPlayground() {
  const [activeTab, setActiveTab] = useState<"rag" | "sentiment" | "prompt">("rag");
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [output, setOutput] = useState<any>(null);

  const sampleRagQueries = [
    "What is Vishal's expertise in RAG & Vector Search?",
    "Which Machine Learning frameworks does Vishal specialize in?",
    "How does the Enterprise Document RAG pipeline work?"
  ];

  const handleSimulateRAG = (sampleText?: string) => {
    const textToSearch = sampleText || query || sampleRagQueries[0];
    setQuery(textToSearch);
    setIsProcessing(true);
    setOutput(null);

    setTimeout(() => {
      setIsProcessing(false);
      setOutput({
        type: "rag",
        query: textToSearch,
        retrievedChunks: [
          {
            score: "0.96 (Cosine Similarity)",
            source: "portfolio_about.ts",
            content: "Vishal specializes in Large Language Models (LLMs), RAG, FAISS Vector Search, and FastAPI microservices."
          },
          {
            score: "0.91 (BM25 + Rerank)",
            source: "projects_enterprise_rag.py",
            content: "Enterprise RAG system uses hybrid dense HuggingFace embeddings combined with Cohere cross-encoder reranking."
          }
        ],
        llmResponse: `Based on retrieved records from Vishal's system, Vishal Kumar is a Data Science & AI Engineer with expert knowledge in RAG architectures, vector databases (FAISS, ChromaDB), FastAPI backend design, and production LLM orchestration.`
      });
    }, 800);
  };

  const handleSimulateSentiment = () => {
    if (!query) return;
    setIsProcessing(true);
    setOutput(null);

    setTimeout(() => {
      setIsProcessing(false);
      const isPositive = !query.toLowerCase().includes("bad") && !query.toLowerCase().includes("slow");
      setOutput({
        type: "sentiment",
        text: query,
        sentiment: isPositive ? "POSITIVE" : "NEGATIVE",
        confidence: isPositive ? "98.4%" : "91.2%",
        tokens: query.split(" ").map(w => ({ word: w, score: (Math.random() * 0.5 + 0.5).toFixed(2) }))
      });
    }, 600);
  };

  const handleSimulatePrompt = () => {
    if (!query) return;
    setIsProcessing(true);
    setOutput(null);

    setTimeout(() => {
      setIsProcessing(false);
      setOutput({
        type: "prompt",
        original: query,
        enhanced: `You are an expert AI Engineer. Please act according to the following guidelines:
1. Directives: ${query}
2. Output Format: Provide structured JSON containing concise rationale, step-by-step code snippets, and metric benchmarks.
3. Edge Cases: Include error handling and zero-shot fallback routines.`
      });
    }, 700);
  };

  return (
    <section id="playground" className="relative py-24 bg-black text-white overflow-hidden border-t border-b border-white/10">
      {/* Subtle Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Live Demo Sandbox"
          title="Interactive AI Simulator"
        />

        <p className="text-center text-white/60 text-sm max-w-xl mx-auto -mt-10 mb-12">
          Test live interactive simulations of RAG vector search, BERT sentiment evaluation, and LLM prompt engineering.
        </p>

        {/* Playground Container */}
        <div className="rounded-2xl bg-zinc-950 border border-white/15 overflow-hidden shadow-2xl">
          {/* Top Bar Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-white/40">vortx-ai-kernel // v2.4</span>
            </div>

            {/* Mode Selectors */}
            <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => { setActiveTab("rag"); setOutput(null); setQuery(""); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === "rag" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-white/60 hover:text-white"
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>RAG Vector Search</span>
              </button>
              <button
                onClick={() => { setActiveTab("sentiment"); setOutput(null); setQuery("This AI architecture is remarkably fast and intuitive!"); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === "sentiment" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-white/60 hover:text-white"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>BERT Sentiment</span>
              </button>
              <button
                onClick={() => { setActiveTab("prompt"); setOutput(null); setQuery("Write a python function to query vector DB"); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === "prompt" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-white/60 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prompt Optimizer</span>
              </button>
            </div>
          </div>

          {/* Interactive Work Area */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* RAG Mode Preset Buttons */}
            {activeTab === "rag" && (
              <div className="space-y-2">
                <span className="text-xs font-mono text-white/50 flex items-center gap-1">
                  <Search className="w-3 h-3" /> Quick Query Presets:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sampleRagQueries.map((preset, i) => (
                    <button
                      key={i}
                      onClick={() => handleSimulateRAG(preset)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 text-xs text-white/80 hover:text-cyan-300 transition-all text-left"
                    >
                      "{preset}"
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  activeTab === "rag"
                    ? "Enter custom semantic question to query RAG vector index..."
                    : activeTab === "sentiment"
                    ? "Type a review or message to analyze sentiment..."
                    : "Type a basic prompt to enhance..."
                }
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-white/40 font-mono"
              />
              <button
                onClick={
                  activeTab === "rag"
                    ? () => handleSimulateRAG()
                    : activeTab === "sentiment"
                    ? handleSimulateSentiment
                    : handleSimulatePrompt
                }
                disabled={isProcessing}
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs btn-cut hover:bg-white/90 transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <span>Run Simulation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Output Display Area */}
            {output && (
              <div className="p-6 rounded-xl bg-black/60 border border-white/10 space-y-4 animate-fade-in font-mono">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Pipeline Execution Completed
                  </span>
                  <span className="text-[10px] text-white/40">Status: 200 OK</span>
                </div>

                {output.type === "rag" && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-white/40 block mb-2 uppercase tracking-wider">// Retrieved Dense Vector Chunks (FAISS Cosine Similarity):</span>
                      <div className="space-y-2">
                        {output.retrievedChunks.map((chunk: any, idx: number) => (
                          <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5">
                            <div className="flex items-center justify-between text-cyan-400 mb-1">
                              <span>Source: {chunk.source}</span>
                              <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                                Score: {chunk.score}
                              </span>
                            </div>
                            <p className="text-white/80 font-sans text-xs">{chunk.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <span className="text-white/40 block mb-2 uppercase tracking-wider">// Synthesized LLM Response (Gemini 1.5 Pro):</span>
                      <p className="text-white/90 font-sans text-sm leading-relaxed p-4 rounded-lg bg-cyan-950/30 border border-cyan-500/30">
                        {output.llmResponse}
                      </p>
                    </div>
                  </div>
                )}

                {output.type === "sentiment" && (
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center gap-4">
                      <span className="text-white/50">Classification Result:</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        output.sentiment === "POSITIVE" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      }`}>
                        {output.sentiment}
                      </span>
                      <span className="text-white/50">Confidence: {output.confidence}</span>
                    </div>
                  </div>
                )}

                {output.type === "prompt" && (
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-white/40 block mb-1 uppercase tracking-wider">// Enhanced Structured Prompt:</span>
                      <pre className="p-4 rounded-lg bg-white/5 border border-white/10 text-cyan-300 font-mono text-xs whitespace-pre-wrap leading-relaxed">
                        {output.enhanced}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
