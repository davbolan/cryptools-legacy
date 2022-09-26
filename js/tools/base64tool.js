import { ENCODE, KEY_UP, CHANGE } from '../utils/constant.js';

const loadBase64Handle = () => {
  const $textElem = $('#base64-text-id');
  const $typeElem = $('#base64-type-id');
  const $resultElem = $('#base64-result-id');

  const coderDecoder = () => {
    $resultElem.text(
      ENCODE === $typeElem.val()
        ? $.base64.encode($textElem.val())
        : $.base64.decode($textElem.val())
    );
  };

  $textElem.on(KEY_UP, coderDecoder);
  $typeElem.on(CHANGE, coderDecoder);
};

export default loadBase64Handle;
