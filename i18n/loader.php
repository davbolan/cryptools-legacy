<?php

$defaultLanguage = "en";
$availableLanguages = ["en", "es"];

if (!(isset($lang) && in_array(strtolower($lang), $availableLanguages))) {
    $lang = $defaultLanguage;
}

$jsonData = file_get_contents(__DIR__ . "/$lang.json");
$i18n = json_decode($jsonData, true);
?>