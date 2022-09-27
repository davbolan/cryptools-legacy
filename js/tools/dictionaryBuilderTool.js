import moment from '../moment/moment.js';
import {
  HIDE,
  DISABLED,
  JSON_FILENAME_TEMPLATE,
  DATE_FORMAT,
  CLICK,
  KEY_UP,
  CHANGE,
  COPY,
  CUSTOM_OPTION,
} from '../utils/constant.js';

const elemVisibility = (elems, visible) => {
  elems.forEach((elem) => elem.toggleClass(HIDE, !visible));
};

const elemEnability = (elems, enable) => {
  elems.forEach((elem) => elem.prop(DISABLED, !enable));
};

const displayResult = (result) => {
  $('#dict-result-id').text(result);
  $('#dict-textarea-result-id').val(result);
};

const shuffle = (list) => {
  const loops = Math.random() * (10 - 2) + 2;
  for (let i = 0; i < loops; i++) {
    list = list.sort((a, b) => 0.5 - Math.random());
  }
  return list;
};

const loadDictionaryBuilderHandle = () => {
  const $listElem = $('#dict-list-id');
  const $separatorListElem = $('#separator-list');
  const $customSeparatorElem = $('#separator-custom');
  const $openModalButton = $('#open-modal-button');
  const $redoDictButton = $('#redo-dict-button');
  const $copyDictButton = $('#copy-dict-button');
  const $downloadDictButton = $('#download-dict-button');
  const $copyDictModalButton = $('#copy-dict-modal-button');
  const $downloadDictModalButton = $('#download-dict-modal-button');
  const $modalContentElemId = '#json-modal-content';
  const $resultElemTextarea = $('#dict-result-id');
  const $hiddenResultTextarea = $('#dict-textarea-result-id');

  const dictBuilder = (separatorValue) => {
    const listVal = $listElem.val().trim();
    const resultButtonsGroup = [
      $openModalButton,
      $redoDictButton,
      $copyDictButton,
      $downloadDictButton,
    ];

    if (listVal !== '') {
      let listDict = listVal.split(separatorValue);
      listDict = listDict.filter((item) => item); // Clean empty values
      listDict = [...new Set(listDict)]; // Clean duplicated values

      const keySet = shuffle([...listDict]);
      const valueSet = shuffle([...listDict]);
      let result = {};

      keySet.forEach((k, i) => (result[k] = valueSet[i]));
      displayResult(JSON.stringify(result, 0, 4));
      elemEnability(resultButtonsGroup, true);
    } else {
      displayResult('');
      elemEnability(resultButtonsGroup, false);
    }
  };

  const separatorSelector = () => {
    let separatorValue = $separatorListElem.val();
    if (separatorValue !== CUSTOM_OPTION) {
      elemVisibility([$customSeparatorElem], false);
      $customSeparatorElem.val('');
    } else {
      elemVisibility([$customSeparatorElem], false);
      separatorValue = $customSeparatorElem.val();
    }
    dictBuilder(separatorValue);
  };

  const copyToClipboard = () => {
    $(document).focus();
    if (navigator.clipboard) {
      navigator.clipboard.writeText($hiddenResultTextarea.val());
    } else {
      $hiddenResultTextarea.select();
      document.execCommand(COPY);
    }
  };

  const downloadJson = () => {
    const result = $hiddenResultTextarea.val();
    const download = JSON_FILENAME_TEMPLATE.replace(
      '$date',
      moment().format(DATE_FORMAT)
    );
    const linkProps = {
      href: 'data:text/plain;charset=UTF-8,' + encodeURIComponent(result),
      download,
    };

    $('#result-download-link').prop(linkProps);
    $('#result-download-button').click();
  };

  const configureEditor = () => {
    const jsonViewerOptions = { withQuotes: true, withLinks: false };
    return new JsonEditor($modalContentElemId, jsonViewerOptions);
  };

  const editor = configureEditor();
  const modalButtonHandle = () =>
    editor.load(JSON.parse($resultElemTextarea.text()));

  $separatorListElem.on(CHANGE, separatorSelector);
  [$customSeparatorElem, $listElem].on(KEY_UP, separatorSelector);
  $redoDictButton.on(CLICK, separatorSelector);
  [$copyDictButton, $copyDictModalButton].on(CLICK, copyToClipboard);
  [$downloadDictButton, $downloadDictModalButton].on(CLICK, downloadJson);
  $openModalButton.on(CLICK, modalButtonHandle);
};

export default loadDictionaryBuilderHandle;
