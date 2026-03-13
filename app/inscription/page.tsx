"use client";

import { useState, type FormEvent } from "react";

const pays = [
  "RDC",
  "Congo-Brazzaville",
  "Cameroun",
  "Côte d'Ivoire",
  "Sénégal",
  "Gabon",
  "Mali",
  "Burkina Faso",
  "Guinée",
  "Togo",
  "Bénin",
  "Madagascar",
  "France",
  "Belgique",
  "Suisse",
  "Canada",
  "Autre",
];

const specialites = [
  "Mathématiques",
  "Physique-Chimie",
  "NSI",
  "SES",
  "HGGSP",
];

export default function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      prenom: formData.get("prenom") as string,
      nom: formData.get("nom") as string,
      pays: formData.get("pays") as string,
      ecole: formData.get("ecole") as string,
      telephone: formData.get("telephone") as string,
      email: formData.get("email") as string,
      specialites: formData.getAll("specialites") as string[],
      message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/inscription", {
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
            Rejoindre BacLab
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et nous vous contacterons pour finaliser votre inscription.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 sm:p-10 shadow-lg">
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
                  Merci !
                </h3>
                <p className="text-foreground/60">
                  Nous vous contacterons très bientôt pour finaliser votre inscription.
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
                    htmlFor="pays"
                    className="block text-sm font-medium text-foreground/70 mb-1.5"
                  >
                    Pays de résidence *
                  </label>
                  <select
                    id="pays"
                    name="pays"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary bg-white"
                  >
                    <option value="">Sélectionnez votre pays</option>
                    {pays.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="ecole"
                    className="block text-sm font-medium text-foreground/70 mb-1.5"
                  >
                    Nom de l&apos;école *
                  </label>
                  <input
                    type="text"
                    id="ecole"
                    name="ecole"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-foreground/70 mb-1.5"
                  >
                    Numéro de téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/70 mb-1.5"
                  >
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary"
                  />
                </div>

                <fieldset>
                  <legend className="block text-sm font-medium text-foreground/70 mb-3">
                    Spécialités souhaitées *
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specialites.map((s) => (
                      <label
                        key={s}
                        className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer transition-colors hover:border-red-primary/30 has-[:checked]:border-red-primary has-[:checked]:bg-red-primary/5"
                      >
                        <input
                          type="checkbox"
                          name="specialites"
                          value={s}
                          className="h-4 w-4 rounded border-gray-300 text-red-primary focus:ring-red-primary accent-red-primary"
                        />
                        <span className="text-sm">{s}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground/70 mb-1.5"
                  >
                    Message / questions (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-red-primary focus:outline-none focus:ring-1 focus:ring-red-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-red-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-dark disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi en cours..." : "Envoyer mon inscription"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
