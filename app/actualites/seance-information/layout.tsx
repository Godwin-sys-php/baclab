import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Séance d'information",
  description:
    "Inscrivez-vous à la séance d'information BacLab du 15 mars 2026. Découvrez notre méthode et posez vos questions en direct sur Zoom.",
  openGraph: {
    title: "Séance d'information | BacLab",
    description:
      "Inscrivez-vous à la séance d'information BacLab du 15 mars 2026 à 14h00 sur Zoom.",
  },
};

export default function SeanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
