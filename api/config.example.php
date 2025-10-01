<?php
/**
 * Configuration SMTP pour G.TRAVAUX - EXEMPLE
 * 
 * ⚠️ IMPORTANT: Ce fichier est un modèle.
 * 
 * Pour utiliser:
 * 1. Copiez ce fichier vers config.php
 * 2. Remplacez les placeholders par vos vraies valeurs
 * 3. config.php est ignoré par git (ne sera jamais commité)
 */

// SMTP Configuration
define('SMTP_HOST', 'smtp.hostinger.com');   // usually this host
define('SMTP_PORT', 465);                    // or 587
define('SMTP_SECURE', 'ssl');                // 'ssl' for 465, 'tls' for 587
define('SMTP_USER', 'info@gtravaux.fr');     // full email
define('SMTP_PASS', 'CHANGE_ME_LOCALLY');    // PLACEHOLDER ONLY (no real password)

// Email Configuration
define('MAIL_TO', 'info@gtravaux.fr');
define('MAIL_TO_NAME', 'G.TRAVAUX');
define('MAIL_FROM', 'info@gtravaux.fr');
define('MAIL_FROM_NAME', 'Site G.TRAVAUX');

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// CORS Configuration - Allow only your domain
$allowed_origins = [
    'https://votredomaine.fr',
    'https://www.votredomaine.fr',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}