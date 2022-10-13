const showError = (errorMsg) => {
  $('#alert-msg').text(errorMsg);
  $('#alert-component').fadeIn(150).delay(2500).fadeOut(150);
};

export default showError;
