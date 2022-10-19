<?php

include 'constants.php';

define("DEBUG", false);
function consoleLog($data)
{
    if(DEBUG){
        $output = $data;
        if (is_array($output)) {
            $output = implode(',', $output);
        }
        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    }
}

$isProd = !in_array($_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1']);

$web_prod_name = "crypruebas.000webhostapp.com";
$web_dev_name = "localhost:8080";
$web_url = $isProd ? $web_prod_name : $web_dev_name;

$web_prod_root = "https://" . $web_prod_name;
$web_dev_root = "http://" . $web_dev_name;
$web_root = $isProd ? $web_prod_root : $web_dev_root;

$web_title = "Cryptools";
$web_description = "Application for processing encryption and obfuscation of text. You can use base64 or your own dictionary.";
$web_lang = "en";
$web_fullLang = "en_EN";
$web_logo = $web_root . "/assets/logo.png";
?>