import Alert from '../main/alert.js';
import { CLICK, DANGER, KEY_UP } from '../utils/constant.js';
import copyToClipboard from '../utils/copyclipboard.js';
import { setEnableComponents } from '../utils/utils.js';

const copyResultToClipboard = () => {
  try {
    copyToClipboard($('#replacer-result-id'));
  } catch (err) {
    Alert(err.message, DANGER);
  }
};

const replacer = () => {
  const wordToReplace = $('#replacer-word-id').val();
  const textToProcess = $('#replacer-text-id').val();
  const textWithWordReplaced = textToProcess.deleteAll(wordToReplace);

  setEnableComponents(
    Boolean(textWithWordReplaced),
    $('#copy-replacer-result-button')
  );

  $('#replacer-result-id').text(textWithWordReplaced);
};

const loadReplacerHandle = () => {
  [$('#replacer-word-id'), $('#replacer-text-id')].on(KEY_UP, replacer);
  $('#copy-replacer-result-button').on(CLICK, copyResultToClipboard);
};

export default loadReplacerHandle;
