# Script d'installation de PHPMailer pour G.TRAVAUX
# Usage: .\install-phpmailer.ps1

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Installation de PHPMailer" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$apiDir = $PSScriptRoot
$vendorDir = Join-Path $apiDir "vendor"
$phpMailerDir = Join-Path $vendorDir "PHPMailer"

# Créer les dossiers
Write-Host "1. Création des dossiers..." -ForegroundColor Yellow
if (-not (Test-Path $vendorDir)) {
    New-Item -ItemType Directory -Path $vendorDir -Force | Out-Null
    Write-Host "   ✓ Dossier vendor/ créé" -ForegroundColor Green
}

if (-not (Test-Path $phpMailerDir)) {
    New-Item -ItemType Directory -Path $phpMailerDir -Force | Out-Null
    Write-Host "   ✓ Dossier vendor/PHPMailer/ créé" -ForegroundColor Green
}

# Télécharger PHPMailer
Write-Host ""
Write-Host "2. Téléchargement de PHPMailer..." -ForegroundColor Yellow

$phpMailerVersion = "6.9.1"
$downloadUrl = "https://github.com/PHPMailer/PHPMailer/archive/refs/tags/v$phpMailerVersion.zip"
$zipPath = Join-Path $apiDir "phpmailer.zip"
$extractPath = Join-Path $apiDir "phpmailer-temp"

try {
    # Télécharger
    Write-Host "   Téléchargement depuis GitHub..." -ForegroundColor Gray
    Invoke-WebRequest -Uri $downloadUrl -OutFile $zipPath -UseBasicParsing
    Write-Host "   ✓ Téléchargement terminé" -ForegroundColor Green

    # Extraire
    Write-Host "   Extraction..." -ForegroundColor Gray
    Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force
    
    # Copier les fichiers nécessaires
    $sourceDir = Join-Path $extractPath "PHPMailer-$phpMailerVersion\src"
    
    $files = @(
        "PHPMailer.php",
        "SMTP.php",
        "Exception.php"
    )
    
    foreach ($file in $files) {
        $sourcePath = Join-Path $sourceDir $file
        $destPath = Join-Path $phpMailerDir $file
        
        if (Test-Path $sourcePath) {
            Copy-Item -Path $sourcePath -Destination $destPath -Force
            Write-Host "   ✓ $file copié" -ForegroundColor Green
        } else {
            Write-Host "   ✗ $file non trouvé" -ForegroundColor Red
        }
    }
    
    # Nettoyer
    Write-Host ""
    Write-Host "3. Nettoyage..." -ForegroundColor Yellow
    Remove-Item -Path $zipPath -Force
    Remove-Item -Path $extractPath -Recurse -Force
    Write-Host "   ✓ Fichiers temporaires supprimés" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "==================================" -ForegroundColor Cyan
    Write-Host "✓ Installation terminée !" -ForegroundColor Green
    Write-Host "==================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Fichiers installés dans:" -ForegroundColor White
    Write-Host "  $phpMailerDir" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Prochaines étapes:" -ForegroundColor Yellow
    Write-Host "  1. Créez api/config.php depuis api/config.example.php" -ForegroundColor White
    Write-Host "  2. Remplissez les vraies valeurs SMTP" -ForegroundColor White
    Write-Host "  3. Testez les formulaires" -ForegroundColor White
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "✗ Erreur lors de l'installation:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Installation manuelle:" -ForegroundColor Yellow
    Write-Host "  1. Téléchargez: https://github.com/PHPMailer/PHPMailer/releases" -ForegroundColor White
    Write-Host "  2. Extrayez PHPMailer.php, SMTP.php, Exception.php" -ForegroundColor White
    Write-Host "  3. Copiez-les dans: $phpMailerDir" -ForegroundColor White
    Write-Host ""
}

# Vérifier l'installation
Write-Host "Vérification de l'installation:" -ForegroundColor Cyan
$requiredFiles = @("PHPMailer.php", "SMTP.php", "Exception.php")
$allPresent = $true

foreach ($file in $requiredFiles) {
    $filePath = Join-Path $phpMailerDir $file
    if (Test-Path $filePath) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file manquant" -ForegroundColor Red
        $allPresent = $false
    }
}

if ($allPresent) {
    Write-Host ""
    Write-Host "✓ Tous les fichiers sont présents !" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "✗ Installation incomplète" -ForegroundColor Red
}

Write-Host ""