# Escape the System

Ett escape room-spel byggt med React, TypeScript, React Router och Context.

## Funktioner

- Startsida med introduktion
- Navigation till alla rum
- Dynamisk route: `/room/:roomPath`
- En gemensam rum-komponent för alla rum
- Inventory hanteras med Context
- Spelaren startar med UV Light
- Rätt föremål löser rätt rum
- Lösta rum visar ny bild och ny instruktion
- Lösta rum härleds från inventory
- Exit Node använder lokal state eftersom den inte ger något nytt föremål
- useNavigate används för vinstskärmen
- Ogiltiga routes omdirigeras
- useSearchParams används för ledtrådar via `?hint=true`

## Starta projektet

```bash
npm install
npm run dev