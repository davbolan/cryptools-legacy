<!DOCTYPE html>
<?php
if (!defined("ROOT_PATH")) {
  define("ROOT_PATH", __DIR__);
}
require ROOT_PATH . '/src/php/variables.php';
require ROOT_PATH . '/src/php/paths.php';
require ROOT_PHP_PATH . '/utils.php';
require ROOT_I18N_PATH . "/loader.php";
?>
<html lang="<?php echo $lang; ?>" class="with-scrollbar">
  <head>
    <title><?php echo WEB_TITLE; ?></title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="<?php echo $web_description; ?>" />
    <meta http-equiv="Content-Language" content="<?php echo $lang; ?>" />
    <meta name="distribution" content="global" />

    <link rel="canonical" href="<?php echo WEB_ROOT; ?>" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <link rel="stylesheet" href="/css/bootstrap/bootstrap.css" />
    <link
      rel="stylesheet"
      href="/css/bootstrap-icons/bootstrap-icons.min.css"
    />

    <link rel="stylesheet" href="/css/jsonviewer/jquery.json-viewer.css" />
    <link rel="stylesheet" href="/css/variables.css" />
    <link rel="stylesheet" href="/css/theme.css" />
    <link rel="stylesheet" href="/css/styles.css" />

    <script type="text/javascript" src="/src/js/min/jquery.min.js"></script>
    <script
      type="text/javascript"
      src="/src/js/min/bootstrap.bundle.min.js"
    ></script>
    <script
      type="text/javascript"
      src="/src/js/min/jquery.json-editor.min.js"
    ></script>

    <script
      type="text/javascript"
      src="/src/js/min/easy.qrcode.min.js"
    ></script>
    <script type="text/javascript">
      const LANGUAGE = '<?php echo $lang; ?>';
    </script>
    <script type="text/javascript" src="/src/js/utils/prototypes.js"></script>
    <script type="text/javascript" src="/src/js/utils/constant.js"></script>
    <script type="text/javascript" src="/src/js/utils/utils.js"></script>
    <script
      type="text/javascript"
      src="/src/js/errors/cryptoolsCopypasteError.js"
    ></script>
    <script
      type="text/javascript"
      src="/src/js/errors/cryptoolsJsonError.js"
    ></script>
    <script type="text/javascript" src="/src/js/main/alert.js"></script>
    <script type="text/javascript" src="/src/js/main/donation.js"></script>
    <script type="text/javascript" src="/src/js/main/url.js"></script>
    <script
      type="text/javascript"
      src="/src/js/utils/copyclipboard.js"
    ></script>
    <script type="text/javascript" src="/src/js/utils/chars.js"></script>
    <script type="text/javascript" src="/src/js/tools/base64tool.js"></script>
    <script type="text/javascript" src="/src/js/tools/deleterTool.js"></script>
    <script
      type="text/javascript"
      src="/src/js/tools/dictionaryBuilderTool.js"
    ></script>
    <script
      type="text/javascript"
      src="/src/js/tools/dictionaryTool.js"
    ></script>

    <script type="text/javascript" src="/src/js/app.js"></script>
  </head>

  <body>
    <?php require ROOT_COMPONENTS_PATH . '/navbar.html' ?>
    <?php require ROOT_COMPONENTS_PATH . '/content.php' ?>
    <?php require ROOT_COMPONENTS_PATH . '/footer.html' ?>
    <?php require ROOT_COMPONENTS_PATH . '/alert.html' ?>
  </body>
</html>
