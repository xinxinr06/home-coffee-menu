$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$project = Split-Path -Parent $scriptDir
$vault = Split-Path -Parent $project
$source = Join-Path $vault "Home Coffee Menu"
$dest = Join-Path $project "content\Home Coffee Menu"

if (!(Test-Path $source)) {
  throw "Cannot find source folder: $source"
}

if (Test-Path $dest) {
  Remove-Item -Recurse -Force -LiteralPath $dest
}

Copy-Item -Recurse -LiteralPath $source -Destination $dest
Write-Host "Synced Home Coffee Menu into Quartz content."
