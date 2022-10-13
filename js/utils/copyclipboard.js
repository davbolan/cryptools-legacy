import CryptoolsCopypasteError from '../errors/CryptoolsCopypasteError.js';
import showError from '../errors/alertError.js';
import { COPY, ERROR, HIDE, FOCUS, SELECT, CONTENT_TYPES } from './constant.js';

const getText = (elem) => {
  let text = '';
  if (elem instanceof jQuery) {
    const contentType = elem.data('content-type');
    switch (contentType) {
      case CONTENT_TYPES.TEXT:
        text = elem.text();
        break;
      case CONTENT_TYPES.VAL:
        text = elem.val();
        break;
    }
  } else {
    text = elem;
  }

  return text;
};

const mainCopy = (text) => {
  try {
    navigator.clipboard.writeText(text);
  } catch (err) {
    throw new CryptoolsCopypasteError(ERROR.COPYPASTE_FAILED);
  }
};

const alternativeCopy = (text) => {
  let $textareaTemp = $('<textarea>', { class: HIDE, text });

  console.log($textareaTemp);
  $('body').append($textareaTemp);
  $textareaTemp.focus();
  $textareaTemp.select();

  try {
    if (!document.execCommand(COPY)) {
      throw '';
    }
  } catch (err) {
    throw new CryptoolsCopypasteError(ERROR.COPYPASTE_FAILED);
  } finally {
    $textareaTemp.remove();
  }
};

const copyToClipboard = (elem) => {
  const text = getText(elem);
  try {
    !navigator.clipboard ? mainCopy(text) : alternativeCopy(text);
  } catch (err) {
    showError(err.message);
  }
};

export default copyToClipboard;
