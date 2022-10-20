<!DOCTYPE html>
<?php 
  require './php/constants.php';
  require './php/variables.php';
  require './php/functions.php';
?>
<html lang="<?php echo $web_lang;?>">
  <head>
    <?php include 'components/meta.php'?>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="css/bootstrap-icons/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="css/jsonviewer/jquery.json-viewer.css" />
    <link rel="stylesheet" href="css/variables.css" />
    <link rel="stylesheet" href="css/theme.css" />
    <link rel="stylesheet" href="css/styles.css" />

    <script type="text/javascript" src="js/min/jquery.min.js"></script>
    <script type="text/javascript" src="js/min/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="js/min/jquery.base64.min.js"></script> 
    <script type="text/javascript" src="js/min/jquery.json-editor.min.js"></script> 
    <!--
    <script type="text/javascript" src="js/libs/jquery/jquery.js"></script>
    <script type="text/javascript" src="js/libs/bootstrap/bootstrap.bundle.js"></script>
    <script type="text/javascript" src="js/libs/jquery/base64/jquery.base64.js"></script>
    <script type="text/javascript" src="js/libs/jquery/jsonViewer/jquery.json-editor.js"></script>
    -->
    <script type="module" src="js/utils/prototypes.js"></script>
    <script type="module" src="js/app.js"></script>
  </head>

  <body>
    <?php include 'components/navbar.html'?>
    <?php include 'components/content.php'?>
    <?php include 'components/footer.php'?>
    <?php include 'components/alert.html'?>
  </body>
</html>