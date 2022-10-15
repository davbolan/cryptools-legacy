import copyToClipboard from '../utils/copyclipboard.js';
import showError from '../errors/alertError.js';
import CryptoolsJsonError from '../errors/cryptoolsJsonError.js';
import {
  ENCODE,
  DISABLED,
  CLICK,
  CHANGE,
  KEY_UP,
  PASTE,
  SEPARATOR,
  ERROR,
} from '../utils/constant.js';

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
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (e) => {
    const result = e.target.result;
    $targetEl.val(result);
    $inputEl.val('');
    $targetEl.trigger(PASTE);
  };
};

const loadButtonFileHandle = (fileInput) => fileInput.click();

const loadTextareaHandle = () => {
  let allPanelsHaveContent = true;
  $('.dict-panel').each((i, elem) => {
    const val = elem.value.trim();
    allPanelsHaveContent &&= !!val;
  });

  $('#transform-button').prop(DISABLED, !allPanelsHaveContent);
};

const loadPanel = (panel) => {
  const KEY_UP__PASTE = `${KEY_UP} ${PASTE}`;
  const $fileInput = $(panel.inputId);
  const $fileButton = $(panel.buttonId);
  const $textTarget = $(panel.contentId);

  $fileInput.on(CHANGE, () => loadInputFileHandle($fileInput, $textTarget));
  $fileButton.on(CLICK, () => loadButtonFileHandle($fileInput));
  $textTarget.on(KEY_UP__PASTE, loadTextareaHandle);
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
  separator || (separator === '' ? SEPARATOR.CHAR : SEPARATOR.SPACE);

const parseDict = (dict) => {
  if (!dict) {
    throw new CryptoolsJsonError(ERROR.DICT_FIELD_MISSING);
  }
  return dict;
};

const getCoderAndDecoderDict = (coderDict) => {
  const decoderDict = {};
  for (let key in coderDict) {
    decoderDict[coderDict[key]] = key;
  }

  return { coderDict, decoderDict };
};

const getDictMapByOperation = (dict) => {
  const { coderDict, decoderDict } = getCoderAndDecoderDict(dict);
  const coderDictMap = new Map(Object.entries(coderDict));
  const decoderDictMap = new Map(Object.entries(decoderDict));
  const operation = $("input[name='flexRadioDictOperation']:checked").val();
  return operation === ENCODE ? coderDictMap : decoderDictMap;
};

const processText = (dictJson, textToProcess) => {
  const dict = parseDict(dictJson.dict);
  const separator = parseSeparator(dictJson.separator);
  const dictMap = getDictMapByOperation(dict);
  const textToProcessSplitted = textToProcess.split(separator);
  const wordProcessedList = textToProcessSplitted.map((word) => {
  const wordProcessedList = textToProcessSplitted.map((word) =>
    replaceWord(word, dictMap.get(word))
  );
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
    console.log();
    $dictResultPanel.text(textProcessed);
  } catch (err) {
    if (err instanceof CryptoolsJsonError) {
      showError(err.message);
    } else {
      throw err;
    }
  }
};

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#dict-result-id'));
  } catch (err) {
    showError(err.message);
  }
};

const loadDictionaryHandle = () => {
  loadPanels();
  $('#transform-button').on(CLICK, transformButtonHandle);
  $('#copy-dict-result-button').on(CLICK, copyResultToClipboard);
};

export default loadDictionaryHandle;
