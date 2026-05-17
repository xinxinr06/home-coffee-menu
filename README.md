# Home Coffee Menu Quartz Site

This folder is a minimal publish-only wrapper for the Obsidian folder `Home Coffee Menu`.

It is intentionally separate from the Obsidian vault root so GitHub only receives the coffee menu notes, not private notes from the rest of the vault.

## What gets published

- `content/Home Coffee Menu/index.md`
- the 8 coffee notes in `content/Home Coffee Menu/`
- Quartz configuration files
- GitHub Pages workflow

## Files

- `.github/workflows/deploy.yml` builds and deploys the site with GitHub Actions.
- `quartz.config.ts` sets the title, locale, theme, plugins, and `baseUrl`.
- `quartz.layout.ts` keeps the page layout simple and mobile-friendly.
- `quartz/styles/custom.scss` adds small-screen reading polish.
- `scripts/sync-home-coffee.ps1` refreshes the publish copy from the live Obsidian folder.
- `scripts/preview.ps1` clones Quartz locally and serves a preview.

## First-time setup

1. Create an empty GitHub repository, for example `home-coffee-menu`.
2. In `quartz.config.ts`, replace:
   `YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME`
   with your real GitHub Pages URL, for example:
   `niuniu.github.io/home-coffee-menu`
3. Open PowerShell in this folder.
4. Run the deployment commands from the section below.
5. In GitHub, open repository `Settings` -> `Pages`.
6. Under `Build and deployment`, set `Source` to `GitHub Actions`.

## Local preview

Requires Git, Node 22, and npm.

```powershell
cd "C:\Users\Niuniu\Documents\ObsidianVault\quartz-home-coffee"
powershell -ExecutionPolicy Bypass -File .\scripts\preview.ps1
```

Then open `http://localhost:8080`.

## Sync content after editing in Obsidian

```powershell
cd "C:\Users\Niuniu\Documents\ObsidianVault\quartz-home-coffee"
powershell -ExecutionPolicy Bypass -File .\scripts\sync-home-coffee.ps1
```

## Deploy commands

Replace the GitHub URL with your repository URL.

```powershell
cd "C:\Users\Niuniu\Documents\ObsidianVault\quartz-home-coffee"
git init
git branch -M main
git add .
git commit -m "Publish Home Coffee Menu with Quartz"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

GitHub Actions will build Quartz and deploy the generated `public` folder to GitHub Pages.

## Notes

- Do not run `git init` in `C:\Users\Niuniu\Documents\ObsidianVault` unless you intend to publish the entire vault.
- Keep this repository rooted at `quartz-home-coffee`.
- The workflow builds from `content/Home Coffee Menu`, so the homepage is the menu folder's `index.md`.
- No login, comments, ordering system, database, or backend is included.
