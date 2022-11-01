import copyToClipboard from './copyclipboard.js';
import {
  HIDE,
  DISABLED,
  CONTENT_TYPES,
  CONTENT_TYPE_MISSING,
} from './constant.js';

const setVisibleComponents = (visible, ...$elems) => {
  $elems.forEach(($elem) => $elem.toggleClass(HIDE, !visible));
};

const setEnableComponents = (enable, ...$elems) => {
  $elems.forEach(($elem) => $elem.prop(DISABLED, !enable));
};

const showContentTypeMissingWarning = (elem) => {
  const elemId = elem.attr('id');
  const contentTypeMissing = CONTENT_TYPE_MISSING.replace('%ELEM_ID%', elemId)
    .concat(`\t- ${CONTENT_TYPES.TEXT}\n`)
    .concat(`\t- ${CONTENT_TYPES.VAL}\n`);
  console.warn(contentTypeMissing);
};

export {
  copyToClipboard,
  setEnableComponents,
  setVisibleComponents,
  showContentTypeMissingWarning,
};
