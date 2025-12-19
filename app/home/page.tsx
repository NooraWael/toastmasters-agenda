import Link from "next/link";

export default function HomeLanding() {
  const pill =
    "inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[8px_8px_24px_rgba(0,0,0,0.08),-8px_-8px_24px_rgba(255,255,255,0.8)] border border-white/60";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(0,65,101,0.08),transparent_30%),radial-gradient(circle_at_70%_0%,rgba(119,36,50,0.08),transparent_35%),linear-gradient(135deg,#e7ecff,#f7f9ff)] text-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 lg:py-16 flex flex-col gap-12">
        {/* Hero */}
        <header className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-[10px_10px_30px_rgba(0,0,0,0.06),-10px_-10px_30px_rgba(255,255,255,0.9)] border border-white/70">
              Toastmasters Agenda Toolkit
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-slate-900 drop-shadow-sm">
              Agendas built fast for Toastmasters clubs.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              I&apos;m Noora, President of Reboot Toastmasters. I built this to remove the grunt work
              of crafting meeting agendas. Today it&apos;s a clean generator; next comes languages,
              contests, trainings, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/agenda"
                className="rounded-full bg-[#004165] px-6 py-3 text-white font-semibold shadow-[10px_10px_30px_rgba(0,0,0,0.12),-10px_-10px_30px_rgba(255,255,255,0.9)] hover:-translate-y-[2px] transition"
              >
                Launch Agenda Generator
              </Link>
              <a
                href="https://github.com/NooraWael/toastmasters-agenda"
                target="_blank"
                rel="noreferrer"
                className={pill}
              >
                View Repository
              </a>
              <a
                href="https://www.linkedin.com/in/noorawael"
                target="_blank"
                rel="noreferrer"
                className={pill}
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>
          <div className="rounded-[32px] bg-white/80 p-6 sm:p-8 shadow-[18px_18px_40px_rgba(0,0,0,0.12),-18px_-18px_40px_rgba(255,255,255,0.9)] border border-white/70 space-y-3">
            <div className="text-sm font-semibold text-slate-600 uppercase tracking-[0.1em]">
              Snapshot
            </div>
            <div className="space-y-3">
              <div className={pill}>🚀 Generate, tweak, and print in minutes.</div>
              <div className={pill}>🖨️ Print-ready layouts honoring Toastmasters style.</div>
              <div className={pill}>🧭 Built by a club President who runs meetings weekly.</div>
              <div className={pill}>🤝 Open source—help shape what&apos;s next.</div>
            </div>
          </div>
        </header>

        {/* Today / Next */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-[28px] bg-white/85 p-6 sm:p-8 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70">
            <h3 className="text-xl font-bold text-slate-900 mb-3">What&apos;s here today</h3>
            <ul className="space-y-3 text-slate-700">
              <li className={pill}>✅ Live agenda editor with instant preview</li>
              <li className={pill}>✅ Custom roles, speakers, evaluation teams, breaks</li>
              <li className={pill}>✅ Print/export friendly design</li>
            </ul>
          </div>
          <div className="rounded-[28px] bg-white/85 p-6 sm:p-8 shadow-[14px_14px_32px_rgba(0,0,0,0.08),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/70">
            <h3 className="text-xl font-bold text-slate-900 mb-3">What&apos;s coming next</h3>
            <ul className="space-y-3 text-slate-700">
              <li className={pill}>🌐 Multi-language agendas for diverse clubs</li>
              <li className={pill}>🏆 Contest / training / workshop templates</li>
              <li className={pill}>🧠 Context-aware flows to reduce manual input</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[32px] bg-white/85 p-6 sm:p-8 shadow-[20px_20px_40px_rgba(0,0,0,0.12),-18px_-18px_36px_rgba(255,255,255,0.95)] border border-white/70 flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Want to help?</h3>
            <p className="text-slate-600 max-w-xl">
              If you have ideas or want to contribute, open an issue or PR on GitHub. Let&apos;s make
              agendas effortless for every Toastmasters club.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/agenda"
              className="rounded-full bg-[#004165] px-6 py-3 text-white font-semibold shadow-[10px_10px_30px_rgba(0,0,0,0.12),-10px_-10px_30px_rgba(255,255,255,0.9)] hover:-translate-y-[2px] transition"
            >
              Start Building
            </Link>
            <a
              href="https://github.com/NooraWael/toastmasters-agenda"
              target="_blank"
              rel="noreferrer"
              className={pill}
            >
              Contribute
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
