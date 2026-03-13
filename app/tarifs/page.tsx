import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "100 $ par mois par matière. Groupes de 5, 2 visioconférences par semaine, support quotidien. Paiement sécurisé par Stripe.",
  openGraph: {
    title: "Tarifs | BacLab",
    description:
      "100 $ par mois par matière. Groupes de 5, 2 visioconférences par semaine, support quotidien.",
  },
};

const inclus = [
  "Groupes de 5 élèves max",
  "2 visioconférences par semaine",
  "Support quotidien par message",
  "Cours dispensés par des alumni d'excellence",
];

const cartes = [
  { name: "Visa", src: "/payments/visa.png" },
  { name: "Mastercard", src: "/payments/mastercard.png" },
  { name: "American Express", src: "/payments/amex.png" },
];

const mobileMoney = [
  { name: "M-Pesa", src: "/payments/mpesa.png" },
  { name: "Airtel Money", src: "/payments/airtel-money.png" },
  { name: "Orange Money", src: "/payments/orange-money.png" },
];

export default function TarifsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-red-dark to-red-primary pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Tarifs
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Un tarif simple et transparent pour un accompagnement d&apos;excellence.
          </p>
        </div>
      </section>

      {/* Pricing card */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border-2 border-red-primary/20 bg-white p-8 sm:p-10 shadow-xl text-center">
              <p className="text-sm font-semibold text-red-primary uppercase tracking-wide mb-2">
                Par matière
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-display text-6xl font-bold text-foreground">
                  100
                </span>
                <span className="text-2xl font-semibold text-foreground/60">
                  $
                </span>
              </div>
              <p className="text-foreground/50 mb-8">par mois</p>

              <ul className="space-y-4 text-left mb-10">
                {inclus.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-red-primary mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/inscription"
                className="block w-full rounded-lg bg-red-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-dark"
              >
                S&apos;inscrire
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Paiement sécurisé */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg
                className="h-6 w-6 text-foreground/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Paiement sécurisé
              </h2>
            </div>
            <p className="text-foreground/60 mb-10">
              Paiement sécurisé par Stripe. Vos données sont protégées.
            </p>

            {/* Cartes bancaires */}
            <div className="mb-8">
              <p className="text-sm font-medium text-foreground/40 uppercase tracking-wide mb-4">
                Cartes bancaires
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {cartes.map((c) => (
                  <Image
                    key={c.name}
                    src={c.src}
                    alt={c.name}
                    width={60}
                    height={40}
                    className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                ))}
              </div>
            </div>

            {/* Mobile Money */}
            <div>
              <p className="text-sm font-medium text-foreground/40 uppercase tracking-wide mb-4">
                Mobile Money
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {mobileMoney.map((m) => (
                  <Image
                    key={m.name}
                    src={m.src}
                    alt={m.name}
                    width={60}
                    height={40}
                    className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
