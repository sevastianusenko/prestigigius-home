# Prestigious Home Improvements — правила проекта

Сайт для Prestigious Home Improvements, Inc. (Port Charlotte, FL, лицензия CRC1327831) —
полносервисная реновация и реставрация домов в Southwest Florida, не только окна и двери.

## Где что лежит

- `BRIEF.md` — контракт: дизайн-токены, API компонентов, модули контента, маршруты. Любое
  изменение структуры сначала вносится туда.
- `src/content/**` — весь контент как типизированные данные (`types.ts`), без JSX.
  Факты компании — только `src/content/site.ts` (проверены по Sunbiz/DBPR/BBB 20.10.2026).
- `src/components/**` — UI; `src/app/**` — страницы App Router (Next 16, Tailwind v4).
- `prestigious-home-improvements-research.md` — досье по компании.
- `ca-competitors-semantic-core.md`, `keywords-core.csv`, `keywords-autocomplete-raw.csv` —
  семантика и данные DataForSEO.

## Правила

- Референс структуры — hybridrenovations.com. Тексты и фото оригинала не копировать.
- Фото: пока клиент не прислал свои, используются Unsplash/Pexels (`src/content/photos.ts`,
  проекты помечены `sample: true`). При получении фото клиента заменять по категориям, не
  переписывая страницы.
- Все цены на страницах услуг — ориентировочные диапазоны SWFL 2026; при правках держать их
  реалистичными и помечать как «from / typical».
- Не вписывать секреты в репозиторий: форма использует `RESEND_API_KEY` из окружения,
  DataForSEO — переменные `DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD` (см. `.mcp.json`).
- Сборка обязана проходить: `npm run build` без ошибок TypeScript.
