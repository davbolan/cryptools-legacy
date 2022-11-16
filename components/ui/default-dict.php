<?php
$addDefaultDictTemplate = file_get_contents(ROOT_COMPONENTS_TEMPLATES_PATH . '/add-default-dict-template.html');
$defaultDictTemplate = file_get_contents(ROOT_COMPONENTS_TEMPLATES_PATH . '/default-type-dict-template.html');
$addDefaultDictText = $i18n["BUILDER_ADD_DEFAULT_DICT"];
$builderBasicDict = $i18n["BUILDER_BASIC_DICT"];
$builderExtendedDict = $i18n["BUILDER_EXTENDED_DICT"];

function buildDefaultDict($template, $type, $content)
{
    return replace(
        $template,
        array(
            "{TYPE}" => $type,
            "{CONTENT}" => $content
        )
    );
}

$defaultBasicDict = buildDefaultDict(
    $defaultDictTemplate,
    "BASIC",
    $builderBasicDict
);

$defaultExtendedDict = buildDefaultDict(
    $defaultDictTemplate,
    "EXTENDED",
    $builderExtendedDict
);

$builderAddDefaultDictTemplate = replace(
    $addDefaultDictText,
    array(
        "{BASIC}" => $defaultBasicDict,
        "{EXTENDED}" => $defaultExtendedDict
    )
);

$builderAddDefaultDict = replace(
    $addDefaultDictTemplate,
    array(
        "{TEXT}" => $builderAddDefaultDictTemplate
    )
);


echo $builderAddDefaultDict;
?>