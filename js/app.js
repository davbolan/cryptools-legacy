import loadBase64Handle from './tools/base64tool.js';
import loadDeleterHandle from './tools/deleterTool.js';
import loadDictionaryBuilderHandle from './tools/dictionaryBuilderTool.js';

const DEBUG = false;

$(() => {
const initApp = () => {
  loadBase64Handle();
  loadDeleterHandle();
  loadDictionaryBuilderHandle();
};

$(initApp);
