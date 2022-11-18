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
    <meta name="Robots" content="all" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo WEB_TITLE; ?>" />
    <meta property="og:site_name" content="<?php echo WEB_TITLE; ?>" />
    <meta property="og:image" content="<?php echo PATH_LOGO; ?>" />
    <meta property="og:description" content="<?php echo $web_description; ?>" />
    <meta property="og:url" content="<?php echo WEB_ROOT; ?>" />
    <meta property="og:locale" content="<?php echo $web_fullLang; ?>" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta
      property="twitter:description"
      content="<?php echo $web_description; ?>"
    />
    <meta property="twitter:title" content="<?php echo WEB_TITLE; ?>" />
    <meta property="twitter:site" content="@Daviletor" />
    <meta property="twitter:image" content="<?php echo PATH_LOGO; ?>" />
    <meta property="twitter:creator" content="@Daviletor" />
    <link rel="canonical" href="<?php echo WEB_ROOT; ?>" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <link rel="stylesheet" href="/css/bootstrap/bootstrap.css" />
    <link
      rel="stylesheet"
      href="/css/bootstrap-icons/bootstrap-icons.min.css"
    />
    <!--
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha256-IUOUHAPazai08QFs7W4MbzTlwEWFo7z/4zw8YmxEiko=" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" integrity="sha256-BpVWXFHWXgU/9RgZKOYHYE/qxzAEcmxn0n6MymuxIOw=" crossorigin="anonymous">
    -->
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
    <!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha256-xLI5SjD6DkojxrMIVBNT4ghypv12Xtj7cOa0AgKd6wA=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/easyqrcodejs@4.4.13/src/easy.qrcode.js" integrity="sha256-oiTj+ZVUvV845jrn6LeYh9jPjdmMk1dHUlp11Wd5DkA=" crossorigin="anonymous" defer></script>
    -->
    <script
      type="text/javascript"
      src="/src/js/min/easy.qrcode.min.js"
    ></script>
    <script type="text/javascript">
      const LANGUAGE = '<?php echo $lang; ?>';
    </script>
    <script type="module" src="/src/js/utils/prototypes.js"></script>
    <script type="module" src="/src/js/app.js"></script>
  </head>

  <body>
    <?php require ROOT_COMPONENTS_PATH . '/navbar.html' ?>
    <?php require ROOT_COMPONENTS_PATH . '/content.php' ?>
    <?php require ROOT_COMPONENTS_PATH . '/footer.html' ?>
    <?php require ROOT_COMPONENTS_PATH . '/alert.html' ?>
  </body>
</html>
