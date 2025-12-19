import Image from "next/image";
import Link from "next/link";

export default function HomeLanding() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(0,65,101,0.08),transparent_30%),radial-gradient(circle_at_70%_0%,rgba(119,36,50,0.08),transparent_35%),linear-gradient(135deg,#e7ecff,#f7f9ff)] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-20">
        
        {/* Hero Section */}
        <header className="mb-24">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-6 py-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-600 shadow-[10px_10px_30px_rgba(0,0,0,0.06),-10px_-10px_30px_rgba(255,255,255,0.9)] border border-white/70">
              Toastmasters Agenda Toolkit
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-slate-900 drop-shadow-sm">
              Agendas built fast for<br />
              <span className="text-[#004165]">Toastmasters clubs.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Remove the grunt work of crafting meeting agendas. Today it&apos;s a clean generator; 
              next comes languages, contests, trainings, and more.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Link
                href="/agenda"
                className="inline-flex items-center rounded-full bg-[#004165] px-8 py-4 text-white font-bold text-lg shadow-[10px_10px_30px_rgba(0,0,0,0.12),-10px_-10px_30px_rgba(255,255,255,0.9)] hover:-translate-y-1 hover:shadow-[12px_12px_35px_rgba(0,0,0,0.15)] transition-all duration-200"
              >
                Launch Agenda Generator
              </Link>
              <a
                href="https://github.com/NooraWael/toastmasters-agenda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-4 text-slate-700 font-semibold text-lg shadow-[8px_8px_24px_rgba(0,0,0,0.08),-8px_-8px_24px_rgba(255,255,255,0.8)] border border-white/60 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.12),-10px_-10px_30px_rgba(255,255,255,0.9)] transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
              </a>
              <a
                href="https://www.linkedin.com/in/nooraqasim"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-4 text-slate-700 font-semibold text-lg shadow-[8px_8px_24px_rgba(0,0,0,0.08),-8px_-8px_24px_rgba(255,255,255,0.8)] border border-white/60 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.12),-10px_-10px_30px_rgba(255,255,255,0.9)] transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* Quick tutorial */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 shadow-lg border border-white/70">
                How it works
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4">
                Reuse your agenda in three simple steps
              </h2>
              <p className="text-lg text-slate-600 mt-3">
                Save your data once, export a PDF, and load it next time so you only tweak what changed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "Step 1",
                  title: "Fill in your meeting info",
                  desc: "Add your club details, speakers, roles, and timing. Everything is editable in the live form.",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 5h16" />
                      <path d="M4 9h16" />
                      <path d="M4 13h10" />
                      <path d="M4 17h6" />
                      <path d="M18 15v6" />
                      <path d="M15 18h6" />
                    </svg>
                  ),
                  accent: "from-[#004165] to-[#006b9f]",
                },
                {
                  step: "Step 2",
                  title: "Save & download as PDF",
                  desc: "Use the save/export controls to keep a copy locally and grab a print-ready PDF for the meeting.",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3v12" />
                      <path d="m8 11 4 4 4-4" />
                      <path d="M5 21h14" />
                    </svg>
                  ),
                  accent: "from-[#772432] to-[#9b3246]",
                },
                {
                  step: "Step 3",
                  title: "Load it next meeting",
                  desc: "Import your saved data, update only what changed, and export again—no retyping needed.",
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12a9 9 0 1 1 9 9" />
                      <path d="m3 16 4-4-4-4" />
                      <path d="M21 8v8" />
                      <path d="m17 12 4-4 4 4-4 4z" />
                    </svg>
                  ),
                  accent: "from-[#0ea5e9] to-[#2563eb]",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70 hover:-translate-y-2 transition-all duration-200"
                >
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-md`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-1">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Who I Am Section - WITH PHOTO */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto rounded-[32px] bg-white/85 p-10 sm:p-14 shadow-[20px_20px_40px_rgba(0,0,0,0.12),-18px_-18px_36px_rgba(255,255,255,0.95)] border border-white/70">
            <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 items-center">
              
              {/* Photo Side */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-[28px] overflow-hidden shadow-[14px_14px_32px_rgba(0,0,0,0.15),-12px_-12px_28px_rgba(255,255,255,0.9)] border-[6px] border-white/70">
                    <Image
                      src="/noora.jpg"
                      alt="Noora - President of Reboot Toastmasters"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative badge */}
                  <div className="absolute -bottom-5 -right-5 bg-[#004165] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-[10px_10px_30px_rgba(0,0,0,0.2)]">
                    President @ Reboot TM
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#004165]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#004165] mb-5">
                    Who I Am
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
                    Hi, I&apos;m Noora
                  </h2>
                </div>
                
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  President of <strong className="text-[#004165]">Reboot Toastmasters</strong>. I built this toolkit to remove 
                  the grunt work of crafting meeting agendas, so club leaders can focus on what 
                  really matters, helping members grow.
                </p>
                
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  Running meetings weekly taught me that the administrative burden shouldn&apos;t 
                  take away from the experience. This tool is my solution to that problem, and 
                  I&apos;m excited to share it with the Toastmasters community.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/noorawael"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#004165] px-7 py-3.5 text-white font-semibold shadow-[10px_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-6 shadow-lg border border-white/70">
              Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              What&apos;s here today
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70 hover:-translate-y-2 transition-all duration-200">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Editor</h3>
              <p className="text-slate-600 leading-relaxed">Live agenda editor with instant preview</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70 hover:-translate-y-2 transition-all duration-200">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Roles</h3>
              <p className="text-slate-600 leading-relaxed">Custom roles, speakers, evaluation teams, breaks</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70 hover:-translate-y-2 transition-all duration-200">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Print Ready</h3>
              <p className="text-slate-600 leading-relaxed">Print/export friendly design</p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-6 shadow-lg border border-white/70">
              Roadmap
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              What&apos;s coming next
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-language</h3>
              <p className="text-slate-600 leading-relaxed">Multi-language agendas for diverse clubs</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <path d="M7 4h10" />
                  <path d="M17 4v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4" />
                  <path d="M3 4h4v4a5 5 0 0 1-5-5v0" />
                  <path d="M17 4h4v0a5 5 0 0 1-5 5v0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Contest Templates</h3>
              <p className="text-slate-600 leading-relaxed">Contest / training / workshop templates</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3a6 6 0 0 0-6 6v1.5a3.5 3.5 0 0 0 0 7V18a3 3 0 0 0 3 3h1" />
                  <path d="M12 3a6 6 0 0 1 6 6v1.5a3.5 3.5 0 0 1 0 7V18a3 3 0 0 1-3 3h-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Flows</h3>
              <p className="text-slate-600 leading-relaxed">Context-aware flows to reduce manual input</p>
            </div>
          </div>
        </section>

        {/* Version Roadmap */}
        <section className="mb-24">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 shadow-lg border border-white/70">
                Version Control · Roadmap
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900">Release timeline</h3>
              <p className="text-slate-600">Track what shipped and what&apos;s coming next.</p>
            </div>

            <div className="relative pl-6">
              <span className="absolute left-2 top-0 bottom-0 w-px bg-slate-200" aria-hidden />
              <div className="space-y-6">
                {[
                  {
                    version: "v1.0.0",
                    date: "December 19 2025",
                    title: "Initial release",
                    detail:
                      "Agenda generator MVP with live preview, logo uploads, printable layout, and JSON import/export.",
                    status: "released",
                  },
                  {
                    version: "v1.1.0",
                    date: "Planned",
                    title: "Multilingual & contest templates",
                    detail:
                      "Add language toggles plus contest/training/workshop agenda variants for clubs with specialized events.",
                    status: "planned",
                  },
                  {
                    version: "v1.2.0",
                    date: "Planned",
                    title: "Smart automations",
                    detail:
                      "Context-aware defaults, faster role assignment, and timeline helpers to reduce manual input.",
                    status: "planned",
                  },
                ].map((item) => {
                  const isReleased = item.status === "released";
                  return (
                    <div key={item.version} className="relative">
                      <div
                        className={`absolute -left-[18px] top-2 h-3 w-3 rounded-full ${isReleased ? "bg-[#004165] shadow" : "bg-slate-300"}`}
                        aria-hidden
                      />
                      <div
                        className={`rounded-2xl p-5 shadow-[12px_12px_28px_rgba(0,0,0,0.08),-10px_-10px_24px_rgba(255,255,255,0.9)] border border-white/70 ${
                          isReleased ? "bg-white/90" : "bg-white/70 opacity-75"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <span className={`text-sm font-semibold ${isReleased ? "text-[#004165]" : "text-slate-500"}`}>
                            {item.version}
                          </span>
                          <span className="text-sm text-slate-500">{item.date}</span>
                        </div>
                        <h4 className={`text-lg font-bold ${isReleased ? "text-slate-900" : "text-slate-500"}`}>{item.title}</h4>
                        <p className={`leading-relaxed ${isReleased ? "text-slate-600" : "text-slate-500"}`}>{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-[32px] bg-gradient-to-br from-[#004165] to-[#772432] p-10 sm:p-16 shadow-[20px_20px_40px_rgba(0,0,0,0.2)] border border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Want to help?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                If you have ideas or want to contribute, open an issue or PR on GitHub. 
                Let&apos;s make agendas effortless for every Toastmasters club.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/agenda"
                className="inline-flex items-center rounded-full bg-white px-9 py-4 text-[#004165] font-bold text-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              >
                Start Building
              </Link>
              <a
                href="https://github.com/NooraWael/toastmasters-agenda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-9 py-4 text-white font-bold text-lg border-2 border-white/30 hover:bg-white/30 hover:-translate-y-1 transition-all duration-200"
              >
                Contribute
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
