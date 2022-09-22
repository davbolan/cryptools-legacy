const loadDeleterHandle = () => {
  const wordElem = $('#deleter-word-id');
  const textElem = $('#deleter-text-id');
  const resultElem = $('#deleter-result-id');

  const deleter = () => {
    resultElem.text(textElem.val().replaceAll(wordElem.val(), ''));
  };

  wordElem.on('keyup', deleter);
  textElem.on('keyup', deleter);
};

export default loadDeleterHandle;
