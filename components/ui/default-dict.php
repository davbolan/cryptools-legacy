<?php 
$defaultDictTemplate = file_get_contents(ROOT_COMPONENTS_TEMPLATES_PATH.'/add-default-dict-template.html');
$addDefault = BUILDER_ADD_DEFAULT_DICT[0];
$basic      = BUILDER_ADD_DEFAULT_DICT[1];
$or         = BUILDER_ADD_DEFAULT_DICT[2];
$extended   = BUILDER_ADD_DEFAULT_DICT[3];

$defaultDictTemplate = str_replace("{ADD_DEFAULT}", $addDefault, $defaultDictTemplate );
$defaultDictTemplate = str_replace("{BASIC}"      , $basic, $defaultDictTemplate );
$defaultDictTemplate = str_replace("{OR}"         , $or, $defaultDictTemplate );
$addDefaultDict      = str_replace("{EXTENDED}"   , $extended, $defaultDictTemplate );

echo $addDefaultDict;
?>