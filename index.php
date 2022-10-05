<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Crypts tools</title>

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
    <script type="text/javascript" src="js/jquery/jquery.js"></script>
    <script
      type="text/javascript"
      src="js/bootstrap/bootstrap.bundle.js"
    ></script>
    <script
      type="text/javascript"
      src="js/jquery/base64/jquery.base64.js"
    ></script>
    <script
      type="text/javascript"
      src="js/jquery/jsonViewer/jquery.json-editor.js"
    ></script>
    <script
      type="text/javascript"
      src="js/jquery/jsonViewer/jquery.json-viewer.js"
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

    
    <div style="text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;"><a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." target="_blank" href="https://www.000webhost.com/?utm_source=000webhostapp&amp;utm_campaign=000_logo&amp;utm_medium=website&amp;utm_content=footer_img"><img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png" alt="www.000webhost.com"></a></div>
  </body>
</html>
