# Terre & Tide

One-page React and Vite concept for a fictional Lisbon ceramic lighting studio. A custom sculptural SVG lamp remains present through four full-height making chapters, while three original generated transparent product cutouts carry the hero, collection, measurement, and commission sections.

## Run

```bash
npm install
npm run dev
```

Production check: `npm run build`.

## Notes

- The scroll object is an original inline SVG with procedural texture.
- The product cutouts were generated with the built-in OpenAI image workflow, converted from flat chroma key to alpha, edge-validated, and saved under `src/assets/generated/` with process notes.
- Scroll behavior is native. There is no scroll-jacking.
- Motion follows `prefers-reduced-motion`.
- Contact addresses use the reserved `.example` domain.
- Automated axe testing reports zero accessibility violations.
