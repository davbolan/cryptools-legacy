import copyToClipboard from '../utils/copyclipboard.js';
import { setEnableComponents } from '../utils/utils.js';
import { ENCODE, KEY_UP, CHANGE, DISABLED, CLICK } from '../utils/constant.js';

const copyResultToClipboard = () => {
  copyToClipboard($('#base64-result-id'));
};

const coderDecoder = () => {
  const $textElem = $('#base64-text-id');
  const $typeElem = $('#base64-type-id');
  const text = $textElem.val();
  setEnableComponents(!!text, $('#copy-base64result-button'));

  $('#base64-result-id').text(
    ENCODE === $typeElem.val() ? $.base64.encode(text) : $.base64.decode(text)
  );
};

const loadBase64Handle = () => {
  $('#base64-text-id').on(KEY_UP, coderDecoder);
  $('#base64-type-id').on(CHANGE, coderDecoder);
  $('#copy-base64result-button').on(CLICK, copyResultToClipboard);
};

export default loadBase64Handle;
