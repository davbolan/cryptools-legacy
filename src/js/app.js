import loadContactHandle from './main/contact.js';
import loadDonationHandle from './main/donation.js';
import loadURLHandle from './main/url.js';
import {
  loadBase64Handle,
  loadReplacerHandle,
  loadDictionaryBuilderHandle,
  loadDictionaryHandle,
} from './tools/tools.js';

const initTooltips = () => {
  $('[data-bs-toggle="tooltip"]').tooltip({
    trigger: 'hover',
  });
};

const loadToolsHandle = () => {
  loadBase64Handle();
  loadReplacerHandle();
  loadDictionaryBuilderHandle();
  loadDictionaryHandle();
};

const initApp = () => {
  initTooltips();
  loadToolsHandle();
  loadDonationHandle();
  loadURLHandle();
  loadContactHandle();
};

$(initApp);
