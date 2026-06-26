# dev.himachalgovt.com — mrlexcoder portfolio (Next.js)

Portfolio cloned from [mrlexcoder-portfolio](https://github.com/mrlexcoder/mrlexcoder-portfolio).

## Local development

```powershell
cd dev.himachalgovt
npm install
npm run dev
```

Open http://localhost:3000

Edit content in `src/data/resume.tsx` and `content/blog/`.

## Deploy to https://dev.himachalgovt.com

First time (DNS + subdomain + SSL + nginx):

```powershell
.\scripts\dev-himachalgovt-deploy.ps1 -SetupServer
```

Updates after local changes:

```powershell
.\scripts\dev-himachalgovt-deploy.ps1
```

## Server

| Item | Value |
|------|--------|
| URL | https://dev.himachalgovt.com |
| App path | `/opt/dev-himachalgovt-portfolio` |
| Docker port | `127.0.0.1:3095` → container `:3000` |
| GitHub | https://github.com/mrlexcoder/mrlexcoder-portfolio |

## Pull latest from GitHub

```powershell
cd dev.himachalgovt
git pull origin main
cd ..
.\scripts\dev-himachalgovt-deploy.ps1
```
