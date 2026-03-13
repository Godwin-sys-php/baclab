import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ActualiteCard from "@/components/ActualiteCard";

const howItWorks = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Groupes de 5 élèves maximum",
    description: "Un encadrement personnalisé pour chaque élève, comme en classe privée.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "2 visioconférences par semaine",
    description: "Des sessions en direct avec vos tuteurs pour progresser efficacement.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    title: "Disponible tous les jours",
    description: "Posez vos questions par message à tout moment, votre tuteur vous répond rapidement.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "Suivi par des alumni d\u2019excellence",
    description: "Nos tuteurs ont excellé au bac et vous transmettent leurs méthodes.",
  },
];

const matieres = [
  {
    icon: "f(x)",
    name: "Mathématiques",
    description: "Analyse, algèbre, géométrie et probabilités pour maîtriser le programme.",
  },
  {
    icon: "PC",
    name: "Physique-Chimie",
    description: "Mécanique, thermodynamique, chimie organique et travaux pratiques.",
  },
  {
    icon: "</>",
    name: "NSI",
    description: "Programmation, algorithmes, bases de données et architecture.",
  },
  {
    icon: "SES",
    name: "SES",
    description: "Économie, sociologie et sciences politiques pour comprendre le monde.",
  },
  {
    icon: "HG",
    name: "HGGSP",
    description: "Histoire, géographie, géopolitique et sciences politiques.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-dark via-red-primary to-red-light pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-40 w-40 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full border-2 border-white" />
          <div className="absolute top-1/2 left-1/3 h-20 w-20 rotate-45 border-2 border-white" />
          <div className="absolute top-20 right-1/4 h-32 w-32 rounded-full border border-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Réussis ton Bac avec<br />les meilleurs alumni
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/85 leading-relaxed mb-10">
            Des cours particuliers par des alumni d&apos;excellence, en petits groupes de 5, avec un suivi quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tarifs"
              className="rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-red-primary transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              Découvrir nos offres
            </Link>
            <Link
              href="/inscription"
              className="rounded-lg border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
              Comment ça marche
            </h2>
            <p className="text-center text-foreground/60 mb-14 max-w-2xl mx-auto">
              Un accompagnement complet pour vous aider à atteindre l&apos;excellence au baccalauréat.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="group rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-red-primary/20 hover:-translate-y-1">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Format & Méthodologie */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Bandeau urgence */}
          <ScrollReveal>
            <div className="mb-16 rounded-2xl bg-gradient-to-r from-red-dark to-red-primary p-6 sm:p-8 text-center text-white">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-semibold">Inscriptions ouvertes</span>
                </div>
                <span className="hidden sm:block h-5 w-px bg-white/30" />
                <span className="text-white/80">Places limitées — ne tardez pas !</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats rapides */}
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="rounded-2xl border border-gray-100 bg-background p-6 text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-red-primary mb-1">2</p>
                <p className="text-sm text-foreground/60">séances / semaine</p>
                <p className="text-xs text-foreground/40 mt-1">de 1h30 chacune</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-background p-6 text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-red-primary mb-1">5</p>
                <p className="text-sm text-foreground/60">élèves max</p>
                <p className="text-xs text-foreground/40 mt-1">par groupe</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-background p-6 text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-red-primary mb-1">7j/7</p>
                <p className="text-sm text-foreground/60">support par message</p>
                <p className="text-xs text-foreground/40 mt-1">réponse rapide</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-background p-6 text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-red-primary mb-1">100%</p>
                <p className="text-sm text-foreground/60">alumni d&apos;excellence</p>
                <p className="text-xs text-foreground/40 mt-1">comme tuteurs</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Notre méthodologie */}
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
              Notre méthodologie
            </h2>
            <p className="text-center text-foreground/60 mb-14 max-w-2xl mx-auto">
              Une approche complète pour vous préparer à chaque épreuve du baccalauréat.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal>
              <div className="group rounded-2xl border border-gray-100 bg-background p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-red-primary/20 hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Méthodologie dissertation</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Structurer, argumenter et rédiger avec rigueur pour décrocher les meilleures notes.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="group rounded-2xl border border-gray-100 bg-background p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-red-primary/20 hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Analyse de documents</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Apprendre à lire, interpréter et exploiter tout type de document en conditions d&apos;examen.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="group rounded-2xl border border-gray-100 bg-background p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-red-primary/20 hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Entraînement au Grand Oral</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Préparation intensive à l&apos;épreuve orale : posture, argumentation et gestion du stress.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="group rounded-2xl border border-gray-100 bg-background p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-red-primary/20 hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Simulations écrites & orales</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Des épreuves blanches régulières en conditions réelles pour être prêt le jour J.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nos matières */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
              Nos matières
            </h2>
            <p className="text-center text-foreground/60 mb-14 max-w-2xl mx-auto">
              Cinq spécialités enseignées par des alumni ayant excellé dans chaque domaine.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matieres.map((m, i) => (
              <ScrollReveal key={i}>
                <div className="group rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-red-primary/20 hover:-translate-y-1">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-primary/10 font-display text-lg font-bold text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                    {m.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {m.name}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/matieres"
              className="inline-block rounded-lg border-2 border-red-primary px-6 py-3 text-sm font-semibold text-red-primary transition-colors hover:bg-red-primary hover:text-white"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-14">
              Actualités
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mx-auto max-w-2xl">
              <ActualiteCard
                badge="PROCHAIN ÉVÉNEMENT"
                title="Séance d'information BacLab"
                date="Dimanche 15 mars 2026 à 14h00"
                description="Découvrez BacLab lors de notre séance d'information en ligne. Posez vos questions et apprenez comment nos alumni peuvent vous aider."
                href="/actualites/seance-information"
                buttonLabel="En savoir plus"
                featured
              />
            </div>
          </ScrollReveal>

          <div className="text-center mt-8">
            <Link
              href="/actualites"
              className="inline-block text-sm font-semibold text-red-primary hover:underline"
            >
              Toutes les actualités &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-gradient-to-r from-red-dark to-red-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Prêt à réussir ton bac ?
            </h2>
            <Link
              href="/inscription"
              className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-red-primary transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              S&apos;inscrire maintenant
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
