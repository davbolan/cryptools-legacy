import {
  loadBase64Handle,
  loadDeleterHandle,
  loadDictionaryBuilderHandle,
  loadDictionaryHandle,
} from './tools/tools.js';

import {
  LOCALHOST,
  HOSTNAME,
  PORT,
  HREF,
  PROTOCOL,
  WWW,
} from './utils/constant.js';
const DEBUG = true;

const initFooter = () => {
  const hostname = $(location).attr(HOSTNAME).delete(WWW);
  const protocol = $(location).attr(PROTOCOL) + '//';
  let port = hostname === LOCALHOST ? ':' + $(location).attr(PORT) : '';

  const fullHostname = hostname + port;
  const href = protocol + fullHostname;
  const $a = $('#web-link');
  $a.attr(HREF, href);
  $a.text(fullHostname);
};

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
  initFooter();
  initTooltips();
  loadToolsHandles();
  DEBUG && debug();
};

const debug = () => {
  const dict =
    'ola muy buenas pepe como estas, yo muy bien asi que adios me voy jose';
  $('#text-content').text(dict);

  const input =
    '{"separator":"","dict":{"a":"A","e":"E","i":"I","o":"O","u":"U"}}';
  $('#dict-json-content').text(input);
};

$(initApp);
