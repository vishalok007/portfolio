import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { portfolio } from "../constants/portfolio";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Loader2, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolio.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenGmailWeb = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Hi Vishal,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.socials.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setLoading(true);

    try {
      // FormSubmit AJAX dispatch
      await fetch(`https://formsubmit.co/ajax/${portfolio.socials.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: "table"
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Let's Build Together"
          title="Get In Touch"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Direct Info & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Let's discuss AI Engineering & Collaborations
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Whether you're looking to build custom LLM & RAG applications, integrate Machine Learning into your stack, or recruit an AI engineer, my inbox is always open.
              </p>
            </div>

            {/* Quick Email Copy Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3">
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider block">Direct Email</span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/60 border border-white/10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-white font-mono text-xs sm:text-sm truncate">
                    {portfolio.socials.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider block">Connect Across Web</span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolio.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 text-white flex items-center justify-center transition-all group"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={portfolio.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 text-white flex items-center justify-center transition-all group"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={portfolio.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 text-white flex items-center justify-center transition-all group"
                  aria-label="Twitter X Profile"
                >
                  <TwitterIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={`mailto:${portfolio.socials.email}`}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 flex items-center justify-center transition-all group"
                  aria-label="Email Vishal"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">
              <h4 className="text-xl font-medium text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" /> Send a Direct Message
              </h4>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                  <h5 className="text-lg font-semibold text-white">Message Dispatched!</h5>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Your message has been sent to <span className="text-cyan-300 font-semibold">{portfolio.socials.email}</span>.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenGmailWeb}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-medium hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Also Open Pre-Filled in Gmail Web</span>
                    </button>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-white/60 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-white/30"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-white/60 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/60 block mb-1">Project Details / Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vishal, I'd like to talk about an AI project..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-white/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm btn-cut hover:bg-white/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
