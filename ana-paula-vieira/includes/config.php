<?php
/**
 * Configuration File
 * Ana Paula Vieira - Mentoria Liberdade Sistêmica
 */

// Ambiente
define('DEBUG_MODE', true); // false em produção

if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Site
define('SITE_NAME', 'Ana Paula Vieira');
define('SITE_URL', 'https://metodoraizesdocorpo.com.br');

// Contato
define('WHATSAPP_NUMBER', '5516996180382');
define('WHATSAPP_LIBERDADE', 'https://api.whatsapp.com/send/?phone=5516996180382&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Mentoria+Liberdade+Sist%C3%AAmica&type=phone_number&app_absent=0');
define('INSTAGRAM', 'https://www.instagram.com/anavieirapitta/');

// Fuso e encoding
date_default_timezone_set('America/Sao_Paulo');
mb_internal_encoding('UTF-8');

// Segurança
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('X-Content-Type-Options: nosniff');

// Helpers

function get_whatsapp_link($message = '') {
    return 'https://wa.me/' . WHATSAPP_NUMBER . '?text=' . urlencode($message);
}

function get_current_year() {
    return date('Y');
}

function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)), ENT_QUOTES, 'UTF-8');
}
?>