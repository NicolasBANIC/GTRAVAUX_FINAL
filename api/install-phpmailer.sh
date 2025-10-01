#!/bin/bash
# Script d'installation de PHPMailer pour G.TRAVAUX
# Usage: ./install-phpmailer.sh

set -e

echo "=================================="
echo "Installation de PHPMailer"
echo "=================================="
echo ""

API_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENDOR_DIR="$API_DIR/vendor"
PHPMAILER_DIR="$VENDOR_DIR/PHPMailer"

# Créer les dossiers
echo "1. Création des dossiers..."
mkdir -p "$PHPMAILER_DIR"
echo "   ✓ Dossier vendor/PHPMailer/ créé"

# Télécharger PHPMailer
echo ""
echo "2. Téléchargement de PHPMailer..."

PHPMAILER_VERSION="6.9.1"
DOWNLOAD_URL="https://github.com/PHPMailer/PHPMailer/archive/refs/tags/v$PHPMAILER_VERSION.zip"
ZIP_PATH="$API_DIR/phpmailer.zip"
EXTRACT_PATH="$API_DIR/phpmailer-temp"

# Télécharger
echo "   Téléchargement depuis GitHub..."
if command -v curl &> /dev/null; then
    curl -L -o "$ZIP_PATH" "$DOWNLOAD_URL"
elif command -v wget &> /dev/null; then
    wget -O "$ZIP_PATH" "$DOWNLOAD_URL"
else
    echo "   ✗ curl ou wget requis pour télécharger"
    exit 1
fi
echo "   ✓ Téléchargement terminé"

# Extraire
echo "   Extraction..."
unzip -q "$ZIP_PATH" -d "$EXTRACT_PATH"

# Copier les fichiers nécessaires
SOURCE_DIR="$EXTRACT_PATH/PHPMailer-$PHPMAILER_VERSION/src"

FILES=("PHPMailer.php" "SMTP.php" "Exception.php")

for file in "${FILES[@]}"; do
    SOURCE_PATH="$SOURCE_DIR/$file"
    DEST_PATH="$PHPMAILER_DIR/$file"
    
    if [ -f "$SOURCE_PATH" ]; then
        cp "$SOURCE_PATH" "$DEST_PATH"
        echo "   ✓ $file copié"
    else
        echo "   ✗ $file non trouvé"
    fi
done

# Nettoyer
echo ""
echo "3. Nettoyage..."
rm -f "$ZIP_PATH"
rm -rf "$EXTRACT_PATH"
echo "   ✓ Fichiers temporaires supprimés"

echo ""
echo "=================================="
echo "✓ Installation terminée !"
echo "=================================="
echo ""
echo "Fichiers installés dans:"
echo "  $PHPMAILER_DIR"
echo ""
echo "Prochaines étapes:"
echo "  1. Créez api/config.php depuis api/config.example.php"
echo "  2. Remplissez les vraies valeurs SMTP"
echo "  3. Testez les formulaires"
echo ""

# Vérifier l'installation
echo "Vérification de l'installation:"
ALL_PRESENT=true

for file in "${FILES[@]}"; do
    FILE_PATH="$PHPMAILER_DIR/$file"
    if [ -f "$FILE_PATH" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file manquant"
        ALL_PRESENT=false
    fi
done

if [ "$ALL_PRESENT" = true ]; then
    echo ""
    echo "✓ Tous les fichiers sont présents !"
else
    echo ""
    echo "✗ Installation incomplète"
    exit 1
fi

echo ""