import {
  CLICK,
  CHANGE,
  CHAR_SEPARATOR,
  SPACE_SEPARATOR,
  CRYPTOOLS_JSON_ERROR,
  ERROR,
} from '../utils/constant.js';

import CryptoolsJsonError from '../errors/cryptoolsJsonError.js';

const dictPanel = {
  inputId: '#dict-file-input',
  buttonId: '#dict-file-button',
  contentId: '#dict-json-content',
};

const textPanel = {
  inputId: '#text-file-input',
  buttonId: '#text-file-button',
  contentId: '#text-content',
};

const loadInputFileHandle = ($inputEl, $targetEl) => {
  let file = $inputEl[0].files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (e) => {
    const result = e.target.result;
    $targetEl.val(result);
    $inputEl.val('');
  };
};

const loadButtonFileHandle = (fileInput) => fileInput.click();

const loadPanel = (panel) => {
  const $fileInput = $(panel.inputId);
  const $fileButton = $(panel.buttonId);
  const $textTarget = $(panel.contentId);

  $fileInput.on(CHANGE, () => loadInputFileHandle($fileInput, $textTarget));
  $fileButton.on(CLICK, () => loadButtonFileHandle($fileInput));
};

const loadPanels = () => {
  loadPanel(dictPanel);
  loadPanel(textPanel);
};

const getJson = (jsonStr) => {
  let dictJson = {};
  try {
    dictJson = JSON.parse(jsonStr);
  } catch (err) {
    throw new CryptoolsJsonError(ERROR.INVALID_JSON_FORMAT);
  }
  return dictJson;
};

const replaceWord = (word, newWord) => {
  newWord ||= word;
  return word.replace(word, newWord);
};

const parseSeparator = (separator) =>
  separator || (separator === '' ? CHAR_SEPARATOR : SPACE_SEPARATOR);

const parseDict = (dict) => {
  if (!dict) {
    throw new CryptoolsJsonError(ERROR.DICT_FIELD_MISSING);
  }
  return dict;
};

const showAlertError = (errorMsg) => {
  $('#alert-msg').text(errorMsg);
  $('#alert-component').fadeIn(150).delay(2500).fadeOut(150);
};

const processText = (dictJson, textToProcess) => {
  const dict = parseDict(dictJson.dict);
  const separator = parseSeparator(dictJson.separator);
  const dictEntries = new Map(Object.entries(dict));
  const textToProcessSplitted = textToProcess.split(separator);
  let wordProcessedList = [];
  let wordReplaced = '';

  for (const word of textToProcessSplitted) {
    wordReplaced = replaceWord(word, dictEntries.get(word));
    wordProcessedList.push(wordReplaced);
  }

  const textProcessed = wordProcessedList.join(separator);

  return textProcessed;
};

const transformButtonHandle = () => {
  const $dictTextPanel = $(dictPanel.contentId);
  const $inputTextPanel = $(textPanel.contentId);
  const $dictResultPanel = $('#dict-result-id');

  try {
    const dictJson = getJson($dictTextPanel.val());
    const textToProcess = $inputTextPanel.val();
    const textProcessed = processText(dictJson, textToProcess);
    $dictResultPanel.text(textProcessed);
  } catch (err) {
    if (err instanceof CryptoolsJsonError) {
      showAlertError(err.message);
    } else {
      throw err;
    }
  }
};

const loadButtonTransfomHandle = () => {
  const $transformButton = $('#transform-button');
  $transformButton.on(CLICK, transformButtonHandle);
};

const loadDictionaryHandle = () => {
  loadPanels();
  loadButtonTransfomHandle();
};

export default loadDictionaryHandle;
