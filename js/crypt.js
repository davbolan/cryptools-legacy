const HIDE = 'd-none';
const showElem = (elem) => elem.removeClass(HIDE);
const hideElem = (elem) => elem.addClass(HIDE);
  const resultElem = $('#base64-result-id');

  const coderDecoder = () => {
    resultElem.text(
      'encode' === typeElem.val()
        ? $.base64.encode(textElem.val())
        : $.base64.decode(textElem.val())
    );
  };

  textElem.on('keyup', coderDecoder);
  typeElem.on('change', coderDecoder);
};

const loadDeleterHandle = () => {
  /* const answerElem = $('input[type=radio][name=deleter-answer-name]'); */
  const wordElem = $('#deleter-word-id');
  const textElem = $('#deleter-text-id');
  const resultElem = $('#deleter-result-id');

  const deleter = () => {
    resultElem.text(textElem.val().replaceAll(wordElem.val(), ''));
  };

  wordElem.on('keyup', deleter);
  textElem.on('keyup', deleter);
};

// Tool #3
const loadDictionaryHandle = () => {
  // TODO: poner un boton para rehacer un nuevo diccionario sin que haya que tocar el texto.
  const modalContentId = '#json-modal-content';
  const listElem = $('#dict-list-id');
  const separatorListElem = $('#separator-list');
  const customSeparatorElem = $('#separator-custom');
  const openModalButton = $('#open-modal-button');
  const modalContent = $(modalContentId);
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

      showElem(openModalButton);
    } else {
      resultElem.text('');
      hideElem(openModalButton);
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

  const jsonViewerOptions = { withQuotes: true, withLinks: false };
  const editor = new JsonEditor(modalContentId, jsonViewerOptions);
  const modalButtonHandle = () => editor.load(JSON.parse(resultElem.text()));

  separatorListElem.on('change', separatorSelector);
  customSeparatorElem.on('keyup', separatorSelector);
  listElem.on('keyup', separatorSelector);
  openModalButton.on('click', modalButtonHandle);
};

$(() => {
  loadBase64Handle();
  loadDeleterHandle();
  loadDictionaryHandle();
});
