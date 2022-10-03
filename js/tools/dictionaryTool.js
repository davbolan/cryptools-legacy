import { CLICK, CHANGE } from '../utils/constant.js';

const panels = [
  {
    inputId: '#dict-file-input',
    buttonId: '#dict-file-button',
    contentId: '#dict-json-content',
  },
  {
    inputId: '#text-file-input',
    buttonId: '#text-file-button',
    contentId: '#text-content',
  },
];

const loadInputFileHandle = ($inputEl, $targetEl) => {
  let file = $inputEl[0].files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (e) => {
    const result = e.target.result;
    $targetEl.val(result);
    $inputEl.val('');
  };
};

const loadButtonFileHandle = (fileInput) => fileInput.click();

const loadPanel = (panel) => {
  const $fileInput = $(panel.inputId);
  const $fileButton = $(panel.buttonId);
  const $textTarget = $(panel.contentId);

  $fileInput.on(CHANGE, () => loadInputFileHandle($fileInput, $textTarget));
  $fileButton.on(CLICK, () => loadButtonFileHandle($fileInput));
};

const loadDictionaryHandle = () => {
  panels.forEach((panel) => loadPanel(panel));
};

export default loadDictionaryHandle;
