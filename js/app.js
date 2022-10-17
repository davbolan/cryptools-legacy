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
};

$(initApp);
