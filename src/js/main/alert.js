import { DANGER } from '../utils/constant.js';
const FADE_IN = 300;
const DELAY = 2500;
const FADE_OUT = 300;

const alertTypes = [DANGER];
const DEFAULT_TYPE = DANGER;

const dictTypes = (() => {
  const dict = {};

  dict[DANGER] = {
    class: 'alert-' + DANGER,
    icon: 'bi-exclamation-triangle-fill',
  };

  return dict;
})();

const removeOldAlertClass = () => {
  $('#alert-container').removeClass(alertTypes.map((type) => 'alert-' + type));
};

const removeOldAlertIcon = () => {
  Object.values(dictTypes).forEach((value) => {
    $('#alert-icon').removeClass(value.icon);
  });
};

const getAlertType = (type) => {
  return dictTypes[type] ?? DEFAULT_TYPE;
};

const Alert = (errorMsg, type = DEFAULT_TYPE) => {
  const alertType = getAlertType(type);
  removeOldAlertClass();
  removeOldAlertIcon();
  $('#alert-container').addClass(alertType.class);
  $('#alert-icon').addClass(alertType.icon);
  $('#alert-msg').text(errorMsg);
  $('#alert-component').fadeIn(FADE_IN).delay(DELAY).fadeOut(FADE_OUT);
};

export default Alert;
