const HIDE = 'd-none';

const elemVisibility = (elems, visible) => {
  elems.forEach((elem) => elem.toggleClass(HIDE, !visible));
};

const elemEnability = (elems, enable) => {
  elems.forEach((elem) => elem.prop('disabled', !enable));
};

const displayResult = (result) => {
  $('#dict-result-id').text(result);
};

const loadDictionaryMakerHandle = () => {
  // TODO: poner un boton para rehacer un nuevo diccionario sin que haya que tocar el texto.
  const listElem = $('#dict-list-id');
  const separatorListElem = $('#separator-list');
  const customSeparatorElem = $('#separator-custom');
  const openModalButtonElem = $('#open-modal-button');
  const redoDictButtonElem = $('#redo-dict-button');
  const modalContentElemId = '#json-modal-content';
  const resultElem = $('#dict-result-id');

  const dictMaker = (separatorValue) => {
    const listVal = listElem.val().trim();
    const resultButtonsGroup = [
      openModalButtonElem,
      redoDictButtonElem,
      copyDictButtonElem,
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

  const configureEditor = () => {
    const jsonViewerOptions = { withQuotes: true, withLinks: false };
    return new JsonEditor(modalContentElemId, jsonViewerOptions);
  };

  const editor = configureEditor();
  const modalButtonHandle = () => editor.load(JSON.parse(resultElem.text()));

  separatorListElem.on('change', separatorSelector);
  customSeparatorElem.on('keyup', separatorSelector);
  listElem.on('keyup', separatorSelector);
  redoDictButtonElem.on('click', separatorSelector);
  openModalButtonElem.on('click', modalButtonHandle);
};

export default loadDictionaryMakerHandle;
