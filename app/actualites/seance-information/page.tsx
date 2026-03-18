"use client";

import { useState, type FormEvent } from "react";
import PhoneInput, { validatePhone } from "@/components/PhoneInput";

export default function SeanceInformationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [telephone, setTelephone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPhoneError("");

    const phoneErr = validatePhone(telephone);
    if (phoneErr) {
      setPhoneError(phoneErr);
      setLoading(false);
      return;
    }

    const form = e.currentTarget;
    const data = {
      prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value,
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telephone,
    };

    try {
      const res = await fetch("/api/seance-inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Une erreur est survenue.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-red-dark to-red-primary pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Séance d&apos;information BacLab
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Dimanche 22 mars 2026 à 16h00 — En ligne via Zoom
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-14 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 space-y-4">
              <h2 className="font-display text-2xl font-bold">
                Qu&apos;est-ce que BacLab ?
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                BacLab est une plateforme de cours particuliers pour lycéens préparant le baccalauréat. Nos cours sont donnés par des alumni ayant excellé au bac, en petits groupes de 5 élèves maximum, avec un suivi quotidien par message.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 space-y-4">
              <h2 className="font-display text-2xl font-bold">
                Que va-t-on présenter ?
              </h2>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-red-primary mt-1">&#8226;</span>
                  Le fonctionnement de BacLab et notre méthode d&apos;enseignement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-primary mt-1">&#8226;</span>
                  Les matières disponibles et le profil de nos tuteurs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-primary mt-1">&#8226;</span>
                  Les tarifs et les modalités d&apos;inscription
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-primary mt-1">&#8226;</span>
                  Une session de questions-réponses ouverte
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 space-y-4">
              <h2 className="font-display text-2xl font-bold">
                Comment ça se passe ?
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                La séance se tiendra en ligne via Zoom. C&apos;est gratuit et ouvert à tous : lycéens, parents, ou toute personne intéressée. Vous recevrez le lien de connexion par email après votre inscription.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl border-2 border-red-primary/20 bg-white p-8 sm:p-10 shadow-lg">
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Réservez votre place
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
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
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  Merci pour votre inscription !
                </h3>
                <p className="text-foreground/60">
                  Nous vous enverrons le lien Zoom par email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-sm font-medium text-foreground/70 mb-1.5"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-foreground/70 mb-1.5"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/70 mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary"
                  />
                </div>

                <PhoneInput
                  value={telephone}
                  onChange={setTelephone}
                  error={phoneError}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-red-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-dark disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi en cours..." : "Réserver ma place"}
                </button>
              </form>
            )}

            {!submitted && (
              <p className="text-center text-xs text-foreground/40 mt-4">
                Vous recevrez le lien Zoom par email après inscription.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
