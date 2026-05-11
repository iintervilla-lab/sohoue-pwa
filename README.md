# Sohoue PWA — Moisson d'Afrique 🌾

Application mobile-first de marché béninois : vivres, livres et services artisanaux.

Développée par **AIB Digital Plus**.

## 🚀 Déploiement rapide

### Prérequis
- Node.js 18+
- Un compte GitHub

### Installation locale
```bash
npm install
npm run dev
```

### Déploiement sur GitHub Pages (automatique)

1. Crée un dépôt GitHub nommé `sohoue-pwa`
2. Dans `vite.config.js`, vérifie que `base` correspond au nom du dépôt
3. Active GitHub Pages dans **Settings → Pages → Source : GitHub Actions**
4. Push le code → le déploiement se fait automatiquement

```bash
git init
git add .
git commit -m "Initial commit — Sohoue PWA"
git remote add origin https://github.com/TON_USERNAME/sohoue-pwa.git
git push -u origin main
```

Ton app sera disponible sur :
**https://TON_USERNAME.github.io/sohoue-pwa/**

## 🛠 Stack technique
- React 18
- Vite 5
- Lucide React (icônes)
- CSS-in-JS (styles inline)

## 📱 Sections
- **Sohoue Marché** — Produits vivriers & céréales
- **Sohoue Savoir** — Livres scolaires
- **Sohoue Services** — Artisans disponibles partout au Bénin
