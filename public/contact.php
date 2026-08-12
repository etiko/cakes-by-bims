<?php
/**
 * Contact form handler for CakesbyBIMS.
 *
 * Runs on the PHP-capable shared/cPanel host alongside the static Next.js
 * export (the form POSTs to /contact.php). Sends enquiries via PHP's
 * built-in mail() function, which cPanel hosts wire up out of the box.
 *
 * Keep RECIPIENT_EMAIL in sync with `email` in src/lib/site-config.ts.
 */

declare(strict_types=1);

const RECIPIENT_EMAIL = 'info@cakesbybims.co.uk';

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Method not allowed.']);
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw ?: '', true);

// Fall back to standard form-encoded submissions if JSON parsing fails.
if (!is_array($payload)) {
    $payload = $_POST;
}

$name = trim((string) ($payload['name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$cakeType = trim((string) ($payload['cakeType'] ?? ''));
$eventDate = trim((string) ($payload['eventDate'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));
// Honeypot: bots tend to fill every field, humans never see/fill this one.
$company = trim((string) ($payload['company'] ?? ''));

if ($company !== '') {
    respond(200, ['ok' => true]);
}

if ($name === '' || $email === '' || $message === '') {
    respond(400, ['error' => 'Name, email and message are required.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Please provide a valid email address.']);
}

$subject = 'Cake enquiry from ' . $name;

$bodyLines = ["Name: {$name}", "Email: {$email}"];
if ($phone !== '') {
    $bodyLines[] = "Phone: {$phone}";
}
if ($cakeType !== '') {
    $bodyLines[] = "Cake type: {$cakeType}";
}
if ($eventDate !== '') {
    $bodyLines[] = "Event date: {$eventDate}";
}
$bodyLines[] = '';
$bodyLines[] = 'Message:';
$bodyLines[] = $message;
$body = implode("\n", $bodyLines);

// Sanitise header-injection characters from user-controlled values used in headers.
$safeName = str_replace(["\r", "\n"], '', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);

$headers = [
    'From: CakesbyBIMS Website <' . RECIPIENT_EMAIL . '>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=utf-8',
];

$sent = mail(RECIPIENT_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(502, ['error' => 'Something went wrong sending your enquiry. Please try again or email us directly.']);
}

respond(200, ['ok' => true]);
