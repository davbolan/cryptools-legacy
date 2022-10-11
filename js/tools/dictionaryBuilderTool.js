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
  MIN_LOOPS,
  MAX_LOOPS,
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
  const loops = Math.random() * (MAX_LOOPS - MIN_LOOPS) + MIN_LOOPS; // Range from 2 to 10 loops
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
  const { type, keyCode, currentTarget } = event;
  let isValid = true;
  if ([KEY_UP, KEY_DOWN].includes(type) && keyCode === ENTER_KEY) {
    event.preventDefault();
    isValid = false;
  }

  const classnameElemList = currentTarget.className.split(' ');
  isValid &&= classnameElemList.includes(type);
  return isValid;
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

const cleanText = (dictText) => {
  dictText = dictText.replaceAll(LINE_SEPARATOR, '');
  $('#dictbuilder-list-id').val(dictText);
  return dictText.trim();
};

const buildDict = (event) => {
  if (!isValidEvent(event)) return;
  const dictText = $('#dictbuilder-list-id').val();
  const textCleaned = cleanText(dictText).trim();
  let dict = '';
  if (textCleaned) {
    dict = {};
    const separator = separatorSelector();
    let listWords = textCleaned.split(separator);
    listWords = listWords.filter((item) => item); // Clean empty values
    listWords = [...new Set(listWords)]; // Clean duplicated values

    const keysDictSet = shuffle([...listWords]);
    const valuesDictSet = shuffle([...listWords]);
    keysDictSet.forEach((key, idx) => (dict[key] = valuesDictSet[idx]));
    dict = { separator, dict };
  }
  updateResult(dict);
};

const loadDictionaryBuilderHandle = () => {
  const DICT_BUILDER_EVENTS = `${KEY_DOWN} ${KEY_UP} ${CHANGE} ${CLICK}`;
  $('.dict-builder').on(DICT_BUILDER_EVENTS, buildDict);
  $('.copy-dict').on(CLICK, copyToClipboard);
  $('.download-dict').on(CLICK, downloadJson);
  $('#open-modal-button').on(CLICK, modalButtonHandle);
};

export default loadDictionaryBuilderHandle;
