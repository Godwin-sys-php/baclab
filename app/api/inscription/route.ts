import { NextResponse } from "next/server";
import pool from "@/db/connection";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { prenom, nom, pays, ecole, telephone, email, specialites, message } =
      body;

    if (!prenom || !nom || !pays || !ecole || !telephone || !email || !specialites?.length) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    await pool.execute(
      `INSERT INTO inscriptions (prenom, nom, pays, ecole, telephone, email, specialites, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [prenom, nom, pays, ecole, telephone, email, JSON.stringify(specialites), message || null]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur inscription:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
