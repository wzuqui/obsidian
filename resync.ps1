$prompt = Read-Host -Prompt "Deseja puxar(p) ou enviar(e)?";

Set-Location -Path ".\docs";


if ($prompt -eq "e") {
  Copy-Item -Force -Recurse ".\" "$($env:USERPROFILE)\iCloudDrive\iCloud~md~obsidian\";
}

if ($prompt -eq "p") {
  Copy-Item -Force -Recurse "$($env:USERPROFILE)\iCloudDrive\iCloud~md~obsidian\docs" "..\";
}

Set-Location -Path "..";