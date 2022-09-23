const HIDE = 'd-none';

const elemVisibility = (elems, visible) => {
  elems.forEach((elem) => elem.toggleClass(HIDE, !visible));
};

const elemEnability = (elems, enable) => {
  elems.forEach((elem) => elem.prop('disabled', !enable));
};

const displayResult = (result) => {
  $('#dict-result-id').text(result);
  $('#dict-textarea-result-id').val(result);
};

const loadDictionaryMakerHandle = () => {
  // TODO: poner un boton para rehacer un nuevo diccionario sin que haya que tocar el texto.
  const listElem = $('#dict-list-id');
  const separatorListElem = $('#separator-list');
  const customSeparatorElem = $('#separator-custom');
  const openModalButton = $('#open-modal-button');
  const redoDictButton = $('#redo-dict-button');
  const copyDictButton = $('#copy-dict-button');
  const copyDictModalButton = $('#copy-dict-modal-button');
  const modalContentElemId = '#json-modal-content';
  const resultElemTextarea = $('#dict-result-id');
  const hiddenResultTextarea = $('#dict-textarea-result-id');

  const dictMaker = (separatorValue) => {
    const listVal = listElem.val().trim();
    const resultButtonsGroup = [
      openModalButton,
      redoDictButton,
      copyDictButton,
    ];

    if (listVal !== '') {
      let listDict = listVal.split(separatorValue);
      listDict = listDict.filter((item) => item); // Clean empty values
      listDict = [...new Set(listDict)]; // Clean duplicated values

      const shuffle = (list) => {
        const random = Math.random() * (10 - 2) + 2;
        for (let i = 0; i < random; i++) {
          list = list.sort((a, b) => 0.5 - Math.random());
        }
        return list;
      };

      const keySet = shuffle([...listDict]);
      const valueSet = shuffle([...listDict]);
      let result = {};

      keySet.forEach((k, i) => {
        result[k] = valueSet[i];
      });

      displayResult(JSON.stringify(result, 0, 4));
      elemEnability(resultButtonsGroup, true);
    } else {
      displayResult('');
      elemEnability(resultButtonsGroup, false);
    }
  };

  const separatorSelector = () => {
    let separatorValue = separatorListElem.val();

    if (separatorValue !== 'customOption') {
      elemVisibility([customSeparatorElem], false);
      customSeparatorElem.val('');
    } else {
      elemVisibility([customSeparatorElem], false);
      separatorValue = customSeparatorElem.val();
    }
    dictMaker(separatorValue);
  };

  const copyToClipboard = () => {
    $(document).focus();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(hiddenResultTextarea.val());
    } else {
      hiddenResultTextarea.select();
      document.execCommand('copy');
    }
  };

  const configureEditor = () => {
    const jsonViewerOptions = { withQuotes: true, withLinks: false };
    return new JsonEditor(modalContentElemId, jsonViewerOptions);
  };

  const editor = configureEditor();
  const modalButtonHandle = () =>
    editor.load(JSON.parse(resultElemTextarea.text()));

  separatorListElem.on('change', separatorSelector);
  customSeparatorElem.on('keyup', separatorSelector);
  listElem.on('keyup', separatorSelector);
  redoDictButton.on('click', separatorSelector);
  copyDictButton.on('click', copyToClipboard);
  copyDictModalButton.on('click', copyToClipboard);
  openModalButton.on('click', modalButtonHandle);
};

export default loadDictionaryMakerHandle;
