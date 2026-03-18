import { NextResponse } from "next/server";
import pool from "@/db/connection";
import { sendSeanceConfirmationEmail } from "@/lib/resend";
import { sendSeanceWhatsApp } from "@/lib/whatsapp";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prenom, nom, email, telephone } = body;

    if (!prenom || !nom || !email || !telephone) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    await pool.execute(
      `INSERT INTO seance_inscriptions (prenom, nom, email, telephone)
       VALUES (?, ?, ?, ?)`,
      [prenom, nom, email, telephone]
    );

    // Envoi email et WhatsApp en parallèle (sans bloquer la réponse)
    Promise.allSettled([
      sendSeanceConfirmationEmail(email, prenom),
      sendSeanceWhatsApp(telephone, prenom),
    ]).catch((err) => console.error("Erreur notifications:", err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur inscription séance:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
