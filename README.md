# Callora

Landing page marketing pour **Callora**, un logiciel de réceptionniste IA pour cabinets dentaires. Le produit s'appelle **Ora** : elle répond aux appels 24/7, comprend les demandes des patients, et transmet un résumé clair à l'équipe du cabinet.

Ceci est uniquement la landing page + un aperçu produit convaincant (dashboard, démo d'appel). Aucune application SaaS réelle n'est branchée — toutes les interactions sont simulées côté front.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- [shadcn](https://ui.shadcn.com/) (style `aria-luma`, basé sur `react-aria-components`)
- [Framer Motion](https://motion.dev/) pour les animations et révélations au scroll
- Police [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) via `next/font/google`

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run start   # servir le build
npm run lint    # ESLint
```

## Structure

```
app/
  layout.tsx          # police, metadata, LanguageProvider
  page.tsx             # assemble toutes les sections de la landing
  globals.css          # design tokens (couleurs OKLCH, radius, fonts)
components/
  ui/button.tsx         # primitives shadcn (Button / LinkButton)
  landing/               # toutes les sections de la page
    navbar.tsx, hero.tsx, dashboard-preview.tsx,
    trust-section.tsx, problem-section.tsx, call-demo.tsx,
    how-it-works.tsx, features.tsx, dashboard-showcase.tsx,
    roi-section.tsx, pricing.tsx, faq.tsx, final-cta.tsx, footer.tsx
    language-provider.tsx, language-switcher.tsx   # i18n FR/EN
    animate-in.tsx, section-heading.tsx, status-badge.tsx  # primitives partagées
lib/
  mock-data.ts          # données structurelles (statuts, ids, chiffres) — indépendantes de la langue
  translations.ts        # tous les textes FR/EN
  utils.ts               # helper cn()
```

## Identité visuelle

- **Couleur signature** : un violet vif (`--teal` dans `globals.css`, oklch hue 292) utilisé pour les accents, icônes et éléments interactifs — associé à un noir-encre profond (`--brand`, même famille de teinte) qui reprend la couleur du logo.
- **Typographie** : Hanken Grotesk pour les titres et le corps de texte (`--font-heading` / `--font-sans`).
- **Logo** : `public/logo.png` (wordmark complet) et `app/icon.png` / `app/favicon.ico` (mark carré généré à partir du logo).

Tous les tokens de couleur/statut (succès, alerte, danger, info) sont définis en OKLCH dans `app/globals.css` et exposés comme utilitaires Tailwind (`bg-teal`, `text-success`, etc.) via `@theme inline`.

## Internationalisation

Le français est la langue par défaut (`lib/translations.ts` → `defaultLocale`). Un sélecteur FR/EN dans la navbar bascule la langue côté client (`LanguageProvider`, persistée en `localStorage`). Toutes les chaînes de texte vivent dans `lib/translations.ts` ; `lib/mock-data.ts` ne contient que des données structurelles indépendantes de la langue (statuts, identifiants, horaires, numéros de téléphone).

## Notes

- C'est un projet Next.js 16 avec des changements de comportement par rapport aux versions précédentes (voir `node_modules/next/dist/docs/`, notamment `01-app/02-guides/upgrading/version-16.md`) — Turbopack par défaut, API async pour `params`/`searchParams`, et **`images.contentDispositionType` doit être `"inline"`** dans `next.config.ts` pour que les images optimisées s'affichent dans une balise `<img>` au lieu d'être téléchargées (comportement par défaut changé en v15+).
- Toutes les données du dashboard, les appels, les logos "clients" et les statistiques sont fictifs et clairement présentés comme tels.
