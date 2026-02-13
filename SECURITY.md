# Security and Secrets Guidance

## Secrets policy
- Never commit `.env` files or production credentials.
- Keep local secrets in `.env.local` (already ignored by `.gitignore`).
- Commit only placeholders in `.env.example`.

## Pre-commit secret scanning
Use one of these tools locally before push:

```bash
# gitleaks (recommended)
gitleaks detect --source .
```

```bash
# git-secrets alternative
git secrets --scan
```

## Dependency hygiene
- Run `npm audit` regularly.
- Prefer patch/minor updates and validate with `npm run verify`.
- Track updates via Dependabot (configured in `.github/dependabot.yml`).

## Backups for critical config
- Keep `.env.example` updated with required keys.
- Store real secrets in a secure secret manager (for example, GitHub Actions Secrets, 1Password, Vault).
- Tag stable releases with `vX.Y.Z` so infrastructure can be redeployed to a known state.

## Incident rollback baseline
1. Revert offending commit(s) with `git revert`.
2. Trigger CI and redeploy from `main`.
3. If release is affected, issue a new patch tag and update `CHANGELOG.md`.
