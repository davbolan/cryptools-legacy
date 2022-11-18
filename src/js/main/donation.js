let qrCode = undefined;

const initQRCode = (text, logo) => {
  const options = {
    text,
    width: 100,
    height: 100,
    logoWidth: 30,
    logoHeight: 30,
    correctLevel: QRCode.CorrectLevel.Q,
    logo,
  };
  const qrCode = new QRCode(document.getElementById('qr-img'), options);
  qrCode.resize(100, 100);
  return qrCode;
};

const getCoinAddressLabel = (coinName) => {
  const template = $('#coin-name-template').text();
  const coinAdressLabel = template.replace(COIN_TEMPLATE, coinName);
  return coinAdressLabel;
};

const setQRCoinName = (name) => {
  const coinName = getCoinAddressLabel(name);
  $('#coin-name').text(coinName);
};

const setQRCoinAddress = (address) => {
  $('#coin-address-text').text(address);
};

const setQRimage = (shortname, address) => {
  if (qrCode) qrCode.clear();
  const logo = `/assets/icons/crypto-currency/${shortname}.svg`;
  qrCode = initQRCode(address, logo);
};

const processQRElemsVisibility = (showQR) => {
  setVisibleComponents(showQR, $('#qr-cell'));
  setVisibleComponents(!showQR, $('#qr-label-cell'));
};

const loadCoinInfo = (event) => {
  const coinCell = event.currentTarget;
  const { name, shortname, address } = coinCell.dataset;
  const showQR = true;
  processQRElemsVisibility(showQR);
  setQRCoinName(name);
  setQRCoinAddress(address);
  setQRimage(shortname, address);
};

const resetCoinInfoModal = () => {
  const showQR = true;
  processQRElemsVisibility(!showQR);
};

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#coin-address-text'));
  } catch (err) {
    if (err instanceof CryptoolsCopypasteError) {
      Alert(err.message, DANGER);
    } else throw err;
  }
};

const loadDonationHandle = () => {
  $('.coin-cell').on(CLICK, loadCoinInfo);
  $('#crypto-info-modal').on(HIDDEN_BS_MODAL, resetCoinInfoModal);
  $('#coin-address-text').on(CLICK, copyResultToClipboard);
};
