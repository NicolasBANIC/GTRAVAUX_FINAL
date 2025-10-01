<?php
/**
 * API Endpoint: Formulaire de rappel (Callback)
 * 
 * Traite les demandes de rappel depuis le formulaire homepage
 * - Validation des données
 * - Protection honeypot anti-spam
 * - Vérification RGPD (consentement obligatoire)
 * - Envoi email via PHPMailer SMTP
 */

// Charger la configuration (contient les secrets SMTP)
$config_path = __DIR__ . '/config.php';
if (!file_exists($config_path)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'ok' => false,
        'error' => 'Configuration manquante. Veuillez créer api/config.php depuis api/config.example.php'
    ]);
    exit;
}
require_once $config_path;

// Charger PHPMailer
require_once __DIR__ . '/vendor/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/vendor/PHPMailer/SMTP.php';
require_once __DIR__ . '/vendor/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Accepter uniquement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['ok' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

// Fonction de nettoyage des données
function sanitize_input($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

// Récupération et nettoyage des données
$nom = sanitize_input($_POST['nom'] ?? '');
$telephone = sanitize_input($_POST['telephone'] ?? '');
$email = sanitize_input($_POST['email'] ?? ''); // Optionnel pour ce formulaire
$message = sanitize_input($_POST['message'] ?? ''); // Optionnel
$preferredDate = sanitize_input($_POST['preferredDate'] ?? '');
$timeSlot = sanitize_input($_POST['timeSlot'] ?? '');
$consent = isset($_POST['consent']) && $_POST['consent'] === '1';
$honeypot = $_POST['_gotcha'] ?? '';

// Protection honeypot (anti-spam)
if (!empty($honeypot)) {
    // Bot détecté, on retourne un succès factice
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode(['ok' => true]);
    exit;
}

// Validation des champs obligatoires
$errors = [];

if (empty($nom)) {
    $errors[] = 'Le nom est obligatoire';
}

if (empty($telephone)) {
    $errors[] = 'Le téléphone est obligatoire';
}

if (empty($preferredDate)) {
    $errors[] = 'La date souhaitée est obligatoire';
}

if (empty($timeSlot)) {
    $errors[] = 'Le créneau horaire est obligatoire';
}

if (!$consent) {
    $errors[] = 'Vous devez accepter la politique de confidentialité';
}

// Si erreurs de validation
if (!empty($errors)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode([
        'ok' => false,
        'error' => implode(', ', $errors)
    ]);
    exit;
}

// Formater la date pour l'affichage
$dateFormatted = '';
try {
    $dateObj = new DateTime($preferredDate);
    $dateFormatted = $dateObj->format('d/m/Y');
} catch (Exception $e) {
    $dateFormatted = $preferredDate;
}

// Préparer l'email
$mail = new PHPMailer(true);

try {
    // Configuration SMTP
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port = SMTP_PORT;
    $mail->CharSet = 'UTF-8';

    // Expéditeur et destinataire
    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
    $mail->addAddress(MAIL_TO, MAIL_TO_NAME);
    $mail->addReplyTo($email ?: MAIL_FROM, $nom);

    // Contenu de l'email
    $mail->isHTML(true);
    $mail->Subject = '🔔 Nouvelle demande de rappel - G.TRAVAUX';
    
    // Corps HTML
    $mail->Body = "
    <!DOCTYPE html>
    <html lang='fr'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #E86810 0%, #D55A0A 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #E86810; border-radius: 4px; }
            .field-label { font-weight: bold; color: #E86810; margin-bottom: 5px; }
            .field-value { color: #333; font-size: 16px; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
            .highlight { background: #FFF3E0; padding: 15px; border-radius: 4px; margin: 20px 0; border: 2px solid #E86810; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>🔔 Nouvelle demande de rappel</h1>
            </div>
            <div class='content'>
                <div class='highlight'>
                    <strong>⏰ Rappel demandé pour :</strong><br>
                    <span style='font-size: 18px; color: #E86810;'><strong>{$dateFormatted}</strong> - {$timeSlot}</span>
                </div>
                
                <div class='field'>
                    <div class='field-label'>👤 Nom</div>
                    <div class='field-value'>{$nom}</div>
                </div>
                
                <div class='field'>
                    <div class='field-label'>📞 Téléphone</div>
                    <div class='field-value'><a href='tel:{$telephone}'>{$telephone}</a></div>
                </div>
                
                " . (!empty($email) ? "
                <div class='field'>
                    <div class='field-label'>📧 Email</div>
                    <div class='field-value'><a href='mailto:{$email}'>{$email}</a></div>
                </div>
                " : "") . "
                
                " . (!empty($message) ? "
                <div class='field'>
                    <div class='field-label'>💬 Message</div>
                    <div class='field-value'>{$message}</div>
                </div>
                " : "") . "
                
                <div class='field'>
                    <div class='field-label'>✅ Consentement RGPD</div>
                    <div class='field-value'>Accepté</div>
                </div>
            </div>
            <div class='footer'>
                <p>Email envoyé automatiquement depuis le formulaire de rappel G.TRAVAUX</p>
                <p>Date de réception : " . date('d/m/Y à H:i') . "</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Version texte brut (fallback)
    $mail->AltBody = "
    NOUVELLE DEMANDE DE RAPPEL - G.TRAVAUX
    
    Rappel demandé pour : {$dateFormatted} - {$timeSlot}
    
    Nom : {$nom}
    Téléphone : {$telephone}
    " . (!empty($email) ? "Email : {$email}\n" : "") . "
    " . (!empty($message) ? "Message : {$message}\n" : "") . "
    
    Consentement RGPD : Accepté
    Date de réception : " . date('d/m/Y à H:i') . "
    ";

    // Envoi
    $mail->send();
    
    // Succès
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode(['ok' => true]);

} catch (Exception $e) {
    // Erreur d'envoi
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'ok' => false,
        'error' => 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.'
    ]);
    
    // Log l'erreur (optionnel, pour debug)
    error_log("PHPMailer Error: {$mail->ErrorInfo}");
}