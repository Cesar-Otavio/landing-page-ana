<?php
/**
 * Configuration File
 * Ana Paula Vieira - Mentoria Liberdade Sistêmica
 */

// Error Reporting (Development/Production)
// Change to false in production
define('DEBUG_MODE', true);

if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Site Configuration
define('BASE_URL', '/sites/Freela/ana-vieira-refeito/ana-paula-vieira/');

define('SITE_NAME', 'Ana Paula Vieira - Mentoria Liberdade Sistêmica');
define('SITE_URL', 'https://anavieiramls.com');
define('SITE_EMAIL', 'contato@anavieiramls.com');

// WhatsApp Configuration
define('WHATSAPP_NUMBER', '5511999999999'); // Update with real number
define('WHATSAPP_GROUP', 'https://chat.whatsapp.com/YOUR_GROUP_LINK'); // Update with real group link

// Social Media
define('INSTAGRAM', 'https://instagram.com/anapaulavieira');
define('FACEBOOK', 'https://facebook.com/anapaulavieira');
define('LINKEDIN', 'https://linkedin.com/in/anapaulavieira');

// Timezone
date_default_timezone_set('America/Sao_Paulo');

// Character Encoding
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

// Security
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('X-Content-Type-Options: nosniff');

// Session Configuration
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', 1);
    ini_set('session.use_only_cookies', 1);
    ini_set('session.cookie_secure', 1); // Only if using HTTPS
    session_start();
}

/**
 * Sanitize user input
 */
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * Get WhatsApp link
 */
function get_whatsapp_link($message = '') {
    $number = WHATSAPP_NUMBER;
    $encoded_message = urlencode($message);
    return "https://wa.me/{$number}?text={$encoded_message}";
}

/**
 * Get current year
 */
function get_current_year() {
    return date('Y');
}

/**
 * Check if request is AJAX
 */
function is_ajax_request() {
    return !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && 
           strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
}

/**
 * Redirect function
 */
function redirect($url, $permanent = false) {
    $status_code = $permanent ? 301 : 302;
    header("Location: {$url}", true, $status_code);
    exit();
}

/**
 * Get page title
 */
function get_page_title($page = '') {
    $base_title = SITE_NAME;
    return empty($page) ? $base_title : "{$page} - {$base_title}";
}

/**
 * Include header
 */
function include_header() {
    if (file_exists(__DIR__ . '/includes/header.php')) {
        include __DIR__ . '/includes/header.php';
    }
}

/**
 * Include footer
 */
function include_footer() {
    if (file_exists(__DIR__ . '/includes/footer.php')) {
        include __DIR__ . '/includes/footer.php';
    }
}

/**
 * Asset URL helper
 */
function asset($path) {
    return SITE_URL . '/' . ltrim($path, '/');
}

/**
 * Log errors to file
 */
function log_error($message, $file = 'error.log') {
    if (!DEBUG_MODE) {
        $log_file = __DIR__ . '/logs/' . $file;
        $timestamp = date('Y-m-d H:i:s');
        $log_message = "[{$timestamp}] {$message}" . PHP_EOL;
        
        if (!file_exists(__DIR__ . '/logs')) {
            mkdir(__DIR__ . '/logs', 0755, true);
        }
        
        file_put_contents($log_file, $log_message, FILE_APPEND);
    }
}

// Add more helper functions as needed
?>
