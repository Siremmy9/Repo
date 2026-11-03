# Texcel Schools frontend

The website now runs as a TypeScript, React, and Next.js frontend. Existing pages, styling, assets, and browser interactions are kept in place while they are hosted through Next.js routes. This lets the frontend be run independently from the existing backend.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Use Node.js 20.9 or later. Open [http://localhost:3000](http://localhost:3000). Use `npm run build` to create a production build and `npm start` to run it.

## Backend connection

Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` to your backend's public API origin. A typed request helper is available in `src/lib/api-client.ts`. Configure your backend to allow the frontend's origin through CORS. The backend endpoints and request/response types have intentionally not been assumed; share your API documentation to connect forms and admin features to the correct routes.

Until that contract is wired in, the existing forms and admin dashboard retain their original browser-local demo behavior. The admin login is not production authentication, and local browser data does not sync across devices.

## Existing content

- Public pages and administration pages retain their current URLs without the `.html` extension. Existing `.html` links redirect to the corresponding Next.js route.
- Website content is still sourced from the existing `public/js/config.js` and `public/js/content.js` files during this compatibility stage.
- Replace sample statistics, staff details, news, hours, and age ranges with confirmed school information.
- School locations and WhatsApp numbers are configured in `public/js/config.js`; leadership messages and portraits are configured in `public/js/content.js`.
- The website respects `prefers-reduced-motion`.
