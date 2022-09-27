import loadBase64Handle from './tools/base64tool.js';
import loadDeleterHandle from './tools/deleterTool.js';
import loadDictionaryBuilderHandle from './tools/dictionaryBuilderTool.js';

const DEBUG = false;

const initTooltips = () => {
  $('[data-bs-toggle="tooltip"]').tooltip({
    trigger: 'hover',
  });
};

const initApp = () => {
  initTooltips();
  loadBase64Handle();
  loadDeleterHandle();
  loadDictionaryBuilderHandle();
};

$(initApp);