import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { Sliders, Zap, ShieldCheck } from "lucide-react";

interface ModelData {
  id: string;
  name: string;
  type: string;
  dataset: string;
  baseTP: number;
  baseFP: number;
  baseTN: number;
  baseFN: number;
  auc: number;
  latencyCpu: string;
  latencyGpu: string;
  notes: string;
}

export default function MLExplorer() {
  const [selectedModelId, setSelectedModelId] = useState<string>("career-advisor");
  const [threshold, setThreshold] = useState<number>(0.5);

  const models: ModelData[] = [
    {
      id: "career-advisor",
      name: "AI Career Advisor (Scikit-Learn Classifier)",
      type: "Multi-Class Recommendation Classifier",
      dataset: "15,000 Candidate Skill Profile Records",
      baseTP: 920,
      baseFP: 80,
      baseTN: 880,
      baseFN: 120,
      auc: 0.94,
      latencyCpu: "12ms",
      latencyGpu: "2.5ms",
      notes: "Tuned using Random Forest & XGBoost with SMOTE oversampling for balanced role recommendations."
    },
    {
      id: "bert-sentiment",
      name: "Fine-Tuned DistilBERT (NLP Sentiment)",
      type: "Deep Learning Transformer Model",
      dataset: "50,000 Social & Product Feedback Reviews",
      baseTP: 940,
      baseFP: 60,
      baseTN: 910,
      baseFN: 90,
      auc: 0.96,
      latencyCpu: "24ms",
      latencyGpu: "4.1ms",
      notes: "Fine-tuned DistilBERT model quantized with ONNX Runtime for high-concurrency stream scoring."
    },
    {
      id: "rag-reranker",
      name: "Enterprise RAG Dense Vector Reranker",
      type: "Cross-Encoder Vector Search Model",
      dataset: "10,000 Heterogeneous Technical Documents",
      baseTP: 960,
      baseFP: 40,
      baseTN: 930,
      baseFN: 70,
      auc: 0.97,
      latencyCpu: "35ms",
      latencyGpu: "6.8ms",
      notes: "Hybrid dense embeddings + Cohere cross-encoder reranking layer for vector precision."
    },
    {
      id: "churn-xgboost",
      name: "Customer Churn Predictive Pipeline",
      type: "Gradient Boosted Decision Trees",
      dataset: "25,000 Customer Telemetry Histories",
      baseTP: 890,
      baseFP: 110,
      baseTN: 850,
      baseFN: 150,
      auc: 0.92,
      latencyCpu: "8ms",
      latencyGpu: "1.2ms",
      notes: "Interpretable XGBoost model with integrated SHAP feature impact scoring."
    }
  ];

  const currentModel = models.find((m) => m.id === selectedModelId) || models[0];

  // Dynamically recalculate confusion matrix metrics based on decision threshold slider
  const factor = (threshold - 0.5) * 0.8;
  const tp = Math.max(10, Math.round(currentModel.baseTP * (1 - factor)));
  const fp = Math.max(5, Math.round(currentModel.baseFP * (1 - factor * 1.5)));
  const fn = Math.max(10, Math.round(currentModel.baseFN * (1 + factor * 1.2)));
  const tn = Math.max(10, Math.round(currentModel.baseTN * (1 + factor * 0.9)));

  const total = tp + fp + fn + tn;
  const precision = (tp / (tp + fp) || 0) * 100;
  const recall = (tp / (tp + fn) || 0) * 100;
  const f1 = (2 * (precision * recall)) / (precision + recall) || 0;
  const accuracy = ((tp + tn) / total) * 100;

  return (
    <section id="benchmarks" className="relative py-24 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Model Intelligence"
          title="Interactive ML Benchmark Explorer"
        />

        <p className="text-center text-white/60 text-sm max-w-2xl mx-auto -mt-10 mb-12 font-sans">
          Adjust the decision threshold slider below to dynamically observe real-time recalculations of **Precision**, **Recall**, **F1-Score**, and **Confusion Matrix metrics** across Vishal's machine learning models.
        </p>

        {/* Explorer Container */}
        <div className="rounded-2xl bg-zinc-950 border border-cyan-500/30 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-8 font-sans">
          {/* Model Selector Tabs */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Select Machine Learning Model:</span>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {models.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModelId(m.id)}
                  className={`p-4 rounded-xl text-left transition-all flex flex-col justify-between ${
                    selectedModelId === m.id
                      ? "bg-cyan-950/60 border-2 border-cyan-400 text-white shadow-lg shadow-cyan-950/50"
                      : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-cyan-300 block mb-1">{m.type}</span>
                    <h4 className="text-xs font-bold leading-snug">{m.name}</h4>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 mt-2">ROC-AUC: {m.auc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Threshold Control Bar */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-white font-mono">Decision Threshold Tuning</span>
              </div>
              <div className="px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                Threshold = {threshold.toFixed(2)}
              </div>
            </div>

            <input
              type="range"
              min="0.05"
              max="0.95"
              step="0.05"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-2 bg-black/60 rounded-lg"
            />

            <div className="flex justify-between text-[10px] font-mono text-white/40">
              <span>0.05 (High Recall / Sensitive)</span>
              <span>0.50 (Balanced Baseline)</span>
              <span>0.95 (High Precision / Conservative)</span>
            </div>
          </div>

          {/* Dynamic Metrics Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">Precision</span>
              <span className="text-2xl font-bold font-mono text-white">{precision.toFixed(1)}%</span>
              <span className="text-[9px] font-mono text-white/40 block mt-1">TP / (TP + FP)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">Recall</span>
              <span className="text-2xl font-bold font-mono text-white">{recall.toFixed(1)}%</span>
              <span className="text-[9px] font-mono text-white/40 block mt-1">TP / (TP + FN)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">F1-Score</span>
              <span className="text-2xl font-bold font-mono text-white">{f1.toFixed(1)}%</span>
              <span className="text-[9px] font-mono text-white/40 block mt-1">Harmonic Mean</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">Accuracy</span>
              <span className="text-2xl font-bold font-mono text-white">{accuracy.toFixed(1)}%</span>
              <span className="text-[9px] font-mono text-white/40 block mt-1">(TP + TN) / Total</span>
            </div>
          </div>

          {/* Main Visual Grid: Confusion Matrix & ROC Curve */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Confusion Matrix (7 cols) */}
            <div className="lg:col-span-6 p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" /> Interactive Confusion Matrix
              </h4>

              <div className="grid grid-cols-2 gap-3 text-center font-mono">
                {/* True Positive */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <span className="text-[10px] text-emerald-400 uppercase block font-semibold">True Positive (TP)</span>
                  <span className="text-3xl font-bold text-white mt-1 block">{tp}</span>
                  <span className="text-[9px] text-emerald-300/80 block mt-1">Correct Positive Match</span>
                </div>

                {/* False Positive */}
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30">
                  <span className="text-[10px] text-rose-400 uppercase block font-semibold">False Positive (FP)</span>
                  <span className="text-3xl font-bold text-white mt-1 block">{fp}</span>
                  <span className="text-[9px] text-rose-300/80 block mt-1">False Alarm</span>
                </div>

                {/* False Negative */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <span className="text-[10px] text-amber-400 uppercase block font-semibold">False Negative (FN)</span>
                  <span className="text-3xl font-bold text-white mt-1 block">{fn}</span>
                  <span className="text-[9px] text-amber-300/80 block mt-1">Missed Detection</span>
                </div>

                {/* True Negative */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <span className="text-[10px] text-cyan-400 uppercase block font-semibold">True Negative (TN)</span>
                  <span className="text-3xl font-bold text-white mt-1 block">{tn}</span>
                  <span className="text-[9px] text-cyan-300/80 block mt-1">Correct Negative Match</span>
                </div>
              </div>
            </div>

            {/* Inference Speed & System Architecture (6 cols) */}
            <div className="lg:col-span-6 p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-amber-400" /> Latency & Hardware Benchmarks
                </h4>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-black/60 border border-white/10 text-center">
                    <span className="text-[10px] font-mono text-white/50 block">CPU Latency</span>
                    <span className="text-lg font-bold font-mono text-white">{currentModel.latencyCpu}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/60 border border-cyan-500/30 text-center">
                    <span className="text-[10px] font-mono text-cyan-400 block">GPU TensorRT</span>
                    <span className="text-lg font-bold font-mono text-cyan-300">{currentModel.latencyGpu}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block">Dataset Profile:</span>
                  <p className="text-xs text-white/80 font-mono">{currentModel.dataset}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono text-white/40 block mb-1">Architecture Notes:</span>
                <p className="text-xs text-white/70 italic leading-relaxed">{currentModel.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
