<?php

$config = include ROOT_PATH.'/resources/config/config.php' ;

define("DEBUG",  $config->debug);
define("CT_EMAIL", $config->ctEmail);

$default_lang = "en";
if (!isset($lang)) {
    $lang = $default_lang;
}

define("TEMP_EMAIL",          "TEMP_EMAIL");
define("TOO_SHORT_MSG",       "TOO_SHORT_MSG");
define("MAYBE_SPAMMER",       "MAYBE_SPAMMER");
define("ERROR_SENDING_EMAIL", "ERROR_SENDING_EMAIL");

define("WEB_HOST", $config->host);
define("WEB_ROOT",  $config->root);

define("WEB_TITLE",  $config->appName);
define("APP_NAME",  $config->appName);

$web_description = "Application for processing encryption and obfuscation of text. You can use base64 or your own dictionary.";
$web_fullLang = "en_EN";
define("PATH_LOGO", WEB_ROOT."/assets/logo.png");

?>