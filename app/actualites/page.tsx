import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ActualiteCard from "@/components/ActualiteCard";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Retrouvez toutes les actualités BacLab : événements, séances d'information et nouveautés.",
  openGraph: {
    title: "Actualités | BacLab",
    description:
      "Retrouvez toutes les actualités BacLab : événements, séances d'information et nouveautés.",
  },
};

export default function ActualitesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-red-dark to-red-primary pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Actualités
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Restez informé des derniers événements et nouvelles de BacLab.
          </p>
        </div>
      </section>

      {/* Actualités list */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <ActualiteCard
              badge="PROCHAIN ÉVÉNEMENT"
              title="Séance d'information BacLab"
              date="Dimanche 15 mars 2026 à 14h00"
              description="Découvrez BacLab lors de notre séance d'information en ligne. Posez vos questions et apprenez comment nos alumni peuvent vous aider."
              href="/actualites/seance-information"
              buttonLabel="S'inscrire à la séance"
              featured
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
