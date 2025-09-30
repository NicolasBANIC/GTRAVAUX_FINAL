# Script pour ouvrir les guides de déploiement
# Usage: .\ouvrir-guides.ps1

param(
    [Parameter(Position=0)]
    [ValidateSet("start", "quick", "checklist", "complet", "resume", "tous")]
    [string]$Guide = "start"
)

$rootPath = $PSScriptRoot

function Open-Guide {
    param([string]$FileName)
    $filePath = Join-Path $rootPath $FileName
    if (Test-Path $filePath) {
        Write-Host "📖 Ouverture de $FileName..." -ForegroundColor Cyan
        Start-Process $filePath
    } else {
        Write-Host "❌ Fichier non trouvé : $FileName" -ForegroundColor Red
    }
}

Write-Host "`n╔══════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          📚 GUIDES DE DEPLOIEMENT HOSTINGER 📚              ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

switch ($Guide) {
    "start" {
        Write-Host "🏠 Ouverture du guide de démarrage..." -ForegroundColor Green
        Open-Guide "START_HERE.md"
    }
    "quick" {
        Write-Host "🏃 Ouverture du Quick Start (5 min)..." -ForegroundColor Green
        Open-Guide "QUICK_START_HOSTINGER.md"
    }
    "checklist" {
        Write-Host "📋 Ouverture de la Checklist..." -ForegroundColor Green
        Open-Guide "CHECKLIST_DEPLOIEMENT.md"
    }
    "complet" {
        Write-Host "📚 Ouverture du Guide Complet..." -ForegroundColor Green
        Open-Guide "DEPLOIEMENT_HOSTINGER.md"
    }
    "resume" {
        Write-Host "📦 Ouverture du Résumé de Configuration..." -ForegroundColor Green
        Open-Guide "RESUME_CONFIGURATION.md"
    }
    "tous" {
        Write-Host "📚 Ouverture de tous les guides..." -ForegroundColor Green
        Open-Guide "START_HERE.md"
        Start-Sleep -Seconds 1
        Open-Guide "QUICK_START_HOSTINGER.md"
        Start-Sleep -Seconds 1
        Open-Guide "CHECKLIST_DEPLOIEMENT.md"
        Start-Sleep -Seconds 1
        Open-Guide "DEPLOIEMENT_HOSTINGER.md"
        Start-Sleep -Seconds 1
        Open-Guide "RESUME_CONFIGURATION.md"
    }
}

Write-Host "`n✅ Terminé !`n" -ForegroundColor Green

Write-Host "💡 Autres commandes disponibles :" -ForegroundColor Yellow
Write-Host "   .\ouvrir-guides.ps1 start      # Guide de démarrage (défaut)" -ForegroundColor White
Write-Host "   .\ouvrir-guides.ps1 quick      # Quick Start (5 min)" -ForegroundColor White
Write-Host "   .\ouvrir-guides.ps1 checklist  # Checklist détaillée" -ForegroundColor White
Write-Host "   .\ouvrir-guides.ps1 complet    # Guide complet" -ForegroundColor White
Write-Host "   .\ouvrir-guides.ps1 resume     # Résumé technique" -ForegroundColor White
Write-Host "   .\ouvrir-guides.ps1 tous       # Ouvrir tous les guides" -ForegroundColor White
Write-Host "`n"