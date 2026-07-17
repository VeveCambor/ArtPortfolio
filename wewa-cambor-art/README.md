# Wewa Čambor Portfolio

Moderní tmavé portfolio ilustrací, volné tvorby a grafiky Wewy Čambor.
Projekt je postavený na Next.js, TypeScriptu a Tailwind CSS.

## Lokální spuštění

Instalace závislostí:

```bash
npm install
```

Spuštění vývojového serveru:

```bash
npm run dev
```

Web pak otevři na [http://localhost:3000](http://localhost:3000).

Hlavní obsah portfolia je v `src/app/page.tsx`, globální vzhled v
`src/app/globals.css` a metadata v `src/app/layout.tsx`.

## Obrázky a vodoznak

Originální obrázky patří do `public/artworks`. Web zobrazuje kopie s
vodoznakem ze složky `public/artworks-watermarked`.

Po přidání nebo výměně obrázků spusť:

```bash
npm run watermark
```

Script znovu vygeneruje vodoznakované kopie a originály ponechá beze změny.

## Nasazení na Vercel

Při importu repozitáře do Vercelu nastav:

- `Root Directory`: `wewa-cambor-art`
- `Framework Preset`: `Next.js`
- `Install Command`: `npm install`
- `Build Command`: `npm run build`
- `Output Directory`: ponechat prázdné, Vercel ho nastaví pro Next.js automaticky

Projekt nepoužívá žádné povinné environment variables.

## Scripts

- `npm run dev` spustí vývojový server.
- `npm run build` vytvoří produkční build.
- `npm run start` spustí produkční build lokálně.
- `npm run lint` spustí ESLint.
- `npm run watermark` vygeneruje kopie obrázků s vodoznakem.
