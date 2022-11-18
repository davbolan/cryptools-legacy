const initTooltips = () => {
  $('[data-bs-toggle="tooltip"]').tooltip({
    trigger: 'hover',
  });
};

const loadToolsHandle = () => {
  loadBase64Handle();
  loadDeleterHandle();
  loadDictionaryBuilderHandle();
  loadDictionaryHandle();
};

const initApp = () => {
  initTooltips();
  loadToolsHandle();
  loadDonationHandle();
  loadURLHandle();
};

$(initApp);
