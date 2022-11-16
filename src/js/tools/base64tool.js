import Alert from '../main/alert.js';
import { CHANGE, CLICK, DANGER, ENCODE, KEY_UP } from '../utils/constant.js';
import copyToClipboard from '../utils/copyclipboard.js';
import {
  decodeBase64,
  encodeBase64,
  setEnableComponents,
  setVisibleComponents,
} from '../utils/utils.js';

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#base64-result-id'));
  } catch (err) {
    Alert(err.message, DANGER);
  }
};

const showDecodingError = () => {
  setVisibleComponents(true, $('#decode-base64-error'));
};

const encode = (text) => {
  return encodeBase64(text);
};

const decode = (text) => {
  let decodeResult = '';
  try {
    decodeResult = decodeBase64(text);
  } catch (err) {
    showDecodingError();
  }
  return decodeResult;
};

const coderDecoder = () => {
  const $textElem = $('#base64-text-id');
  const $typeElem = $('input[name="flexRadioBase64Operation"]:checked');
  const text = $textElem.val();
  setEnableComponents(Boolean(text), $('#copy-base64result-button'));
  setVisibleComponents(false, $('#decode-base64-error'));
  $('#base64-result-id').text(
    ENCODE === $typeElem.val() ? encode(text) : decode(text)
  );
};

const loadBase64Handle = () => {
  $('#base64-text-id').on(KEY_UP, coderDecoder);
  $('input[name="flexRadioBase64Operation"]').on(CHANGE, coderDecoder);
  $('#copy-base64result-button').on(CLICK, copyResultToClipboard);
};

export default loadBase64Handle;
