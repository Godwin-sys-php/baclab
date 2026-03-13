# Prompt Claude Code — Site BacLab (Next.js)

---

Crée un site web **multi-pages** avec **Next.js (App Router)** pour **BacLab**, une plateforme de cours particuliers pour lycéens préparant le baccalauréat. Les cours sont donnés par des alumni ayant excellé au bac.

## Stack technique

- **Next.js 14+** avec App Router (`/app`)
- **TypeScript**
- **Tailwind CSS** pour le styling
- Pages en **Server Components** par défaut (SEO-friendly), Client Components uniquement quand nécessaire (formulaires, navbar mobile, etc.)
- Metadata SEO sur chaque page (title, description, Open Graph)

## Identité visuelle

- **Thème dominant rouge** : rouge principal (#C41E2A), rouge foncé (#9B1620), rouge clair (#E8353F)
- Fond blanc / off-white (#FAF7F5), textes sombres (#1A1111)
- **Logo** : prévoir un composant `<Image>` avec un placeholder texte "BacLab" dans la navbar (je remplacerai par mon logo). Utiliser `/public/logo.png` comme chemin
- **Typographie** : Google Fonts via `next/font` — une font display élégante pour les titres (ex: Playfair Display) et une font lisible pour le body (ex: DM Sans)
- Style moderne, professionnel, qui inspire confiance aux parents et aux lycéens

## Architecture des pages

```
/app
  layout.tsx        → Layout global (navbar + footer)
  page.tsx          → Page d'accueil
  /matieres
    page.tsx        → Nos matières (détail)
  /tarifs
    page.tsx        → Page tarifs & paiement
  /actualites
    page.tsx        → Liste des actualités
    /seance-information
      page.tsx      → Page dédiée séance d'info du 15 mars
  /inscription
    page.tsx        → Formulaire d'inscription à BacLab
```

## Composants partagés (`/components`)

### Navbar
- Logo BacLab (placeholder image)
- Liens : Accueil, Matières, Tarifs, Actualités, Inscription
- Bouton CTA "S'inscrire" en rouge bien visible
- Menu hamburger responsive sur mobile
- Navbar fixe en haut, fond blanc avec légère ombre au scroll

### Footer
- Logo BacLab
- Liens rapides vers toutes les pages
- Contact : contact@baclab.com
- Icônes réseaux sociaux : Instagram, WhatsApp, TikTok (liens placeholder `#`)
- "© 2026 BacLab — Tous droits réservés"

---

## Pages en détail

### 1. Page d'accueil (`/`)

**Hero Section :**
- Grand titre : "Réussis ton Bac avec les meilleurs alumni"
- Sous-titre : "Des cours particuliers par des alumni d'excellence, en petits groupes de 5, avec un suivi quotidien."
- 2 boutons CTA : "Découvrir nos offres" (→ /tarifs) et "S'inscrire" (→ /inscription)
- Fond avec un design impactant (gradient rouge, formes géométriques ou motif subtil)

**Section "Comment ça marche" :**
- 4 cartes avec icônes :
  - Groupes de 5 élèves maximum
  - 2 visioconférences par semaine
  - Disponible tous les jours par message
  - Suivi personnalisé par des alumni

**Section "Nos matières" (aperçu) :**
- Grille avec les 5 matières en cartes (icône + nom + brève description)
- Bouton "En savoir plus" → lien vers /matieres

**Section "Actualités" (aperçu) :**
- Afficher la dernière actualité en vedette :
  - Badge "PROCHAIN ÉVÉNEMENT"
  - Séance d'information — Dimanche 15 mars 2026 à 14h00
  - Courte description
  - Bouton "En savoir plus" → /actualites/seance-information
- Bouton "Toutes les actualités" → /actualites

**Section CTA finale :**
- Bandeau rouge avec "Prêt à réussir ton bac ?" + bouton "S'inscrire maintenant" → /inscription

---

### 2. Page Matières (`/matieres`)

- Titre : "Nos matières"
- Une carte détaillée pour chaque spécialité :
  - **Mathématiques** — icône, description du programme et de l'approche
  - **Physique-Chimie** — idem
  - **NSI** (Numérique et Sciences Informatiques) — idem
  - **SES** (Sciences Économiques et Sociales) — idem
  - **HGGSP** (Histoire-Géographie, Géopolitique et Sciences Politiques) — idem
- Chaque carte bien espacée, avec une icône ou illustration
- CTA en bas : "Intéressé ? Inscrivez-vous" → /inscription

---

### 3. Page Tarifs (`/tarifs`)

**Carte de prix principale :**
- **100 $ / mois** par matière
- Liste des inclus :
  - Groupes de 5 élèves max
  - 2 visioconférences par semaine
  - Support quotidien par message
  - Cours dispensés par des alumni d'excellence
- Bouton "S'inscrire" → /inscription

**Section Paiement sécurisé :**
- Titre : "Paiement sécurisé"
- Mention "Paiement sécurisé par Stripe" avec icône cadenas
- Logos des moyens de paiement en ligne, petits, style trust badges en niveaux de gris :
  - **Cartes** : Visa, Mastercard, American Express (utiliser des `<Image>` placeholder vers `/public/payments/visa.png`, `/public/payments/mastercard.png`, etc.)
  - **Mobile Money** : M-Pesa, Airtel Money, Orange Money (idem : `/public/payments/mpesa.png`, `/public/payments/airtel-money.png`, `/public/payments/orange-money.png`)
- Disposer ces logos en rangée horizontale avec un léger espace entre chacun

---

### 4. Page Actualités (`/actualites`)

- Titre : "Actualités"
- Liste des actualités sous forme de cartes :
  - **Actualité 1 (mise en avant)** :
    - Badge "PROCHAIN ÉVÉNEMENT"
    - 🎓 Séance d'information — Dimanche 15 mars 2026 à 14h00
    - Description courte : "Découvrez BacLab lors de notre séance d'information en ligne. Posez vos questions et apprenez comment nos alumni peuvent vous aider."
    - Bouton "S'inscrire à la séance" → /actualites/seance-information
- Prévoir la structure pour ajouter facilement d'autres actualités plus tard (composant `ActualiteCard` réutilisable)

---

### 5. Page Séance d'information (`/actualites/seance-information`)

- Titre : "Séance d'information BacLab"
- Sous-titre : "Dimanche 15 mars 2026 à 14h00 — En ligne via Zoom"
- Description détaillée :
  - Qu'est-ce que BacLab
  - Ce qu'on va présenter pendant la séance
  - Comment ça se passe (c'est sur Zoom, gratuit, ouvert à tous)
- **Formulaire d'inscription à la séance** :
  - Prénom (requis)
  - Nom (requis)
  - Email (requis)
  - Numéro de téléphone (requis)
  - Bouton "Réserver ma place"
- Note sous le formulaire : "Vous recevrez le lien Zoom par email après inscription."
- Pas de backend : afficher un message de confirmation "Merci pour votre inscription ! Nous vous enverrons le lien Zoom par email." après soumission (Client Component avec useState)

---

### 6. Page Inscription (`/inscription`)

- Titre : "Rejoindre BacLab"
- Sous-titre : "Remplissez le formulaire ci-dessous et nous vous contacterons pour finaliser votre inscription."
- **Formulaire** :
  - Prénom (requis)
  - Nom (requis)
  - Pays de résidence (requis) — `<select>` avec : RDC, Congo-Brazzaville, Cameroun, Côte d'Ivoire, Sénégal, Gabon, Mali, Burkina Faso, Guinée, Togo, Bénin, Madagascar, France, Belgique, Suisse, Canada, Autre
  - Nom de l'école (requis)
  - Numéro de téléphone (requis)
  - Adresse email (requis)
  - Spécialités souhaitées (cases à cocher multiples) : Mathématiques, Physique-Chimie, NSI, SES, HGGSP
  - Message / questions (optionnel, textarea)
  - Bouton "Envoyer mon inscription"
- Confirmation après soumission : "Merci ! Nous vous contacterons très bientôt pour finaliser votre inscription."
- Pas de backend pour l'instant, juste le front

---

## Exigences techniques

- **SEO** : balises `<title>`, `<meta description>`, Open Graph sur chaque page via `metadata` export de Next.js
- **Responsive** : mobile-first, parfait sur mobile, tablette et desktop
- **Animations** : transitions douces sur les cartes au hover, apparition progressive des sections au scroll (utiliser une intersection observer simple côté client)
- **Tailwind config** : étendre les couleurs avec les variables du thème rouge BacLab
- **Images** : utiliser `next/image` partout. Les chemins placeholder vers `/public/` pour logo et logos de paiement
- **Accessibilité** : bon contraste, focus visible, alt text, labels sur les formulaires
- **Formulaires** : validation HTML5 (required, type=email, type=tel)

## Ton et contenu

- Français
- Professionnel mais accessible et chaleureux
- Cible : lycéens + leurs parents
- Inspire confiance, met en avant l'expertise des alumni tuteurs
