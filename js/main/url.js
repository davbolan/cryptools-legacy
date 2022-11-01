import { CHANGE } from '../utils/constant.js';

const expandTool = (elemIdentifier) => {
  $(elemIdentifier + '.collapse').collapse('show');
};

const loadLocationChangeHandle = () => {
  let elemIdentifier;
  if (location.hash) {
    elemIdentifier = location.hash;
  } else if (location.pathname) {
    const toolName = location.pathname.slice(1);
    elemIdentifier = `[data-tool="${toolName}"]`;
  }

  if (elemIdentifier) {
    expandTool(elemIdentifier);
  }
};

const loadURLHandle = () => {
  $(window.location).on(CHANGE, loadLocationChangeHandle);
  loadLocationChangeHandle();
};

export default loadURLHandle;
