const loadBase64Handle = () => {
  const textElem = $('#base64-text-id');
  const typeElem = $('#base64-type-id');
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

$(() => {
  loadBase64Handle();
  loadDeleterHandle();
});
