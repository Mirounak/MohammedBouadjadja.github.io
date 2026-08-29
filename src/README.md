# Project Structure (Phase 1 Foundation)

- `assets/` → Public frontend assets currently used by the landing page.
- `data/mock/` → Mock/demo data for local UI demonstration only.
- `src/frontend/` → Reusable frontend components/pages for later phased migration.
- `src/backend/` → Real backend services (to be implemented in Phase 3).
- `src/integrations/` → Third-party integration modules (Chargily/AI) with env-based credentials.
- `src/shared/` → Shared TypeScript models and utilities.

## Boundaries

- Frontend prototype: `index.html` + `assets/*`.
- Mock data only: `data/mock/*`.
- Real APIs: not implemented yet.
- External integrations requiring secrets: structure only, no real credentials committed.
