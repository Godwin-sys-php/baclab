import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscription",
  description:
    "Inscrivez-vous à BacLab et bénéficiez de cours particuliers par des alumni d'excellence. Mathématiques, Physique-Chimie, NSI, SES, HGGSP.",
  openGraph: {
    title: "Inscription | BacLab",
    description:
      "Rejoignez BacLab : cours en petits groupes de 5, 2 visioconférences par semaine, suivi quotidien.",
  },
};

export default function InscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
