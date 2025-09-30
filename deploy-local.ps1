# Script de déploiement local vers Hostinger
# Usage: .\deploy-local.ps1

Write-Host "🚀 Déploiement vers Hostinger" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si les variables d'environnement sont définies
if (-not $env:SFTP_HOST) {
    Write-Host "❌ Erreur: Les variables d'environnement SFTP ne sont pas définies" -ForegroundColor Red
    Write-Host ""
    Write-Host "Veuillez créer un fichier .env.local avec:" -ForegroundColor Yellow
    Write-Host "SFTP_HOST=votre_hote" -ForegroundColor Yellow
    Write-Host "SFTP_USERNAME=votre_username" -ForegroundColor Yellow
    Write-Host "SFTP_PASSWORD=votre_password" -ForegroundColor Yellow
    Write-Host "SFTP_PORT=22" -ForegroundColor Yellow
    Write-Host "SFTP_REMOTE_DIR=/public_html" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Ou utilisez GitHub Actions pour le déploiement automatique" -ForegroundColor Green
    exit 1
}

# Étape 1: Build
Write-Host "📦 Étape 1/3: Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Étape 2: Vérification des fichiers
Write-Host "🔍 Étape 2/3: Vérification des fichiers..." -ForegroundColor Yellow

if (-not (Test-Path "out\index.html")) {
    Write-Host "❌ Erreur: Le fichier out\index.html n'existe pas" -ForegroundColor Red
    exit 1
}

$fileCount = (Get-ChildItem -Path "out" -Recurse -File).Count
Write-Host "✅ $fileCount fichiers prêts pour le déploiement" -ForegroundColor Green
Write-Host ""

# Étape 3: Upload via SFTP
Write-Host "📤 Étape 3/3: Upload vers Hostinger..." -ForegroundColor Yellow
Write-Host "⚠️  Cette fonctionnalité nécessite WinSCP ou un client SFTP" -ForegroundColor Yellow
Write-Host ""
Write-Host "Options de déploiement:" -ForegroundColor Cyan
Write-Host "1. Utilisez GitHub Actions (recommandé)" -ForegroundColor Green
Write-Host "   - Poussez votre code: git push origin main" -ForegroundColor White
Write-Host ""
Write-Host "2. Utilisez FileZilla ou WinSCP manuellement" -ForegroundColor Green
Write-Host "   - Hôte: $env:SFTP_HOST" -ForegroundColor White
Write-Host "   - Port: $env:SFTP_PORT" -ForegroundColor White
Write-Host "   - Dossier local: $(Get-Location)\out" -ForegroundColor White
Write-Host "   - Dossier distant: $env:SFTP_REMOTE_DIR" -ForegroundColor White
Write-Host ""
Write-Host "3. Utilisez le Gestionnaire de fichiers Hostinger" -ForegroundColor Green
Write-Host "   - Compressez le dossier 'out' en ZIP" -ForegroundColor White
Write-Host "   - Uploadez via hPanel > Gestionnaire de fichiers" -ForegroundColor White
Write-Host "   - Décompressez dans /public_html" -ForegroundColor White
Write-Host ""

Write-Host "✅ Build terminé avec succès!" -ForegroundColor Green
Write-Host "📁 Fichiers prêts dans: $(Get-Location)\out" -ForegroundColor Cyan