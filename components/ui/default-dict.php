<?php
$defaultDictTemplate = file_get_contents(ROOT_COMPONENTS_TEMPLATES_PATH . '/add-default-dict-template.html');
$addDefaultDictText = $i18n["BUILDER_ADD_DEFAULT_DICT"];
$addDefault = $addDefaultDictText[0];
$basic      = $addDefaultDictText[1];
$or         = $addDefaultDictText[2];
$extended   = $addDefaultDictText[3];

$defaultDictTemplate = str_replace("{ADD_DEFAULT}", $addDefault, $defaultDictTemplate );
$defaultDictTemplate = str_replace("{BASIC}"      , $basic, $defaultDictTemplate );
$defaultDictTemplate = str_replace("{OR}"         , $or, $defaultDictTemplate );
$addDefaultDict      = str_replace("{EXTENDED}"   , $extended, $defaultDictTemplate );

echo $addDefaultDict;
?>