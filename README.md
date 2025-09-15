# Сайт-рекомендация: Озвучка аниме и комиксов

Одностраничный статический сайт с встраиванием прайс-листа Google Docs и контактами Telegram.

## Структура
- `index.html` — разметка и метатеги
- `styles.css` — стили, адаптив
- `script.js` — копирование контакта в буфер обмена

## Локальный просмотр
Откройте файл `index.html` двойным кликом или запустите локальный сервер:

```powershell
cd site
npx --yes serve . -l 5173 --single
```

Если нет Node.js, просто откройте `index.html` в браузере.

## Ссылки источников
- Прайс: https://docs.google.com/document/d/1Rr2JAkLfa_4jp5sFiS-3MW0-m4kek0TtxO2WqOAYeaM/preview
- Прайс: https://docs.google.com/document/d/1Rr2JAkLfa_4jp5sFiS-3MW0-m4kek0TtxO2WqOAYeaM/edit
- Контакт: https://t.me/miveey17

## Деплой
Любой статический хостинг подойдёт (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Залейте содержимое папки `site/`.


