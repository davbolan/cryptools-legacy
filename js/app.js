import {
  loadBase64Handle,
  loadDeleterHandle,
  loadDictionaryBuilderHandle,
  loadDictionaryHandle,
} from './tools/tools.js';

const DEBUG = false;

const initTooltips = () => {
  $('[data-bs-toggle="tooltip"]').tooltip({
    trigger: 'hover',
  });
};

const loadToolsHandles = () => {
  loadBase64Handle();
  loadDeleterHandle();
  loadDictionaryBuilderHandle();
  loadDictionaryHandle();
};

const initApp = () => {
  initTooltips();
  loadToolsHandles();
};

$(initApp);
