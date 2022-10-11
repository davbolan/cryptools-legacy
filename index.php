<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Cryptools</title>

    <link rel="stylesheet" href="css/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="css/bootstrap-icons/bootstrap-icons.css" />
    <link rel="stylesheet" href="css/jsonviewer/jquery.json-viewer.css" />
    <link rel="stylesheet" href="css/styles.css" />

    <!--  
    <script type="text/javascript" src="js/min/jquery.min.js"></script>
    <script type="text/javascript" src="js/min/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="js/min/jquery.base64.min.js"></script> 
    <script type="text/javascript" src="js/min/jquery.json-editor.min.js"></script> 
    <script type="text/javascript" src="js/min/moment.min.js"></script> 
  -->
    <script type="text/javascript" src="js/libs/jquery/jquery.js"></script>
    <script
      type="text/javascript"
      src="js/libs/bootstrap/bootstrap.bundle.js"
    ></script>
    <script
      type="text/javascript"
      src="js/libs/jquery/base64/jquery.base64.js"
    ></script>
    <script
      type="text/javascript"
      src="js/libs/jquery/jsonViewer/jquery.json-editor.js"
    ></script>
    <script
      type="text/javascript"
      src="js/libs/jquery/jsonViewer/jquery.json-viewer.js"
    ></script>
    <script type="module" src="js/utils/utils.js"></script>
    <script type="module" src="js/app.js"></script>
  </head>

  <body>
   
    <!-- 1. Header -->
    <?php include 'components/nav.html';?>

    <!-- 2. Content -->    
    <?php include 'components/alert.html';?>
    <div class="container">
      <div class="accordion" id="general-accordion">
        <?php include 'components/base64.html';?>
        <?php include 'components/deleter.html';?>
        <?php include 'components/dictionaryBuilder.html';?>
        <?php include 'components/dictionary.html';?>
      </div>
    </div>
 </body>
</html>
