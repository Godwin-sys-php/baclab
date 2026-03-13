import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const DB_NAME = process.env.DB_NAME || "baclab";

async function migrate() {
  // Connect without database to create it if needed
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  });

  console.log("Creating database if not exists...");
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
  await conn.query(`USE \`${DB_NAME}\``);

  // ──────────────────────────────────────────────
  // Table: inscriptions (formulaire /inscription)
  // ──────────────────────────────────────────────
  console.log("Creating table: inscriptions...");
  await conn.query(`
    CREATE TABLE IF NOT EXISTS inscriptions (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      prenom VARCHAR(100) NOT NULL,
      nom VARCHAR(100) NOT NULL,
      pays VARCHAR(100) NOT NULL,
      ecole VARCHAR(255) NOT NULL,
      telephone VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      specialites JSON NOT NULL COMMENT 'Array of selected specialties',
      message TEXT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  // ──────────────────────────────────────────────────────────────
  // Table: seance_inscriptions (formulaire /actualites/seance-information)
  // ──────────────────────────────────────────────────────────────
  console.log("Creating table: seance_inscriptions...");
  await conn.query(`
    CREATE TABLE IF NOT EXISTS seance_inscriptions (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      prenom VARCHAR(100) NOT NULL,
      nom VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      telephone VARCHAR(50) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  console.log("Migration completed successfully.");
  await conn.end();
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
