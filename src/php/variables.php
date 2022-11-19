<?php

$config = include ROOT_PATH . '/resources/config/config.php';

define("DEBUG", $config->debug);
define("CT_EMAIL", $config->ctEmail);

$fullLang = array(
    "es" => "es_ES",
    "en" => "en_EN"
);

$default_lang = "es";
if (!isset($lang)) {
    $lang = $default_lang;
}

define("EMPTY_EMAIL", "EMPTY_EMAIL");
define("EMPTY_NAME", "EMPTY_NAME");
define("EMPTY_MSG", "EMPTY_MSG");
define("INVALID_EMAIL", "INVALID_EMAIL");
define("VALID_EMAIL", "VALID_EMAIL");
define("TEMP_EMAIL", "TEMP_EMAIL");
define("TOO_SHORT_MSG", "TOO_SHORT_MSG");
define("MAYBE_SPAMMER", "MAYBE_SPAMMER");
define("ERROR_SENDING_EMAIL", "ERROR_SENDING_EMAIL");

$host = $_SERVER["HTTP_HOST"];
$requestUri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http");
$root = "$protocol://$host";

define("WEB_HOST", $host);
define("WEB_ROOT", $root);
define("WEB_URL", $requestUri);
define("ZIP_FILE_PATH", "$root/$config->projectZipFile");

define("WEB_TITLE", $config->appName);
define("APP_NAME", $config->appName);

$web_description = "Application for processing encryption and obfuscation of text. You can use base64 or your own dictionary.";
$web_fullLang = $fullLang[$lang];
define("PATH_LOGO", WEB_ROOT . "/assets/logo.png");

?>