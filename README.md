# DeCarvalho (Next.js App Router)

Production-ready, SSG-first Next.js App Router site for a holding company with two sub-brands.

## Quickstart

```bash
# choose one
pnpm install
# or
npm install

pnpm dev
# or
npm run dev
```

Open http://localhost:3000

## Dev workflow

### Run locally

```bash
nvm use
npm install
npm run dev
```

### Quality checks

```bash
# lint + types
npm run test:smoke

# full local verification
npm run verify
```

### Dependency lockfile policy

- Commit `package-lock.json` for reproducible CI/CD installs.
- Use `npm ci` in CI when lockfile is present.
- When dependencies change, run `npm install` locally and commit updated lockfile.

### Build for production

```bash
npm run build
npm run start
```

### Branch and PR flow

```bash
# update from main branch
git checkout main
git pull --ff-only

# create feature/chore branch
git checkout -b chore/short-description
```

1. Make small, focused commits using Conventional Commit messages.
2. Push branch and open a PR.
3. Require CI green status before merge.
4. Merge with squash or rebase (team standard), then delete merged branch.
5. Secret scanning runs in CI on pull requests and `main` pushes.

### Release tags

```bash
# after merging release-ready changes
git checkout main
git pull --ff-only
git tag -a v1.0.0 -m "release: v1.0.0"
git push origin v1.0.0
```

### Rollback

```bash
# rollback one bad commit in shared history
git revert <commit-sha>
git push origin <branch>
```

```bash
# rollback to previous release state
git checkout <branch>
git revert <first-bad-commit>^..<last-bad-commit>
git push origin <branch>
```

```bash
# remove mistaken local tag and recreate correctly
git tag -d v1.0.0
git tag -a v1.0.0 -m "release: v1.0.0"
```

## Configure placeholders

Edit `/content/site.json`:
- `baseUrl` (canonical URLs + sitemap)
- `hubspot.portalId` and `hubspot.formGuid`

## Notes
- Static by default (local JSON content)
- No client components
- No API routes (sitemap/robots use App Router metadata routes)
