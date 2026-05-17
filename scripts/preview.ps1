$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$project = Split-Path -Parent $scriptDir
$quartzDir = Join-Path $project ".quartz"

& (Join-Path $scriptDir "sync-home-coffee.ps1")

if (!(Test-Path $quartzDir)) {
  git clone --branch v4 --depth 1 https://github.com/jackyzha0/quartz.git $quartzDir
}

Copy-Item -Force -LiteralPath (Join-Path $project "quartz.config.ts") -Destination (Join-Path $quartzDir "quartz.config.ts")
Copy-Item -Force -LiteralPath (Join-Path $project "quartz.layout.ts") -Destination (Join-Path $quartzDir "quartz.layout.ts")
Copy-Item -Force -LiteralPath (Join-Path $project "quartz\styles\custom.scss") -Destination (Join-Path $quartzDir "quartz\styles\custom.scss")

Push-Location $quartzDir
try {
  npm ci
  npx quartz build -d "../content/Home Coffee Menu" --serve
} finally {
  Pop-Location
}
