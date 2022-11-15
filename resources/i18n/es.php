<?php
function replace($subject, $arr)
{
    foreach ($arr as $clave => $valor) {
        $subject = str_replace($clave, $valor, $subject);
    }
    return $subject;
}

$i18n = array(
    // GENERAL
    "STEPS" => "Pasos",
    // DONATION
    "DONATION_DO_YOU_WANT_DONATE" => "¿Quieres donarme?",
    "DONATION_SELECT_CRYPTO" => "Selecciona una criptomoneda...",
    "DONATION_COIN_ADDRESS" => "Dirección de {COIN}",
    // CONTENT
    "CONTENT_INTRO" => [
        "Cryptools es un grupo de herramientas orientado a la ofuscación y encriptación de texto.",
        "Podrás desde transformar un texto a base64 hasta usar tu propio diccionario que reemplace las palabras o carácteres que tú quieras.",
        "Combínalos como quieras para reforzar aún más el encriptado.",
        "¡No pierdas el diccionario si alguna vez quieres recuperar el texto encriptado!"
    ],
    "CONTENT_TOOLS" => "Herramientas",
    // BASE 64
    "B64_TITLE" => "Base64 coder/decoder",
    "B64_INTRO" => [
        "¿Sabías que se puede usar la codificación base64 para ofuscar texto?",
        "De estar forma, por ejemplo, podemos evitar miradas ajenas, pues cualquier persona que no sepa lo que es base64, lo que verá un <em>churro</em> de carácteres.",
        "También podemos evitar de esta forma que el texto o las palabras que 'oculta' salgan en búsquedas de fichero."
    ],
    "B64_STEPS" => [
        replace(
            "Elige que operación en {base64} quieres hacer: codificar o decodificar",
            array("{base64}" => "<samp>base64</samp>")
        ),
        "Introduce el texto que quieres transformar"
    ],
    "B64_WHAT_DO_YOU_WANT_TO_DO" => "¿Qué quieres hacer?",
    "B64_ENCODE" => "Codificar en base64",
    "B64_DECODE" => "Decodificar desde base64",
    "B64_WHAT_TEXT" => "¿Qué texto?",
    "B64_RESULT" => "Resultado",
    "B64_COPY_TO_CLIPBOARD" => "Copiar resultado al cortapapeles",
    "B64_ERROR_DECODE" => "Error: no es posible realizar la decodificación con los carácteres introducidos. Revísalo para poder continuar.",
    // DELETER
    "DELETER_INTRO" => ["No hay mucho que explicar, una herramienta simple para eliminar lo que queramos de un texto."],
    "DELETER_STEPS" => [
        "Introduce el carácter, palabra o texto que quieres eliminar",
        "Introduce el texto del que quieres eliminar"
    ],
    "DELETER_TITLE" => "Deleter",
    "DELETER_WHAT_WORD_OR_CHAR" => "¿Qué palabra o carácter quieres eliminar?",
    "DELETER_WHAT_TEXT" => "¿Qué texto?",
    "DELETER_RESULT" => "Resultado",
    "DELETER_COPY_TO_CLIPBOARD" => "Copiar resultado al cortapapeles",
    // DICTIONARY BUILDER

    "BUILDER_INTRO" => [
        "Un diccionario se componen de un conjunto de claves, en la que cada una tiene asociada un valor.",
        "Bajo este premisa y aprovechando su funcionamiento, podemos transformar un texto en uno completamente diferente.",
        replace(
            "De forma contraria, si queremos volver al texto original, solamente debemos intercambiar la clave ({key}) con su valor ({value}).",
            array(
                "{key}" => "<samp>key</samp>",
                "{value}" => "<samp>value</samp>"
            )
        ),
        "Con este utilidad, podrás crear facilmente un diccionario.",
        "<strong>¡No pierdas tu diccionario o probablemente te resultará imposible recuperar en un futuro el contenido de tus textos encriptados!</strong>"
    ],
    "BUILDER_STEPS" => [
        "Selecciona un separador predefinido o indica uno personalizado. ¡Incluso puedes usar palabras!",
        "Introduce el texto, carácteres, números... que se usarán para crear el diccionario. ¡Mientras más mejor!",
        "Si no te gusta el resultado, puedes rehacerlo con un <em>click</em>",
        "También puedes ampliarlo para visualizar el mejor el resultado, incluso copiarlo o descargarlo."
    ],
    "BUILDER_TITLE" => "Dictionary builder",
    "BUILDER_WHAT_SEPARATOR" => "¿Que separador quieres usar?",
    "BUILDER_WHAT_TEXT_TO_USE" => "¿Qué texto vas a usar para crear el diccionario?",
    "BUILDER_CHAR_TO_CHAR" => "Carácter a carácter",
    "BUILDER_SPACE" => "Espacio",
    "BUILDER_DOT" => "Punto",
    "BUILDER_COMMA" => "Coma",
    "BUILDER_COLON" => "Dos puntos",
    "BUILDER_ASTERISK" => "Asterisco",
    "BUILDER_CUSTOM" => "Personalizado",
    "BUILDER_SET_CUSTOM" => "Introduce separador...",
    "BUILDER_REDO_DICT" => "Rehacer diccionario",
    "BUILDER_OPEN_WINDOW" => "Abrir en ventana",
    "BUILDER_COPY_TO_CLIPBOARD" => "Copiar resultado al cortapapeles",
    "BUILDER_DOWNLOAD_DICT" => "Descargar diccionario",
    "BUILDER_RESULT" => "Resultado",
    "BUILDER_LOST_DICT_ADVISOR" => "¡Recuerda! ¡No pierdas tu diccionario y guardalo en un lugar seguro!",
    "BUILDER_ADD_DEFAULT_DICT" => [
        "Crear diccionario por defecto ",
        "básico ",
        "o ",
        "extendido"
    ],
    // DICTIONARY

    "DICT_INTRO" => [
        "Con esta utilidad podras hacer usos de tu diccionario, ya sea con uno que ya tengas de antes, o alguno que indiques de forma manual.",
        "Por supuesto, también necesitas el texto que quieras encriptar.",
    ],
    "DICT_STEPS" => [
        "Adjunta un diccionario desde un fichero o escribelo manualmente",
        "Introduce el texto que quieras encriptar",
        "Pulsa el botón <samp>Transformar</samp>",
        "También puedes ampliarlo para visualizar el mejor el resultado, incluso copiarlo o descargarlo."
    ],
    "DICT_TITLE" => "Dictionary",
    "DICT_DO_YOU_WANT_ENCODE_OR_DECODE" => "¿Quieres codificar o decodificar?",
    "DICT_ENCODE" => "Codificar",
    "DICT_DECODE" => "Decodificar",
    "DICT_LOAD_JSON_OR_MANUAL" => "Carga un diccionario desde un fichero (Formato JSON) o indícalo manualmente",
    "DICT_LOAD_JSON_BTN" => "Cargar fichero",
    "DICT_LOAD_INPUT_OR_MANUAL" => "Carga el texto a tratar desde un fichero o indícalo manualmente",
    "DICT_LOAD_INPUT_FILE_BTN" => "Cargar texto",
    "DICT_TRANSFORM_BTN" => "Transformar",
    "DICT_RESULT" => "Resultado",
    "DICT_COPY_TO_CLIPBOARD" => "Copiar resultado al cortapapeles",
    "DICT_DOWNLOAD_DICT" => "Descargar resultado",
    // CONTACT
    "CONTACT" => "Contacto",
    "CONTACT_NAME" => "Nombre",
    "CONTACT_EMAIL" => "Correo electrónico",
    "CONTACT_MESSAGE" => "Mensaje",
    "CONTACT_WHO_ARE_YOU" => "¿Quién eres?",
    "CONTACT_YOUR_MESSAGE" => "Introduce tu consulta...",
    "CONTACT_SEND_MESSAGE" => "Enviar mensaje",
    "CONTACT_ERROR_SENDING_EMAIL_TXT" => "Ha habido un error al enviar el email", /* */
);
?>