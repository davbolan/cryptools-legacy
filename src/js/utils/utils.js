const setVisibleComponents = (visible, ...$elems) => {
  $elems.forEach(($elem) => $elem.toggleClass(HIDE, !visible));
};

const setEnableComponents = (enable, ...$elems) => {
  $elems.forEach(($elem) => $elem.prop(DISABLED, !enable));
};

const showContentTypeMissingWarning = (elem) => {
  const elemId = elem.attr('id');
  const contentTypeMissing = CONTENT_TYPE_MISSING.replace(
    ELEM_ID_TEMPLATE,
    elemId
  )
    .concat(`\t- ${CONTENT_TYPES.TEXT}\n`)
    .concat(`\t- ${CONTENT_TYPES.VAL}\n`);
  console.warn(contentTypeMissing);
};

const encodeBase64 = (text) => btoa(encodeURIComponent(text));
const decodeBase64 = (text) => decodeURIComponent(atob(text));
