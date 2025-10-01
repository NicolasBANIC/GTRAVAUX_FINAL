<?php
/**
 * API Endpoint: Formulaire de devis/contact
 * 
 * Traite les demandes de devis depuis la page contact
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
$email = sanitize_input($_POST['email'] ?? '');
$telephone = sanitize_input($_POST['telephone'] ?? '');
$service = sanitize_input($_POST['service'] ?? '');
$budget = sanitize_input($_POST['budget'] ?? ''); // Optionnel
$message = sanitize_input($_POST['message'] ?? '');
$projection_3d = isset($_POST['projection_3d']) && $_POST['projection_3d'] === '1';
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

if (empty($email)) {
    $errors[] = 'L\'email est obligatoire';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'L\'email n\'est pas valide';
}

if (empty($message)) {
    $errors[] = 'Le message est obligatoire';
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
    $mail->addReplyTo($email, $nom);

    // Contenu de l'email
    $mail->isHTML(true);
    $mail->Subject = '📋 Nouvelle demande de devis - G.TRAVAUX';
    
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
            .message-box { background: #FFF3E0; padding: 20px; border-radius: 4px; margin: 20px 0; border: 2px solid #E86810; }
            .badge { display: inline-block; background: #4CAF50; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; margin-top: 10px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>📋 Nouvelle demande de devis</h1>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='field-label'>👤 Nom</div>
                    <div class='field-value'>{$nom}</div>
                </div>
                
                <div class='field'>
                    <div class='field-label'>📧 Email</div>
                    <div class='field-value'><a href='mailto:{$email}'>{$email}</a></div>
                </div>
                
                " . (!empty($telephone) ? "
                <div class='field'>
                    <div class='field-label'>📞 Téléphone</div>
                    <div class='field-value'><a href='tel:{$telephone}'>{$telephone}</a></div>
                </div>
                " : "") . "
                
                " . (!empty($service) ? "
                <div class='field'>
                    <div class='field-label'>🔧 Service souhaité</div>
                    <div class='field-value'>{$service}</div>
                </div>
                " : "") . "
                
                " . (!empty($budget) ? "
                <div class='field'>
                    <div class='field-label'>💰 Budget</div>
                    <div class='field-value'>{$budget}</div>
                </div>
                " : "") . "
                
                <div class='message-box'>
                    <div class='field-label'>💬 Message</div>
                    <div class='field-value'>" . nl2br($message) . "</div>
                </div>
                
                " . ($projection_3d ? "
                <div class='field'>
                    <div class='field-label'>🎨 Projection 3D</div>
                    <div class='field-value'>
                        <span class='badge'>✓ Demandée</span>
                        <p style='margin-top: 10px; font-size: 14px; color: #666;'>Le client souhaite une projection 3D de son projet (nécessite l'envoi de plans)</p>
                    </div>
                </div>
                " : "") . "
                
                <div class='field'>
                    <div class='field-label'>✅ Consentement RGPD</div>
                    <div class='field-value'>Accepté</div>
                </div>
            </div>
            <div class='footer'>
                <p>Email envoyé automatiquement depuis le formulaire de contact G.TRAVAUX</p>
                <p>Date de réception : " . date('d/m/Y à H:i') . "</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Version texte brut (fallback)
    $mail->AltBody = "
    NOUVELLE DEMANDE DE DEVIS - G.TRAVAUX
    
    Nom : {$nom}
    Email : {$email}
    " . (!empty($telephone) ? "Téléphone : {$telephone}\n" : "") . "
    " . (!empty($service) ? "Service : {$service}\n" : "") . "
    " . (!empty($budget) ? "Budget : {$budget}\n" : "") . "
    
    Message :
    {$message}
    
    " . ($projection_3d ? "Projection 3D : Demandée\n" : "") . "
    
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