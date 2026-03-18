import { Resend } from "resend";

let resend: Resend | null = null;

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

export async function sendSeanceConfirmationEmail(
  to: string,
  prenom: string
) {
  const client = getResend();
  if (!client) {
    console.warn("Resend non configuré — envoi email ignoré.");
    return;
  }

  try {
    await client.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to,
      subject: "Confirmation — Séance d'information BacLab",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #9B1620, #C41E2A); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">BacLab</h1>
          </div>
          <div style="padding: 32px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; color: #1A1111;">Bonjour ${prenom},</p>
            <p style="font-size: 16px; color: #1A1111;">
              Merci pour votre inscription à la séance d'information BacLab !
            </p>
            <div style="background: #FAF7F5; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <p style="margin: 0 0 8px; font-weight: bold; color: #1A1111;">📅 Dimanche 22 mars à 16h00</p>
              <p style="margin: 0; color: #666;">En ligne via Zoom</p>
            </div>
            <p style="font-size: 14px; color: #1A1111; font-weight: bold;">
              Voici le lien pour rejoindre la séance :
            </p>
            <a href="https://us06web.zoom.us/j/83298790763" style="display: inline-block; background: #C41E2A; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: bold; margin: 12px 0;">
              Rejoindre la réunion Zoom
            </a>
            <p style="font-size: 13px; color: #999; margin-top: 4px;">
              https://us06web.zoom.us/j/83298790763
            </p>
            <p style="font-size: 14px; color: #666;">
              En attendant, n'hésitez pas à nous contacter si vous avez des questions.
            </p>
            <p style="font-size: 14px; color: #666; margin-top: 32px;">
              À très bientôt,<br/>
              <strong>L'équipe BacLab</strong>
            </p>
          </div>
        </div>
      `,
    });
    console.log(`Email de confirmation envoyé à ${to}`);
  } catch (error) {
    console.error("Erreur envoi email Resend:", error);
  }
}
