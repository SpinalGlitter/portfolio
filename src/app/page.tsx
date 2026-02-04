import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Kino site",
      description:
        "En webbplats för en biograf med eget bokningssystem, byggd med Next.js.",
      tags: ["Next.js", "Express", "Tailwind"],
      href: "https://kino-fullstack-jp.vercel.app",
    },
    {
      title: "Wordle game",
      description:
        "Ett ordgissningsspel inspirerat av Wordle, utvecklat med React.",
      tags: ["Design", "React", "API"],
      href: "https://github.com/SpinalGlitter/Wordle",
    },
    {
      title: "Fishing Diary",
      description:
        "En mobilapp för att logga och dokumentera fiskefångster, skapad med React Native.",
      tags: [
        "React Native",
        "React Native Maps",
        "Expo",
        "PostgreSQL",
        "Supabase",
      ],
      href: "https://github.com/EmpyreanMist/Fishing-Diary",
    },
  ];

  const experience = [
    {
      role: "Systemutvecklare i Java & JavaScript",
      company: "Lernia Yrkeshögskola",
      period: "2024 — Nu",
      summary:
        "Detta är några av kurserna jag läst: Arbetsmetidik och agila projektmetoder, Avancerad webbutveckling fullstack, Interaktionsdesign och användbarhet, Systemutveckling Java, Systemarkitektur Java, Backendutveckling och systemintegration Java",
    },
  ];

  const skills = [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Tailwind",
    "SEO",
    "UX/UI",
    "Java",
    "Spring Boot",
    "SQL",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
          <a href="#hem" className="text-lg font-semibold tracking-tight">
            JP
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
              Tillgänglig
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Johannes Persson
            </h1>
            <p className="text-lg text-zinc-300">
              Studerar för närvarande Systemutvecklare i Java & JavaScript vid
              Lernia yrkeshögskola. Förväntad examen i juni 2026.
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
              <span>Hudiksvall, Sverige</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/jp.jpg"
                    alt="Johannes Persson"
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">Johannes Persson</p>
                </div>
              </div>

              <ul className="grid gap-3 text-sm text-zinc-300">
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-zinc-400">Utbildning:</span>{" "}
                  Systemutvecklarstudent (Java & JavaScript)
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-zinc-400">Examen:</span> Juni 2026
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-zinc-400">Ålder:</span> 37 år
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-zinc-400">Intressen:</span> Fiske, IT,
                  Sport i allmänhet, Fotboll i synnerhet
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-zinc-400">Bor:</span> Hudiksvall,
                  Eskilstuna Sverige
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="om" className="space-y-6 py-16">
          <h2 className="text-2xl font-semibold">Om mig</h2>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <p className="text-zinc-300">
              Systemutvecklarstudent med fokus på Java och JavaScript, förväntad
              examen våren 2026. Har erfarenhet av både frontend- och
              backendutveckling genom projekt med React, Next.js, Node.js och
              Java/Spring Boot. Erfarenhet av att arbeta agilt i team med
              Git/GitHub och Scrum, och brinner för att utveckla användarvänliga
              och välstrukturerade system.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-zinc-400">Just nu</p>
              <p className="mt-2 text-lg font-semibold">
                Bygger portfolio och söker praktikplats.
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Hör gärna av dig om du undrar något.
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
            <span className="text-sm text-zinc-400">2024 — 2026</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
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
              </a>
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
            <h2 className="text-2xl font-semibold">Kontakt</h2>
            <p className="mt-2 text-zinc-300">
              Jag nås enklast via mail eller LinkedIn. Ser fram emot att höra
              från dig!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:johannes.persson47@gmail.com"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950"
              >
                johannes.persson47@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/johannes-persson-179503329/"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/SpinalGlitter"
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
