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
  $('.dict-panel').each(
    (i, elem) => (allPanelsHaveContent &&= Boolean(elem.value.trim()))
  );

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

const loadPanels = () => [dictPanel, textPanel].forEach(loadPanel);

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

const parseSeparator = (separator) => separator || SEPARATOR.CHAR;

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
  const wordProcessedList = textToProcessSplitted.map((word) =>
    replaceWord(word, dictMap.get(word))
  );
  const textProcessed = wordProcessedList.join(separator);
  return textProcessed;
};

const getResultButtonsGroupDictionary = () => {
  return [$('#copy-dict-result-button'), $('#download-dict-result-button')];
};

const transformButtonHandle = () => {
  const resultButtonsGroup = getResultButtonsGroupDictionary();
  const $dictTextPanel = $(dictPanel.contentId);
  const $inputTextPanel = $(textPanel.contentId);
  const $dictResultPanel = $('#dict-result-id');

  try {
    const dictJson = getJson($dictTextPanel.val());
    const textToProcess = $inputTextPanel.val();
    const textProcessed = processText(dictJson, textToProcess);
    $dictResultPanel.text(textProcessed);
    setEnableComponents(true, ...resultButtonsGroup);
  } catch (err) {
    setEnableComponents(false, ...resultButtonsGroup);

    if (err instanceof CryptoolsJsonError) {
      Alert(err.message, DANGER);
    } else {
      throw err;
    }
  }
};

const copyResultToClipboardDictionary = () => {
  try {
    copyToClipboard($('#dict-result-id'));
  } catch (err) {
    Alert(err.message, DANGER);
  }
};

const downloadResult = () => {
  const result = $('#dict-result-id').text();
  const href = 'data:text/plain;charset=UTF-8,' + encodeURIComponent(result);
  const download = 'output.txt';

  $('#output-dict-download-link').prop({ href, download });
  $('#output-dict-download-button').click();
};

const loadDictionaryHandle = () => {
  loadPanels();
  $('#transform-button').on(CLICK, transformButtonHandle);
  $('#copy-dict-result-button').on(CLICK, copyResultToClipboardDictionary);
  $('.download-output-dict').on(CLICK, downloadResult);
};
