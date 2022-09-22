const HIDE = 'd-none';
const showElem = (elem) => elem.removeClass(HIDE);
const hideElem = (elem) => elem.addClass(HIDE);

const loadDictionaryHandle = () => {
  // TODO: poner un boton para rehacer un nuevo diccionario sin que haya que tocar el texto.
  const listElem = $('#dict-list-id');
  const separatorListElem = $('#separator-list');
  const customSeparatorElem = $('#separator-custom');
  const openModalButtonElem = $('#open-modal-button');
  const modalContentElemId = '#json-modal-content';
  const resultElem = $('#dict-result-id');

  const dictMaker = (separatorValue) => {
    const listVal = listElem.val().trim();

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

      resultElem.text(JSON.stringify(result));

      showElem(openModalButtonElem);
    } else {
      resultElem.text('');
      hideElem(openModalButtonElem);
    }
  };

  const separatorSelector = () => {
    let separatorValue = separatorListElem.val();

    if (separatorValue !== 'customOption') {
      hideElem(customSeparatorElem);
      customSeparatorElem.val('');
    } else {
      showElem(customSeparatorElem);
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
  openModalButtonElem.on('click', modalButtonHandle);
};

export default loadDictionaryHandle;
