import { KEY_UP } from '../utils/constant.js';

const loadDeleterHandle = () => {
  const $wordElem = $('#deleter-word-id');
  const $textElem = $('#deleter-text-id');
  const $resultElem = $('#deleter-result-id');

  const deleter = () => {
    $resultElem.text($textElem.val().deleteAll($wordElem.val()));
  };

  [$wordElem, $textElem].on(KEY_UP, deleter);
};

export default loadDeleterHandle;
