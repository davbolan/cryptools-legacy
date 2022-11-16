<main>
  <div class="container mb-5 mt-2">
    <?php include ROOT_COMPONENTS_PATH . '/intro.php' ?>
    <h2 class="text-center">
      <?php echo $i18n["CONTENT_TOOLS"] ?>
    </h2>
    <div class="accordion" id="general-accordion">
      <?php include ROOT_COMPONENTS_TOOLS_PATH . '/base64.php' ?>
      <?php include ROOT_COMPONENTS_TOOLS_PATH . '/deleter.php' ?>
      <?php include ROOT_COMPONENTS_TOOLS_PATH . '/dictionaryBuilder.php' ?>
      <?php include ROOT_COMPONENTS_TOOLS_PATH . '/dictionary.php' ?>
    </div>
  </div>

</main>