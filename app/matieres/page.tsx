import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Nos matières",
  description:
    "Découvrez les 5 spécialités enseignées par BacLab : Mathématiques, Physique-Chimie, NSI, SES et HGGSP. Des cours par des alumni d'excellence.",
  openGraph: {
    title: "Nos matières | BacLab",
    description:
      "Découvrez les 5 spécialités enseignées par BacLab : Mathématiques, Physique-Chimie, NSI, SES et HGGSP.",
  },
};

const matieres = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm2.25-4.5h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm2.25-4.5h.008v.008H12.75v-.008Zm0 2.25h.008v.008H12.75v-.008Zm2.25-2.25h.008v.008H15v-.008Zm0 2.25h.008v.008H15v-.008ZM4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294-2.592a1 1 0 0 1 .948.684l.823 2.468" />
      </svg>
    ),
    name: "Mathématiques",
    description:
      "Maîtrisez l'analyse, l'algèbre, la géométrie et les probabilités avec une approche rigoureuse et méthodique. Nos alumni vous guident à travers chaque chapitre du programme, avec des exercices ciblés et des méthodes éprouvées pour exceller aux épreuves du bac. Des annales corrigées aux techniques de résolution rapide, chaque session vous rapproche de l'excellence.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    name: "Physique-Chimie",
    description:
      "De la mécanique à la chimie organique, en passant par la thermodynamique et l'optique, nos tuteurs rendent les concepts complexes accessibles. Chaque session combine théorie et exercices pratiques, avec des démonstrations et des schémas clairs pour une compréhension en profondeur du programme.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    name: "NSI — Numérique et Sciences Informatiques",
    description:
      "Apprenez la programmation Python, les algorithmes, les structures de données, les bases de données et l'architecture des réseaux. Nos alumni en informatique vous préparent aux épreuves pratiques et théoriques avec des projets concrets et des exercices de code en conditions d'examen.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    name: "SES — Sciences Économiques et Sociales",
    description:
      "Économie, sociologie et regards croisés : nos tuteurs vous aident à maîtriser les concepts fondamentaux, à structurer vos dissertations et à analyser les documents avec méthode. Une préparation complète pour les épreuves écrites du bac, avec un focus sur l'argumentation et l'esprit critique.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
      </svg>
    ),
    name: "HGGSP — Histoire-Géographie, Géopolitique et Sciences Politiques",
    description:
      "Explorez les grands enjeux contemporains à travers l'histoire, la géographie, la géopolitique et les sciences politiques. Nos alumni vous accompagnent dans la maîtrise des méthodes de composition et d'étude de documents, avec une attention particulière aux problématiques internationales actuelles.",
  },
];

export default function MatieresPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-red-dark to-red-primary pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Nos matières
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Cinq spécialités enseignées par des alumni ayant excellé dans chaque domaine.
          </p>
        </div>
      </section>

      {/* Matières list */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {matieres.map((m, i) => (
            <ScrollReveal key={i}>
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 sm:p-10 transition-all duration-300 hover:shadow-lg hover:border-red-primary/20">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                    {m.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-3">
                      {m.name}
                    </h2>
                    <p className="text-foreground/60 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-dark to-red-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Intéressé ? Inscrivez-vous
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Rejoignez BacLab et bénéficiez d&apos;un accompagnement personnalisé par des alumni d&apos;excellence.
          </p>
          <Link
            href="/inscription"
            className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-red-primary transition-all hover:bg-gray-50 hover:shadow-lg"
          >
            S&apos;inscrire
          </Link>
        </div>
      </section>
    </>
  );
}
