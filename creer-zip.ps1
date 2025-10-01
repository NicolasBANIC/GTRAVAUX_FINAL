# Script PowerShell pour creer un ZIP du site pour Hostinger

Write-Host "========================================"
Write-Host "  Creation du ZIP pour Hostinger"
Write-Host "========================================"
Write-Host ""

# Chemins
$sourceFolder = "c:\Users\Banic\Downloads\g-travaux-v2\g-travaux_v2\out"
$destinationZip = "c:\Users\Banic\Downloads\site-gtravaux-deploiement.zip"

# Verifier que le dossier source existe
if (-Not (Test-Path $sourceFolder)) {
    Write-Host "ERREUR : Le dossier 'out' n'existe pas !"
    Write-Host "Veuillez d'abord executer : npm run build"
    exit 1
}

# Supprimer l'ancien ZIP s'il existe
if (Test-Path $destinationZip) {
    Write-Host "Suppression de l'ancien ZIP..."
    Remove-Item $destinationZip -Force
}

# Creer le ZIP
Write-Host "Creation du ZIP en cours..."
Write-Host "Source : $sourceFolder"
Write-Host "Destination : $destinationZip"
Write-Host ""

try {
    # Creer l'archive
    Compress-Archive -Path "$sourceFolder\*" -DestinationPath $destinationZip -Force
    
    # Verifier la taille
    $zipSize = (Get-Item $destinationZip).Length / 1MB
    $zipSizeFormatted = [math]::Round($zipSize, 2)
    
    Write-Host "ZIP cree avec succes !"
    Write-Host ""
    Write-Host "Informations :"
    Write-Host "Fichier : $destinationZip"
    Write-Host "Taille : $zipSizeFormatted MB"
    Write-Host ""
    Write-Host "Prochaines etapes :"
    Write-Host "1. Connectez-vous a votre hPanel Hostinger"
    Write-Host "2. Allez dans Fichiers -> Gestionnaire de fichiers"
    Write-Host "3. Naviguez vers /public_html/"
    Write-Host "4. Supprimez tous les anciens fichiers"
    Write-Host "5. Uploadez le fichier ZIP"
    Write-Host "6. Extrayez le ZIP dans /public_html/"
    Write-Host "7. Supprimez le fichier ZIP apres extraction"
    Write-Host ""
    Write-Host "Votre site sera accessible sur votre domaine !"
    Write-Host ""
    
    # Ouvrir l'explorateur Windows au dossier contenant le ZIP
    Write-Host "Ouverture de l'explorateur..."
    Start-Process "explorer.exe" -ArgumentList "/select,`"$destinationZip`""
    
} catch {
    Write-Host "ERREUR lors de la creation du ZIP !"
    Write-Host "Details : $($_.Exception.Message)"
    exit 1
}

Write-Host "========================================"
Write-Host "  Termine !"
Write-Host "========================================"