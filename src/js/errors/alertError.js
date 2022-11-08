const FADE_IN = 300;
const DELAY = 2500;
const FADE_OUT = 300;

const showError = (errorMsg) => {
  $('#alert-msg').text(errorMsg);
  $('#alert-component').fadeIn(FADE_IN).delay(DELAY).fadeOut(FADE_OUT);
};

export default showError;
