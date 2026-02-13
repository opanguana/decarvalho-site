# Releasing

## Versioning standard
- Semantic Versioning (`MAJOR.MINOR.PATCH`):
  - `MAJOR`: breaking changes
  - `MINOR`: backward-compatible features
  - `PATCH`: backward-compatible fixes

## Release steps
1. Ensure `main` is green in CI.
2. Update `CHANGELOG.md` under `Unreleased`.
3. Determine next SemVer version.
4. Commit changelog and release prep.
5. Create annotated tag:

```bash
git checkout main
git pull --ff-only
git tag -a vX.Y.Z -m "release: vX.Y.Z"
git push origin main --tags
```

## Rolling back a bad commit
Use `git revert` (do not rewrite shared history):

```bash
git revert <commit-sha>
git push origin main
```

For a range:

```bash
git revert <oldest-bad-sha>^..<newest-bad-sha>
git push origin main
```

## Rolling back a bad release tag
1. Revert the offending commit(s) on `main`.
2. Publish a new patch release tag (recommended):

```bash
git tag -a vX.Y.(Z+1) -m "release: rollback for vX.Y.Z"
git push origin vX.Y.(Z+1)
```

If the previous tag was created by mistake and not consumed, delete and recreate:

```bash
git tag -d vX.Y.Z
git push origin :refs/tags/vX.Y.Z
```
