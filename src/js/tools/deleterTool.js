import copyToClipboard from '../utils/copyclipboard.js';
import Alert from '../main/alert.js';
import { setEnableComponents } from '../utils/utils.js';
import { KEY_UP, CLICK, DANGER } from '../utils/constant.js';

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#deleter-result-id'));
  } catch (err) {
    Alert(err.message, DANGER);
  }
};

const deleter = () => {
  const wordToDelete = $('#deleter-word-id').val();
  const textToProcess = $('#deleter-text-id').val();
  const textWithWordDeleted = textToProcess.deleteAll(wordToDelete);

  setEnableComponents(
    Boolean(textWithWordDeleted),
    $('#copy-deleter-result-button')
  );

  $('#deleter-result-id').text(textWithWordDeleted);
};

const loadDeleterHandle = () => {
  [$('#deleter-word-id'), $('#deleter-text-id')].on(KEY_UP, deleter);
  $('#copy-deleter-result-button').on(CLICK, copyResultToClipboard);
};

export default loadDeleterHandle;
