<?php

// GENERAL
define("STEPS", "Pasos");

// DONATION
define("DONATION_SELECT_CRYPTO", "Selecciona una criptomoneda...");
define("DONATION_COIN_ADDRESS", "Dirección de %COIN%");
define("DONATION_DO_YOU_WANT_DONATE", "¿Quieres donarme?");
define("DONATION_DONATE_ME", "Dóname");
//define("DONATION_COIN_ADDRESS", "%COIN% address");


// CONTENT
define("CONTENT_INTRO", [
    "Cryptools es un grupo de herramientas orientado a la ofuscación y encriptación de texto.",
    "Podrás desde transformar un texto a base64 hasta usar tu propio diccionario que reemplace las palabras o carácteres que tú quieras.",
    "Combínalos como quieras para reforzar aún más el encriptado.",
    "¡No pierdas el diccionario si alguna vez quieres recuperar el texto encriptado!"
]);
define("CONTENT_TOOLS",     "Herramientas");

define("B64_TITLE",                  "Base64 coder/decoder");
define("B64_INTRO", [
    "¿Sabías que se puede usar la codificación base64 para ofuscar texto?",
    "De estar forma, por ejemplo, podemos evitar miradas ajenas, pues cualquier persona que no sepa lo que es base64, lo que verá un <em>churro</em> de carácteres.",
    "También podemos evitar de esta forma que el texto o las palabras que 'oculta' salgan en búsquedas de fichero."
]);
define("B64_STEPS", [
    "Elige que operación en <samp>base64</samp> quieres hacer: codificar o decodificar",
    "Introduce el texto que quieres transformar"
]);
define("B64_WHAT_DO_YOU_WANT_TO_DO", "¿Qué quieres hacer?");
define("B64_ENCODE",                 "Codificar en base64");
define("B64_DECODE",                 "Decodificar desde base64");
define("B64_WHAT_TEXT",              "¿Qué texto?");
define("B64_RESULT",                 "Resultado");
define("B64_COPY_TO_CLIPBOARD",      "Copiar resultado al cortapapeles");


// DELETER
define("DELETER_INTRO", [ "No hay mucho que explicar, una herramienta simple para eliminar lo que queramos de un texto." ]);
define("DELETER_STEPS", [
    "Introduce el carácter, palabra o texto que quieres eliminar",
    "Introduce el texto del que quieres eliminar"
]);
define("DELETER_TITLE",             "Deleter");
define("DELETER_WHAT_WORD_OR_CHAR", "¿Qué palabra o carácter quieres eliminar?");
define("DELETER_WHAT_TEXT",         "¿Qué texto?");
define("DELETER_RESULT",            "Resultado");
define("DELETER_COPY_TO_CLIPBOARD", "Copiar resultado al cortapapeles");


// DICTIONARY BUILDER
define("BUILDER_INTRO", [
    "Un diccionario se componen de un conjunto de claves, en la que cada una tiene asociada un valor.",
    "Bajo este premisa y aprovechando su funcionamiento, podemos transformar un texto en uno completamente diferente.",
    "De forma contraria, si queremos volver al texto original, solamente debemos intercambiar la clave (<samp>key</samp>) con su valor (<samp>value</samp>).",
    "Con este utilidad, podrás crear facilmente un diccionario.",
    "<strong>¡No pierdas tu diccionario o probablemente te resultará imposible recuperar en un futuro el contenido de tus textos encriptados!</strong>"

]);
define("BUILDER_STEPS", [
    "Selecciona un separador predefinido o indica uno personalizado. ¡Incluso puedes usar palabras!",
    "Introduce el texto, carácteres, números... que se usarán para crear el diccionario. ¡Mientras más mejor!",
    "Si no te gusta el resultado, puedes rehacerlo con un <em>click</em>",
    "También puedes ampliarlo para visualizar el mejor el resultado, incluso copiarlo o descargarlo."
]);
define("BUILDER_TITLE",             "Dictionary builder");
define("BUILDER_WHAT_SEPARATOR",    "¿Que separador quieres usar?");
define("BUILDER_WHAT_TEXT_TO_USE",  "¿Qué texto vas a usar para crear el diccionario?");
define("BUILDER_CHAR_TO_CHAR",      "Carácter a carácter");
define("BUILDER_SPACE",             "Espacio");
define("BUILDER_DOT",               "Punto");
define("BUILDER_COMMA",             "Coma");
define("BUILDER_COLON",             "Dos puntos");
define("BUILDER_ASTERISK",          "Asterisco");
define("BUILDER_CUSTOM",            "Personalizado");
define("BUILDER_SET_CUSTOM",        "Introduce separador...");
define("BUILDER_REDO_DICT",         "Rehacer diccionario");
define("BUILDER_OPEN_WINDOW",       "Abrir en ventana");
define("BUILDER_COPY_TO_CLIPBOARD", "Copiar resultado al cortapapeles");
define("BUILDER_DOWNLOAD_DICT",     "Descargar diccionario");
define("BUILDER_RESULT",            "Resultado");
define("BUILDER_ADD_DEFAULT_DICT",  "Crear diccionario por defecto...");
define("BUILDER_LOST_DICT_ADVISOR", "¡Recuerda! ¡No pierdas tu diccionario y guardalo en un lugar seguro!");


// DICTIONARY
define("DICT_INTRO", [
    "Con esta utilidad podras hacer usos de tu diccionario, ya sea con uno que ya tengas de antes, o alguno que indiques de forma manual.",
    "Por supuesto, también necesitas el texto que quieras encriptar.",
]);
define("DICT_STEPS", [
    "Adjunta un diccionario desde un fichero o escribelo manualmente",
    "Introduce el texto que quieras encriptar",
    "Pulsa el botón <samp>Transformar</samp>",
    "También puedes ampliarlo para visualizar el mejor el resultado, incluso copiarlo o descargarlo."
]);
define("DICT_TITLE",                        "Dictionary");
define("DICT_DO_YOU_WANT_ENCODE_OR_DECODE", "¿Quieres codificar o decodificar?");
define("DICT_ENCODE",                       "Codificar");
define("DICT_DECODE",                       "Decodificar");
define("DICT_LOAD_JSON_OR_MANUAL",          "Carga un diccionario desde un fichero (Formato JSON) o indícalo manualmente");
define("DICT_LOAD_JSON_BTN",                "Cargar fichero");
define("DICT_LOAD_INPUT_OR_MANUAL",         "Carga el texto a tratar desde un fichero o indícalo manualmente");
define("DICT_LOAD_INPUT_FILE_BTN",          "Cargar texto");
define("DICT_TRANSFORM_BTN",                "Transformar");
define("DICT_RESULT",                       "Resultado");
define("DICT_COPY_TO_CLIPBOARD",            "Copiar resultado al cortapapeles");
define("DICT_DOWNLOAD_DICT",                "Descargar resultado");


?>