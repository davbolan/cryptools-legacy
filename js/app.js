import loadBase64Handle from './tools/base64tool.js';
import loadDeleterHandle from './tools/deleterTool.js';
import loadDictionaryMakerHandle from './tools/dictionaryMakerTool.js';

const DEBUG = false;

$(() => {
  loadBase64Handle();
  loadDeleterHandle();
  loadDictionaryMakerHandle();
});
