<!DOCTYPE html>
<?php
  define("ROOT_PATH", __DIR__);
  require ROOT_PATH.'/src/php/variables.php';
  require ROOT_PATH.'/src/php/paths.php';
  require ROOT_RESOURCES_PATH.'/constants.php';
  require ROOT_PHP_PATH.'/functions.php';
?>
<html lang="<?php echo $web_lang;?>" class="with-scrollbar">
  <head>
    <?php require ROOT_COMPONENTS_PATH.'/meta.php'?>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="css/bootstrap-icons/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="css/jsonviewer/jquery.json-viewer.css" />
    <link rel="stylesheet" href="css/variables.css" />
    <link rel="stylesheet" href="css/theme.css" />
    <link rel="stylesheet" href="css/styles.css" />

    <script type="text/javascript" src="src/js/min/jquery.min.js"></script>
    <script type="text/javascript" src="src/js/min/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="src/js/min/jquery.base64.min.js"></script> 
    <script type="text/javascript" src="src/js/min/jquery.json-editor.min.js"></script> 
    <script type="text/javascript" src="src/js/min/easy.qrcode.min.js"></script> 
    <!--
    <script type="text/javascript" src="js/libs/jquery/jquery.js"></script>
    <script type="text/javascript" src="js/libs/bootstrap/bootstrap.bundle.js"></script>
    <script type="text/javascript" src="js/libs/jquery/base64/jquery.base64.js"></script>
    <script type="text/javascript" src="js/libs/jquery/jsonViewer/jquery.json-editor.js"></script>
    -->
    <script type="module" src="src/js/utils/prototypes.js"></script>
    <script type="module" src="src/js/app.js"></script>
  </head>

  <body>
    <?php require ROOT_COMPONENTS_PATH.'/navbar.html'?>
    <?php require ROOT_COMPONENTS_PATH.'/content.php'?>
    <?php require ROOT_COMPONENTS_PATH.'/footer.html'?>
    <?php require ROOT_COMPONENTS_PATH.'/alert.html'?>
  </body>
</html>