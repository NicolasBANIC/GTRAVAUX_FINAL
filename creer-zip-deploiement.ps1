# Script PowerShell pour créer un ZIP du site pour Hostinger
# Usage : .\creer-zip-deploiement.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Création du ZIP pour Hostinger" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Chemins
$sourceFolder = "c:\Users\Banic\Downloads\g-travaux-v2\g-travaux_v2\out"
$destinationZip = "c:\Users\Banic\Downloads\site-gtravaux-deploiement.zip"

# Vérifier que le dossier source existe
if (-Not (Test-Path $sourceFolder)) {
    Write-Host "❌ ERREUR : Le dossier 'out' n'existe pas !" -ForegroundColor Red
    Write-Host "   Veuillez d'abord exécuter : npm run build" -ForegroundColor Yellow
    exit 1
}

# Supprimer l'ancien ZIP s'il existe
if (Test-Path $destinationZip) {
    Write-Host "🗑️  Suppression de l'ancien ZIP..." -ForegroundColor Yellow
    Remove-Item $destinationZip -Force
}

# Créer le ZIP
Write-Host "📦 Création du ZIP en cours..." -ForegroundColor Green
Write-Host "   Source : $sourceFolder" -ForegroundColor Gray
Write-Host "   Destination : $destinationZip" -ForegroundColor Gray
Write-Host ""

try {
    # Créer l'archive
    Compress-Archive -Path "$sourceFolder\*" -DestinationPath $destinationZip -Force
    
    # Vérifier la taille
    $zipSize = (Get-Item $destinationZip).Length / 1MB
    $zipSizeFormatted = [math]::Round($zipSize, 2)
    
    Write-Host "✅ ZIP créé avec succès !" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 Informations :" -ForegroundColor Cyan
    Write-Host "   Fichier : $destinationZip" -ForegroundColor White
    Write-Host "   Taille : $zipSizeFormatted MB" -ForegroundColor White
    Write-Host ""
    Write-Host "📋 Prochaines étapes :" -ForegroundColor Yellow
    Write-Host "   1. Connectez-vous à votre hPanel Hostinger" -ForegroundColor White
    Write-Host "   2. Allez dans Fichiers → Gestionnaire de fichiers" -ForegroundColor White
    Write-Host "   3. Naviguez vers /public_html/" -ForegroundColor White
    Write-Host "   4. Supprimez tous les anciens fichiers" -ForegroundColor White
    Write-Host "   5. Uploadez le fichier ZIP" -ForegroundColor White
    Write-Host "   6. Extrayez le ZIP dans /public_html/" -ForegroundColor White
    Write-Host "   7. Supprimez le fichier ZIP après extraction" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Votre site sera accessible sur votre domaine !" -ForegroundColor Green
    Write-Host ""
    
    # Ouvrir l'explorateur Windows au dossier contenant le ZIP
    Write-Host "📂 Ouverture de l'explorateur..." -ForegroundColor Cyan
    Start-Process "explorer.exe" -ArgumentList "/select,`"$destinationZip`""
    
} catch {
    Write-Host "❌ ERREUR lors de la création du ZIP !" -ForegroundColor Red
    Write-Host "   Détails : $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Terminé !" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan