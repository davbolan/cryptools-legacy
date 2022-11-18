const getText = (elem) => {
  let text = '';
  if (elem instanceof jQuery) {
    const contentType = elem.data('content-type') ?? '';
    let getElemContent = () => elem.text();
    switch (contentType) {
      case CONTENT_TYPES.TEXT:
        getElemContent = () => elem.text();
        break;
      case CONTENT_TYPES.VAL:
        getElemContent = () => elem.val();
        break;
      default:
        showContentTypeMissingWarning(elem);

        break;
    }
    text = getElemContent();
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

const ie11copy = (text) => {
  try {
    window.clipboardData.setData('Text', text);
    return Promise.resolve();
  } catch (err) {
    throw new CryptoolsCopypasteError(ERROR.COPYPASTE_FAILED);
  }
};
const alternativeCopy = (text) => {
  let $textareaTemp = $('<textarea>', { class: HIDE, text });
  $('body').append($textareaTemp);
  $textareaTemp.focus();
  $textareaTemp.select();

  try {
    document.execCommand(COPY, true, $textareaTemp.val());
  } catch (err) {
    throw new CryptoolsCopypasteError(ERROR.COPYPASTE_FAILED);
  } finally {
    $textareaTemp.remove();
  }
};

const copyToClipboard = (elem) => {
  const text = getText(elem);
  if (navigator.clipboard) {
    mainCopy(text);
  } else if (window.clipboardData?.setData) {
    ie11copy(text);
  } else {
    alternativeCopy(text);
  }
};
