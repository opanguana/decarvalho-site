# Contributing

## Commit standard
This repository uses Conventional Commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `refactor:` internal change without behavior change
- `test:` test-related changes
- `chore:` tooling/build/maintenance

Format:

```text
type(scope): short summary
```

Examples:

- `feat(seo): add social metadata for company pages`
- `fix(forms): validate required hubspot fields`
- `chore(ci): run smoke checks on pull requests`

## Branching
- Create branches from `main`.
- Keep commits focused (one concern per commit).
- Open PR with test evidence (`npm run verify`).

## Pull request checklist
- [ ] Branch is up to date with `main`
- [ ] `npm run format:check`
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `CHANGELOG.md` updated when user-facing behavior changes
