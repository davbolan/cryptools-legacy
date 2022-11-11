<?php
$rowTemplate = file_get_contents(ROOT_COMPONENTS_TEMPLATES_PATH . '/cell-coin-template.html');
$jsonCoinsInfo = file_get_contents(ROOT_RESOURCES_PATH . '/coins-info.json');
$coinsData = json_decode($jsonCoinsInfo, true);
$coinRows = array();
foreach ($coinsData as $jsonDataKey => $jsonCoinData) {
  $coinRow = $rowTemplate;
  foreach ($jsonCoinData as $coinDataKey => $coinDataValue) {
    $coinDataKeyUC = strtoupper($coinDataKey);
    $coinRow = str_replace("{" . $coinDataKeyUC . "}", $coinDataValue, $coinRow);
  }
  $coinRows[] = $coinRow;
}
$coinRowsStr = implode("", $coinRows)
  ?>

<div class="container">
  <div class="row g-2">
    <?php echo $coinRowsStr; ?>
    <div class="col-12 border-top ">
      <div id="qr-cell" class="row d-none qr-cell">
        <div class="d-flex justify-content-center">
          <span id="coin-name-template" class="d-none">
            <?php echo DONATION_COIN_ADDRESS ?>
          </span>
          <span id="coin-name">Coin address</span>
        </div>
        <div id="qr-img" class="d-flex justify-content-center qr-container my-2"></div>
        <div class="d-flex justify-content-center">
          <samp id="coin-address-text" class="color-ct-blue coin-address" data-content-type="text">
            Coin address
          </samp>
        </div>
      </div>
      <div id="qr-label-cell" class="d-flex justify-content-center mt-4 ">
        <p class="h4 text-justify color-ct-blue-light-variant fw-light fst-italic">
          <?php echo DONATION_SELECT_CRYPTO ?>
        </p>
      </div>
    </div>
  </div>
</div>