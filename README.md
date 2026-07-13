# Terre & Tide

One-page React and Vite concept for a fictional Lisbon ceramic lighting studio. The generated transparent Maré pendant remains present through four full-height making chapters, while three original generated product cutouts carry the hero, collection, measurement, and commission sections.

## Run

```bash
npm install
npm run dev
```

Production check: `npm run build`.

## Notes

- Every product object, including the persistent scroll object, uses cutouts generated with the built-in OpenAI image workflow. They were converted from flat chroma key to alpha, edge-validated, and saved under `src/assets/generated/` with process notes.
- Scroll behavior is native. There is no scroll-jacking.
- Motion follows `prefers-reduced-motion`.
- Contact addresses use the reserved `.example` domain.
- Automated axe testing reports zero accessibility violations.
