import copyToClipboard from '../utils/copyclipboard.js';
import showError from '../errors/alertError.js';
import { setEnableComponents } from '../utils/utils.js';
import { KEY_UP, CLICK } from '../utils/constant.js';

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#deleter-result-id'));
  } catch (err) {
    showError(err.message);
  }
};

const deleter = () => {
  const wordToDelete = $('#deleter-word-id').val();
  const textToProcess = $('#deleter-text-id').val();
  const textWithWordDeleted = textToProcess.deleteAll(wordToDelete);

  setEnableComponents(!!textWithWordDeleted, $('#copy-deleter-result-button'));

  $('#deleter-result-id').text(textWithWordDeleted);
};

const loadDeleterHandle = () => {
  [$('#deleter-word-id'), $('#deleter-text-id')].on(KEY_UP, deleter);
  $('#copy-deleter-result-button').on(CLICK, copyResultToClipboard);
};

export default loadDeleterHandle;
