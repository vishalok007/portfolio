import { motion } from "framer-motion";
import FadingVideo from "../components/FadingVideo";
import BlurText from "../components/BlurText";

export default function CinematicSpaceLanding() {
  const fadeInUp = {
    initial: { filter: "blur(10px)", opacity: 0, y: 20 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { ease: "easeOut" as const }
  };

  return (
    <div className="w-full bg-black text-white font-body selection:bg-white selection:text-black min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen w-full bg-black flex flex-col justify-between overflow-hidden">
        {/* Hero Background Video (120% scale, top-aligned) */}
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: "120%", height: "120%" }}
        />

        {/* Navbar */}
        <header className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-auto">
          {/* Left: 48x48 liquid-glass circle logo */}
          <a
            href="#home"
            className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center font-heading italic text-2xl text-white shadow-lg"
          >
            a
          </a>

          {/* Center: Desktop Navigation Pill */}
          <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5 backdrop-blur-md">
            {["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#claim"
              className="bg-white text-black whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1 font-body ml-1 hover:bg-white/90 transition-colors"
            >
              <span>Claim a Spot</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* Right: 48x48 Invisible Spacer */}
          <div className="w-12 h-12" aria-hidden="true" />
        </header>

        {/* Hero Main Content */}
        <div className="relative z-10 pt-32 pb-12 px-4 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Badge (delay 0.4s) */}
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="liquid-glass rounded-full p-1 pr-3 flex items-center gap-2.5 border border-white/10 mb-6 shadow-xl"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full font-body">
              New
            </span>
            <span className="text-sm text-white/90 font-body">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>

          {/* Headline — BlurText */}
          <div className="my-2">
            <BlurText
              text="Venture Past Our Sky Across the Universe"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
            />
          </div>

          {/* Subheading (delay 0.8s) */}
          <motion.p
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.8 }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>

          {/* CTAs (delay 1.1s) */}
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 1.1 }}
            className="flex items-center gap-6 mt-6"
          >
            <a
              href="#start"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 font-body hover:opacity-90 transition-opacity"
            >
              <span>Start Your Voyage</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            <a
              href="#liftoff"
              className="text-sm font-medium text-white flex items-center gap-2 font-body hover:underline"
            >
              <span>View Liftoff</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            </a>
          </motion.div>

          {/* Stats Row (delay 1.3s) */}
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 1.3 }}
            className="flex items-stretch gap-4 mt-10"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
              <svg className="w-7 h-7 text-white stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className="mt-4">
                <span className="text-4xl font-heading italic text-white tracking-[-1px] leading-none block">
                  34.5 Min
                </span>
                <span className="text-xs text-white font-body font-light mt-2 block">
                  Average Videos Watch Time
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
              <svg className="w-7 h-7 text-white stroke-current" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
              <div className="mt-4">
                <span className="text-4xl font-heading italic text-white tracking-[-1px] leading-none block">
                  2.8B+
                </span>
                <span className="text-xs text-white font-body font-light mt-2 block">
                  Users Across the Globe
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners (bottom of hero, delay 1.4s) */}
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 1.4 }}
          className="relative z-10 flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="text-2xl md:text-3xl font-heading italic text-white tracking-tight flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span>Aeon</span>
            <span>·</span>
            <span>Vela</span>
            <span>·</span>
            <span>Apex</span>
            <span>·</span>
            <span>Orbit</span>
            <span>·</span>
            <span>Zeno</span>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — CAPABILITIES */}
      <section className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden">
        {/* Full-Bleed Capabilities Video */}
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Container */}
        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
          {/* Header */}
          <div className="mb-auto">
            <p className="text-sm font-body text-white/80 mb-6 font-mono">
              // Capabilities
            </p>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Production<br />evolved
            </h2>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Card 1 — AI Scenery */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between">
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-[0.75rem] liquid-glass flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"].map((tag) => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  AI Scenery
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.
                </p>
              </div>
            </div>

            {/* Card 2 — Batch Production */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between">
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-[0.75rem] liquid-glass flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"].map((tag) => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  Batch Production
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.
                </p>
              </div>
            </div>

            {/* Card 3 — Smart Lighting */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between">
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-[0.75rem] liquid-glass flex items-center justify-center text-white shrink-0">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"].map((tag) => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  Smart Lighting
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
