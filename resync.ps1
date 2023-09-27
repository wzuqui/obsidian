$prompt = Read-Host -Prompt "Deseja puxar(p) ou enviar(e)?";

if ($prompt -eq "p") {
  Copy-Item -Force -Recurse "$($env:USERPROFILE)\iCloudDrive\iCloud~md~obsidian\docs" ".\";
}
if ($prompt -eq "e") {
  Copy-Item -Force -Recurse ".\docs" "$($env:USERPROFILE)\iCloudDrive\iCloud~md~obsidian\";
}