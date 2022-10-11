import moment from '../libs/moment/moment.js';
import {
  HIDE,
  DISABLED,
  JSON_FILENAME_TEMPLATE,
  DATE_FORMAT,
  CLICK,
  KEY_UP,
  KEY_DOWN,
  CHANGE,
  FOCUS,
  COPY,
  ENTER_KEY,
  CUSTOM_OPTION,
  LINE_SEPARATOR,
} from '../utils/constant.js';

let editor;

const setVisible = (visible, ...elems) => {
  elems.forEach((elem) => elem.toggleClass(HIDE, !visible));
};

const setEnable = (enable, ...elems) => {
  elems.forEach((elem) => elem.prop(DISABLED, !enable));
};

const setResult = (resultNoLinebreak, result) => {
  $('#dictbuilder-result-id').text(resultNoLinebreak);
  $('#dictbuilder-textarea-result-id').val(result);
};

const shuffle = (list) => {
  const loops = Math.random() * (10 - 2) + 2;
  for (let i = 0; i < loops; i++) {
    list = list.sort((a, b) => 0.5 - Math.random());
  }
  return list;
};

const copyToClipboard = () => {
  const $hiddenResultTextarea = $('#dictbuilder-textarea-result-id');
  $(document).trigger(FOCUS);
  if (navigator.clipboard) {
    navigator.clipboard.writeText($hiddenResultTextarea.val());
  } else {
    $hiddenResultTextarea.select();
    document.execCommand(COPY);
  }
};

const downloadJson = () => {
  const result = $('#dictbuilder-textarea-result-id').val();
  const href = 'data:text/plain;charset=UTF-8,' + encodeURIComponent(result);
  const download = JSON_FILENAME_TEMPLATE.replace(
    '$date',
    moment().format(DATE_FORMAT)
  );

  $('#result-download-link').prop({ href, download });
  $('#result-download-button').click();
};

const configureEditor = () => {
  const jsonViewerOptions = { withQuotes: true, withLinks: false };
  return new JsonEditor('#json-modal-content', jsonViewerOptions);
};

const modalButtonHandle = () => {
  editor ||= configureEditor();
  editor.load(JSON.parse($('#dictbuilder-result-id').text()));
};

const getResultButtonsGroup = () => {
  return [
    $('#open-modal-button'),
    $('#redo-dictbuilder-button'),
    $('#copy-dictbuilder-button'),
    $('#download-dictbuilder-button'),
  ];
};

const separatorSelector = () => {
  let separatorValue = $('#separator-list').val();
  const $customSeparatorElem = $('#separator-custom');
  if (separatorValue !== CUSTOM_OPTION) {
    setVisible(false, $customSeparatorElem);
    $customSeparatorElem.val('');
  } else {
    setVisible(true, $customSeparatorElem);
    separatorValue = $customSeparatorElem.val();
  }
  return separatorValue;
};

const isValidEvent = (event) => {
  const eventType = event.type;
  const classnameElemList = event.currentTarget.className.split(' ');
  return !!classnameElemList.find((className) => className === eventType);
};

const buildJsonStr = (resultDict, options = {}) => {
  let dictString = '';

  if (!options?.lineBreak) {
    const items = [];
    Object.entries(resultDict.dict).forEach(([key, value]) => {
      items.push(`"${key}": "${value}"`);
    });
    const itemsStr = items.join(', ');

    dictString = `{ "separator": "${resultDict.separator}", "dict": {${itemsStr}} }`;
  } else {
    dictString = JSON.stringify(resultDict, null, options?.spaces);
  }

  return dictString;
};

const updateResult = (resultDict) => {
  const resultButtonsGroup = getResultButtonsGroup();
  let resultNoLinebreak = '';
  let result = '';
  let enableButtons = false;

  if (resultDict) {
    resultNoLinebreak = buildJsonStr(resultDict, null);
    result = buildJsonStr(resultDict, { lineBreak: true, spaces: 4 });
    enableButtons = true;
  }
  setResult(resultNoLinebreak, result);
  setEnable(enableButtons, ...resultButtonsGroup);
};

const buildDict = (event) => {
  if (!isValidEvent(event)) return;

  const listValTrimmed = $('#dictbuilder-list-id').val().trim();
  let resultDict = '';
  if (listValTrimmed) {
    resultDict = {};
    const separator = separatorSelector();
    let listDict = listValTrimmed.split(separator);
    listDict = listDict.filter((item) => item); // Clean empty values
    listDict = [...new Set(listDict)]; // Clean duplicated values

    const keysDictSet = shuffle([...listDict]);
    const valuesDictSet = shuffle([...listDict]);
    keysDictSet.forEach((k, i) => (resultDict[k] = valuesDictSet[i]));
    resultDict = { separator, dict };
  }
  updateResult(resultDict);
};

const loadDictionaryBuilderHandle = () => {
  const DICT_BUILDER_EVENTS = `${KEY_DOWN} ${KEY_UP} ${CHANGE} ${CLICK}`;
  $('.dict-builder').on(DICT_BUILDER_EVENTS, buildDict);
  $('.copy-dict').on(CLICK, copyToClipboard);
  $('.download-dict').on(CLICK, downloadJson);
  $('#open-modal-button').on(CLICK, modalButtonHandle);
};

export default loadDictionaryBuilderHandle;
