import moment from '../min/moment.min.js';
import copyToClipboard from '../utils/copyclipboard.js';
import showError from '../errors/alertError.js';
import { setEnableComponents, setVisibleComponents } from '../utils/utils.js';
import {
  JSON_FILENAME_TEMPLATE,
  DATE_FORMAT,
  CLICK,
  KEY_UP,
  KEY_DOWN,
  CHANGE,
  ENTER_KEY,
  CUSTOM_OPTION,
  SEPARATOR,
  DOUBLE_QUOTE,
  BACKSLASH,
  MIN_LOOPS,
  MAX_LOOPS,
  DEFAUL_DICT_CHAR_KEYS,
} from '../utils/constant.js';

let editor;

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

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#dictbuilder-textarea-result-id'));
  } catch (err) {
    showError(err.message);
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
    setVisibleComponents(false, $customSeparatorElem);
    $customSeparatorElem.val('');
  } else {
    setVisibleComponents(true, $customSeparatorElem);
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

  isValid &&= currentTarget.classList.contains(type);
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
  setEnableComponents(enableButtons, ...resultButtonsGroup);
};

const deleteNotAllowedChars = (text) => {
  return text
    .deleteAll(SEPARATOR.LINE)
    .deleteAll(DOUBLE_QUOTE)
    .deleteAll(BACKSLASH);
};
const cleanInputChars = () => {
  [$('#dictbuilder-list-id'), $('#separator-custom')].forEach(($elem) => {
    let dictVal = deleteNotAllowedChars($elem.val());
    $elem.val(dictVal);
  });
};

const processListWords = (listWords) => {
  listWords = listWords.deleteEmptyValues();
  listWords = listWords.uniq();
  return listWords;
};

const buildDict = (event) => {
  if (event && !isValidEvent(event)) return;
  cleanInputChars();
  const separator = separatorSelector();
  const dictTextCleaned = $('#dictbuilder-list-id').val().trim();
  let dict = '';
  if (dictTextCleaned) {
    dict = {};
    let listWords = dictTextCleaned.split(separator);
    listWords = processListWords(listWords);
    const keysDictSet = shuffle([...listWords]);
    const valuesDictSet = shuffle([...listWords]);
    keysDictSet.forEach((key, idx) => (dict[key] = valuesDictSet[idx]));
    dict = { separator, dict };
  }
  updateResult(dict);
};

const addDefaultDict = () => {
  const defaultText = DEFAUL_DICT_CHAR_KEYS;
  $('#dictbuilder-list-id').val(defaultText);
  $('#separator-list').val('');
  buildDict(false);
};

const loadDictionaryBuilderHandle = () => {
  const DICT_BUILDER_EVENTS = `${KEY_DOWN} ${KEY_UP} ${CHANGE} ${CLICK}`;
  $('.dict-builder').on(DICT_BUILDER_EVENTS, buildDict);
  $('.copy-dict').on(CLICK, copyResultToClipboard);
  $('.download-dict').on(CLICK, downloadJson);
  $('#open-modal-button').on(CLICK, modalButtonHandle);
  $('#add-default-dict').on(CLICK, addDefaultDict);
};

export default loadDictionaryBuilderHandle;
