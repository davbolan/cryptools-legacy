<?php
$ROOT_PATH = str_replace('\\', '/', __DIR__ );
$pathParts = explode('/', $ROOT_PATH );
array_pop( $pathParts );
$ROOT_PATH = implode('/', $pathParts );
define("ROOT_PATH", $ROOT_PATH );

require ROOT_PATH . '/php/paths.php';
require ROOT_RESOURCES_PATH . '/constants.php';
require ROOT_PHP_PATH . '/variables.php';

session_start( );

$clientEmail = getParam("email", false );
$clientMessage = getParam("message", true );
$name = getParam("name", false );


if (empty( $clientEmail) ) {
    $clientEmail = EMPTY_EMAIL;
}
else if (empty( $name) ) {
    $name = EMPTY_NAME;
}
else if (empty( $clientMessage) ) {
    $clientMessage = EMPTY_MSG;
}
else {
    $clientEmail = checkValidEmail( $clientEmail );
    $clientMessage = checkValidMessage( $clientMessage );
}


$ERRORS = array(
    "email" => [ INVALID_EMAIL, TEMP_EMAIL, EMPTY_EMAIL ],
    "name" => [ EMPTY_NAME ],
    "message" => [ TOO_SHORT_MSG, EMPTY_MSG ]
 );

if ( in_array( $clientEmail, $ERRORS["email"])  ) {
    returnResponse(false, $clientEmail );
}
else if (in_array( $name, $ERRORS["name"])  ) {
    returnResponse(false, $name );
}
else if ( in_array( $clientMessage, $ERRORS["message"])  ) {
    returnResponse(false, $clientMessage );
}
else {
    $emailSended = sendEmailToAdmin( $clientEmail, $name, $clientMessage );
    $response = $emailSended ? VALID_EMAIL : ERROR_SENDING_EMAIL;
    returnResponse( $emailSended,  $response );
}

function getParam( $paramName, $clean ) {
    if (isset( $_REQUEST[$paramName]) ) {
        return $clean ? cleanString( $_REQUEST[$paramName]) : $_REQUEST[$paramName];
    }
    return '';
}

function checkValidEmail( $email ) {
    $email = filter_var( $email, FILTER_SANITIZE_EMAIL );

    if (!filter_var( $email, FILTER_VALIDATE_EMAIL) ) {
        $email = INVALID_EMAIL;
    }
    else {
        $email = checkTempMail( $email );
    }

    return $email;
}

function checkTempMail( $email ) {
    $result = $email;
    $domain = explode('@', $email) [1];
    $blacklist = file(ROOT_RESOURCES_PATH . '/temp-emails.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

    if (in_array( $domain, $blacklist) ) {
        $result = TEMP_EMAIL;
    }
    return $result;
}

function buildMaybeSpammer( $badHead ) {
    $template = "<strong style='color:red;'>[[MAYBE_SPAMMER: %BASE64%]]</strong>";
    $badHeadB64 = base64_encode( $badHead );
    $maebyBeSpammerHTML = str_replace("%BASE64%", $badHeadB64, $template );
    return $maebyBeSpammerHTML;
}

function cleanBadHeads( $message ) {
    $badHeads = array(
        "Content-Type:",
        "MIME-Version:",
        "Content-Transfer-Encoding:",
        "Return-path:",
        "Subject:",
        "From:",
        "Envelope-to:",
        "To:",
        "bcc:",
        "cc:"
     );

    foreach ( $badHeads as  $badHead){
        if (str_contains( $message, $badHead)){
            $maybeSpammer = buildMaybeSpammer( $badHead );
            $message = str_replace( $badHead, $maybeSpammer , $message );
        }
    }
    return $message;
}

function checkValidMessage( $message ) {
    return strlen( $message) < 10 ? TOO_SHORT_MSG : cleanBadHeads( $message );
}

function buildHeader($header, $headerValue, $withLn){
   $headerValue = $withLn ? withLn($headerValue) : $headerValue;
   return $header.$headerValue;
}

function getEmailHeaders( $ctEmail , $email ) {
    $empty = "";
    $headers =
        buildHeader("MIME-Version: 1.0"                    , $empty,   1).
        buildHeader("Content-type: text/html; charset=UTF-8", $empty,   1) .
        buildHeader("To: "                                 , $ctEmail, 1) .
        buildHeader("From: "                               , $email,   1) .
        buildHeader("Reply-To: "                           , $ctEmail, 1);
    return $headers;
}


function getEmailBody( $email, $name, $message ) {
    $emailTemplate = file_get_contents(ROOT_COMPONENTS_TEMPLATES_PATH . "/email-template.html" );
    $emailTemplate = str_replace( "%EMAIL%", $email, $emailTemplate );
    $emailTemplate = str_replace( "%NAME%", $name, $emailTemplate );
    $emailHTML =     str_replace( "%MESSAGE%", $message, $emailTemplate );
    return $emailHTML;
}

function supressWarning() {
    return error_reporting( E_ALL ^ E_WARNING  );
}

function restoreWarning( $errLevel){
    error_reporting( $errLevel );
}

function sendEmail ( $to, $subject, $message, $headers ) {
    $errLevel = supressWarning( );
    $resultSend = mail( $to, $subject, $message, $headers );
    restoreWarning( $errLevel );
    return $resultSend;
}

function sendEmailToAdmin( $email, $name, $clientMsg ) {
    $ctEmail = CT_EMAIL;
    $subject  = "Correo enviado desde Cryptools.ovh";
    $emailHTML = getEmailBody ( $email, $name, $clientMsg );
    $headers = getEmailHeaders( $ctEmail, $email );
    return sendEmail ( $ctEmail, $subject, $emailHTML, $headers );
   // return true;
}

function cleanString( $string ) {
    $string = trim( $string );
    $string = stripslashes( $string );
    $string = htmlspecialchars( $string );
    return $string;
}

function returnResponse( $success, $message ) {
    $jsonResponse = array(
        "success" => $success,
        "message" => $message
     );

    header( "Content-type: application/json; charset=utf-8" );
    echo json_encode( $jsonResponse );
    exit();
}

function withLn( $string){
    return $string."\r\n";
}

function DEBUG( $msg ) {
    echo $msg;
}
?>
