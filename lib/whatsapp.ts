import { readFileSync } from "fs";
import { join } from "path";

export async function sendSeanceWhatsApp(
  telephone: string,
  prenom: string
) {
  const apiUrl = process.env.WHATSAPP_API_URL;
  const idInstance = process.env.WHATSAPP_ID_INSTANCE;
  const apiToken = process.env.WHATSAPP_API_TOKEN;

  if (!apiUrl || !idInstance || !apiToken) {
    console.warn("WhatsApp non configuré — envoi ignoré.");
    return;
  }

  try {
    // Lire le template depuis le fichier texte
    const templatePath = join(process.cwd(), "messages", "whatsapp-seance.txt");
    let message = readFileSync(templatePath, "utf-8");

    // Remplacer les variables
    message = message.replace(/\{\{prenom\}\}/g, prenom);

    // Extraire le numéro sans le "+" et ajouter @c.us
    const cleanNumber = telephone.replace(/\D/g, "");
    const chatId = `${cleanNumber}@c.us`;

    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId, message }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(`WhatsApp envoyé à ${chatId}: ${data.idMessage}`);
    } else {
      console.error("Erreur envoi WhatsApp:", res.status, await res.text());
    }
  } catch (error) {
    console.error("Erreur envoi WhatsApp:", error);
  }
}
