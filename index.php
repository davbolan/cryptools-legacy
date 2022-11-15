<!DOCTYPE html>
<?php
define("ROOT_PATH", __DIR__);
require ROOT_PATH . '/src/php/variables.php';
require ROOT_PATH . '/src/php/paths.php';
require ROOT_RESOURCES_PATH . '/constants.php';
require ROOT_PHP_PATH . '/functions.php';
require ROOT_RESOURCES_I18N . '/es.php';
?>
<html lang="<?php echo $web_lang; ?>" class="with-scrollbar">
  <head>
    <?php require ROOT_COMPONENTS_PATH . '/meta.php' ?>
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="css/bootstrap-icons/bootstrap-icons.min.css" />
    <!--
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha256-IUOUHAPazai08QFs7W4MbzTlwEWFo7z/4zw8YmxEiko=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" integrity="sha256-BpVWXFHWXgU/9RgZKOYHYE/qxzAEcmxn0n6MymuxIOw=" crossorigin="anonymous">
    -->
    <link rel="stylesheet" href="css/jsonviewer/jquery.json-viewer.css" />
    <link rel="stylesheet" href="css/variables.css" />
    <link rel="stylesheet" href="css/theme.css" />
    <link rel="stylesheet" href="css/styles.css" />

    <script type="text/javascript" src="src/js/min/jquery.min.js"></script>
    <script type="text/javascript" src="src/js/min/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="src/js/min/jquery.json-editor.min.js"></script>
    <!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.   js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha256-h1OMS35Ij1pJ0S+Y1qBK/GHQDyankPMZVpeZrNQ062U=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/easyqrcodejs@4.4.13/src/easy.qrcode.js" integrity="sha256-oiTj+ZVUvV845jrn6LeYh9jPjdmMk1dHUlp11Wd5DkA=" crossorigin="anonymous" defer></script>
    -->
    <script type="text/javascript" src="src/js/min/easy.qrcode.min.js"></script>
    <script type="module" src="src/js/utils/prototypes.js"></script>
    <script type="module" src="src/js/app.js"></script>
  </head>

  <body>
    <?php require ROOT_COMPONENTS_PATH . '/navbar.html' ?>
    <?php require ROOT_COMPONENTS_PATH . '/content.php' ?>
    <?php require ROOT_COMPONENTS_PATH . '/footer.html' ?>
    <?php require ROOT_COMPONENTS_PATH . '/alert.html' ?>
  </body>
</html>
