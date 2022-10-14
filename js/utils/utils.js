import copyToClipboard from './copyclipboard.js';
import { HIDE, DISABLED } from './constant.js';

const setVisibleComponents = (visible, ...$elems) => {
  $elems.forEach(($elem) => $elem.toggleClass(HIDE, !visible));
};

const setEnableComponents = (enable, ...$elems) => {
  $elems.forEach(($elem) => $elem.prop(DISABLED, !enable));
};

export { copyToClipboard, setEnableComponents, setVisibleComponents };
