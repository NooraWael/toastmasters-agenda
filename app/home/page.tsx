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

        

        {/* Who I Am Section - WITH PHOTO */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto rounded-[32px] bg-white/85 p-10 sm:p-14 shadow-[20px_20px_40px_rgba(0,0,0,0.12),-18px_-18px_36px_rgba(255,255,255,0.95)] border border-white/70">
            <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 items-center">
              
              {/* Photo Side */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-[28px] overflow-hidden shadow-[14px_14px_32px_rgba(0,0,0,0.15),-12px_-12px_28px_rgba(255,255,255,0.9)] border-[6px] border-white/70">
                    {/* Replace this src with your actual photo path */}
                    <img 
                      src="/noora.jpg" 
                      alt="Noora - President of Reboot Toastmasters"
                      className="w-full h-full object-cover"
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
              <div className="text-5xl mb-5">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Editor</h3>
              <p className="text-slate-600 leading-relaxed">Live agenda editor with instant preview</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70 hover:-translate-y-2 transition-all duration-200">
              <div className="text-5xl mb-5">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Roles</h3>
              <p className="text-slate-600 leading-relaxed">Custom roles, speakers, evaluation teams, breaks</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70 hover:-translate-y-2 transition-all duration-200">
              <div className="text-5xl mb-5">✅</div>
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
              <div className="text-5xl mb-5">🌐</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-language</h3>
              <p className="text-slate-600 leading-relaxed">Multi-language agendas for diverse clubs</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70">
              <div className="text-5xl mb-5">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Contest Templates</h3>
              <p className="text-slate-600 leading-relaxed">Contest / training / workshop templates</p>
            </div>

            <div className="rounded-[28px] bg-white/85 p-8 sm:p-10 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70">
              <div className="text-5xl mb-5">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Flows</h3>
              <p className="text-slate-600 leading-relaxed">Context-aware flows to reduce manual input</p>
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
