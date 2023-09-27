$prompt = Read-Host -Prompt "Deseja puxar(p) ou enviar(e)?";
$iCloud = "$($env:USERPROFILE)\iCloudDrive\iCloud~md~obsidian\docs";

if ($prompt -eq "p") {
  Copy-Item -Force -Recurse "$iCloud" ".";
}
if ($prompt -eq "e") {
  Copy-Item -Force -Recurse ".\docs" "$iCloud";
}