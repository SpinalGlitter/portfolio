export default function Home() {
  const projects = [
    {
      title: "Nordic Commerce",
      description:
        "E‑handel med snabb checkout, rekommendationer och optimerad SEO.",
      tags: ["Next.js", "Stripe", "SEO"],
    },
    {
      title: "Studio Atlas",
      description:
        "Marknadssajt med prisplaner, bokningsflöde och hög konvertering.",
      tags: ["Design", "Content", "Analytics"],
    },
    {
      title: "FlowDash",
      description: "Dashboard för KPI:er och rapporter med realtidsdata.",
      tags: ["React", "Charts", "API"],
    },
  ];

  const experience = [
    {
      role: "Systemutvecklare",
      company: "Freelance",
      period: "2022 — Nu",
      summary:
        "Bygger snabba och tillgängliga webbsidor för små och medelstora företag.",
    },
    {
      role: "Systemutvecklare",
      company: "Studio Nord",
      period: "2020 — 2022",
      summary:
        "Levererade webbprojekt från idé till lansering med fokus på UX.",
    },
  ];

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "SEO",
    "UX/UI",
    "Content",
    "Analytics",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
          <a href="#hem" className="text-lg font-semibold tracking-tight">
            JP.
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#om">
              Om
            </a>
            <a className="hover:text-white" href="#projekt">
              Projekt
            </a>
            <a className="hover:text-white" href="#erfarenhet">
              Utbilding
            </a>
            <a className="hover:text-white" href="#kontakt">
              Kontakt
            </a>
          </nav>
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/60"
            href="#kontakt"
          >
            Tillgänglig nu
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6">
        <section
          id="hem"
          className="grid items-center gap-10 py-20 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Tillgänglig för nya uppdrag
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Johannes Persson
            </h1>
            <p className="text-lg text-zinc-300">
              Frontendutvecklare som bygger snabba, snygga och mätbara
              webbupplevelser med Next.js.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projekt"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950"
              >
                Se projekt
              </a>
              <a
                href="#kontakt"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white"
              >
                Kontakta mig
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
              <span>Stockholm, Sverige</span>
              <span>3+ år erfarenhet</span>
              <span>Levererar inom 2–4 veckor</span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white/10" />
                <div>
                  <p className="text-sm text-zinc-400">Specialitet</p>
                  <p className="text-lg font-semibold">
                    Performance & konvertering
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">20+</p>
                  <p className="text-sm text-zinc-400">Levererade projekt</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">98%</p>
                  <p className="text-sm text-zinc-400">Nöjda kunder</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                Jag hjälper företag att lansera snabbt, mäta resultat och
                iterera med tydliga mål.
              </div>
            </div>
          </div>
        </section>

        <section id="om" className="space-y-6 py-16">
          <h2 className="text-2xl font-semibold">Om mig</h2>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <p className="text-zinc-300">
              Jag kombinerar designkänsla med teknisk noggrannhet för att skapa
              webbplatser som känns premium och presterar på topp. Fokus ligger
              på tillgänglighet, snabba laddtider och tydlig konvertering.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Just nu</p>
              <p className="mt-2 text-lg font-semibold">
                Bygger portfolio & klientprojekt
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Hör gärna av dig om du vill lansera något nytt.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projekt" className="space-y-6 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Utvalda projekt</h2>
            <span className="text-sm text-zinc-400">2023 — 2026</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="erfarenhet" className="space-y-6 py-16">
          <h2 className="text-2xl font-semibold">Utbildning</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>{item.company}</span>
                  <span>{item.period}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="space-y-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10">
            <h2 className="text-2xl font-semibold">Vill du samarbeta?</h2>
            <p className="mt-2 text-zinc-300">
              Jag tar uppdrag inom webb, landningssidor och produktlanseringar.
              Skicka en rad så sätter vi upp en plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hej@dinmail.se"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950"
              >
                hej@dinmail.se
              </a>
              <a
                href="https://www.linkedin.com"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Johannes Persson. Byggt med Next.js.
      </footer>
    </div>
  );
}
