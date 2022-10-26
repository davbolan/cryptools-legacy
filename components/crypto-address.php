<?php 


$row_template = file_get_contents(__ROOTPATH__.'/components/templates/row-coin-template.html');
$jsonCoinsInfo = file_get_contents(__ROOTPATH__.'/resources/coins-info.json');
$coins_data = json_decode($jsonCoinsInfo, true);

foreach ($coins_data as $jsonDataKey => $jsonCoinData) {
    $coinRow = $row_template;
    foreach ($jsonCoinData as $coinDataKey => $coinDataValue) {
        $coinDataKeyUC = strtoupper($coinDataKey);
        $coinRow = str_replace("%$coinDataKeyUC%", $coinDataValue, $coinRow );
    }
    echo $coinRow;
  }
?>

<div  class="col-12 border-top ">
  <div id="qr-cell" class="row d-none qr-cell">
    <div class="d-flex justify-content-center">
      <span id="coin-name-template" class="d-none"><?php echo COIN_ADDRESS?></span>
      <span id="coin-name">Coin address</span>
    </div>
    <div id="qr-img" class="d-flex justify-content-center qr-container my-2"></div>
    <div class="d-flex justify-content-center">
      <samp id="qr-address" class="color-ct-blue coin-address">
        Coin address
      </samp>
    </div>
  </div>
  <div id="qr-label-cell" class="d-flex justify-content-center mt-4 ">
    <p class="h4 text-justify color-ct-blue-light-variant fw-light fst-italic"><?php echo SELECT_CRYPTO?> </p>
  </div>
</div>
