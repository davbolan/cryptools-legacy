<?php
$ROOT_PATH = str_replace('\\', '/', dirname(__DIR__, 2));
define("ROOT_PATH", $ROOT_PATH);

require ROOT_PATH . '/src/php/paths.php';
require ROOT_RESOURCES_PATH . '/constants.php';
require ROOT_PHP_PATH . '/variables.php';

session_start();

$keyname = "name";
$keyEmail = "email";
$keyMessage = "message";

$name = getParam($keyname, false);
$targetEmail = getParam($keyEmail, false);
$clientMessage = getParam($keyMessage, true);

if (empty($name)) {
  $name = EMPTY_NAME;
} else if (empty($targetEmail)) {
  $targetEmail = EMPTY_EMAIL;
} else if (empty($clientMessage)) {
  $clientMessage = EMPTY_MSG;
} else {
  $targetEmail = checkValidEmail($targetEmail);
  $clientMessage = checkValidMessage($clientMessage);
}

$ERRORS = array(
  $keyname    => [EMPTY_NAME],
  $keyEmail   => [INVALID_EMAIL, TEMP_EMAIL, EMPTY_EMAIL],
  $keyMessage => [TOO_SHORT_MSG, EMPTY_MSG]
);

if (in_array($name, $ERRORS[$keyname])) {
  returnResponse(false, $name);
} else if (in_array($targetEmail, $ERRORS[$keyEmail])) {
  returnResponse(false, $targetEmail);
} else if (in_array($clientMessage, $ERRORS[$keyMessage])) {
  returnResponse(false, $clientMessage);
} else {
  $success = sendEmailToAdmin($targetEmail, $name, $clientMessage);
  $response = $success ? VALID_EMAIL : ERROR_SENDING_EMAIL;
  returnResponse($success, $response);
}


function getParam($paramName, $clean) {
  if (isset($_REQUEST[$paramName])) {
    return $clean ? cleanString($_REQUEST[$paramName]) : $_REQUEST[$paramName];
  }
  return '';
}

function checkValidEmail($email) {
  $email = filter_var($email, FILTER_SANITIZE_EMAIL);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $email = INVALID_EMAIL;
  } else {
    $email = checkTempMail($email);
  }
  return $email;
}

function checkTempMail($email) {
  $tempEmailsFilePath = ROOT_RESOURCES_PATH . '/temp-emails.txt';
  $result = $email;
  $domain = explode('@', $email)[1];
  $blacklist = file($tempEmailsFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

  if (in_array($domain, $blacklist)) {
    $result = TEMP_EMAIL;
  }
  return $result;
}

function buildMaybeSpammer($badHead) {
  $template = "<strong style='color:red;'>[[MAYBE_SPAMMER: {BASE64}]]</strong>";
  $badHeadB64 = base64_encode($badHead);
  $maebyBeSpammerHTML = str_replace("{BASE64}", $badHeadB64, $template);
  return $maebyBeSpammerHTML;
}

function cleanBadHeads($message) {
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

  foreach ($badHeads as $badHead) {
    if (str_contains($message, $badHead)) {
      $maybeSpammer = buildMaybeSpammer($badHead);
      $message = str_replace($badHead, $maybeSpammer, $message);
    }
  }
  return $message;
}

function checkValidMessage($message) {
  return strlen($message) < 10 ? TOO_SHORT_MSG : cleanBadHeads($message);
}

function getEmailHeaders($sourceEmail, $targetEmail) {
  $mandatoryHeader = array(
    "MIME-Version" => "1.0",
    "Content-type" => "text/html; charset=utf-8",
    "From"         => $sourceEmail,
    //"To"           => $targetEmail
    //"Reply-To"     => $sourceEmail

  );

  $headers = "";
  foreach ($mandatoryHeader as $headerName => $headerValue) {
    $headers .= withLn("$headerName: $headerValue");
  }

  DEBUG(withLn($headers));

  return $headers;
}

function getEmailBody($targetEmail, $name, $message) {
  $emailHTML = getHTMLEmailTemplate();
  $emailVars = getEmailVars($targetEmail, $name, $message);
  $emailHTML = buildEmail($emailHTML, $emailVars);
  return $emailHTML;
}

function getEmailVars($targetEmail, $name, $message) {
  return array(
    "{EMAIL}"   => $targetEmail,
    "{NAME}"    => $name,
    "{MESSAGE}" => $message,
  );
}

function buildEmail($emailHTML, $emailVars) {
  foreach ($emailVars as $varName => $varValue) {
    if (strlen($varName) > 2 && trim($varName) != "") {
      $emailHTML = str_replace($varName, $varValue, $emailHTML);
    }
  }
  return $emailHTML;
}

function getHTMLEmailTemplate() {

  $emailTemplate =
"<html>
  <head>
    <meta charset='utf-8' />
    <title>Email de {NAME}</title>
  </head>
  <style>
    html {
      font-family: Arial, Helvetica, sans-serif;
    }
    li {
      margin: 10px 0 10px 0;
    }
    .content {
      max-width: 600px;
      min-width: 100px;
      background-color: #fff;
      padding: 20px;
      margin: auto;
      border: solid 1px #000;
    }
  </style>
  <body>
    <div class='content'>
      <p><strong>Datos de la persona: </strong></p>
      <ul style='list-style-type: none'>
        <li><strong>Nombre:</strong> {NAME}</li>
        <li><strong>Email:</strong> {EMAIL}</li>
        <li><strong>Mensaje:</strong></li>
      </ul>
      <p>{MESSAGE}</p>
    </div>
  </body>
</html>";

  return $emailTemplate;
}

function supressWarning() {
  return error_reporting(E_ALL ^ E_WARNING);
}

function restoreWarning($errLevel) {
  error_reporting($errLevel);
}

function sendEmail($targetEmail, $subject, $message, $headers) {
  DEBUG("targetEmail:\r\n$targetEmail\r\n subject:\r\n$subject\r\n message:\r\n$message\r\nheaders:\r\n$headers\r\n");
  $errLevel = supressWarning();
  $success = mail($targetEmail, $subject, $message, $headers);
  restoreWarning($errLevel);
  return $success;
}

function sendEmailToAdmin($targetEmail, $name, $clientMsg) {
  $sourceEmail = CT_EMAIL;
  $subject = "Correo enviado desde Cryptools.ovh";
  $emailHTML = getEmailBody($targetEmail, $name, $clientMsg);
  $headers = getEmailHeaders($sourceEmail, $targetEmail);
  DEBUG(withLn($emailHTML));
  return sendEmail($targetEmail, $subject, $emailHTML, $headers);
}

function cleanString($string) {
  $string = trim($string);
  $string = stripslashes($string);
  $string = htmlspecialchars($string);
  return $string;
}

function getCodeMessage($code) {
  $code .= "_TXT";
  return defined($code) ? constant($code) : ERROR_SENDING_EMAIL_TXT;
}

function returnResponse($success, $code) {
  $jsonResponse = array(
    "success" => $success,
    "code"    => $code,
    "message" => getCodeMessage($code)
  );

  if (!$success) {
    http_response_code(400);
  }
  header("Content-type: application/json; charset=utf-8");
  echo json_encode($jsonResponse);
  //exit();
}

function withLn($string) {
  return $string . "\r\n";
}

function DEBUG($msg) {
  if (DEBUG) {
    echo $msg;
  }
}
?>