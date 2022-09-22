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

export default loadBase64Handle;
