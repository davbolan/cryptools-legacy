import copyToClipboard from '../utils/copyclipboard.js';
import showError from '../errors/alertError.js';
import { setEnableComponents } from '../utils/utils.js';
import { ENCODE, KEY_UP, CHANGE, CLICK } from '../utils/constant.js';

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#base64-result-id'));
  } catch (err) {
    showError(err.message);
  }
};

const coderDecoder = () => {
  const $textElem = $('#base64-text-id');
  const $typeElem = $('input[name="flexRadioBase64Operation"]:checked');
  const text = $textElem.val();
  setEnableComponents(Boolean(text), $('#copy-base64result-button'));

  $('#base64-result-id').text(
    ENCODE === $typeElem.val() ? $.base64.encode(text) : $.base64.decode(text)
  );
};

const loadBase64Handle = () => {
  $('#base64-text-id').on(KEY_UP, coderDecoder);
  $('input[name="flexRadioBase64Operation"]').on(CHANGE, coderDecoder);
  $('#copy-base64result-button').on(CLICK, copyResultToClipboard);
};

export default loadBase64Handle;
