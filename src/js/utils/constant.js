import loader from '../../../i18n/loader.js';

const i18n = loader(LANGUAGE);
export const JSON_FILENAME_TEMPLATE = 'dict_$date.json';
export const OUTPUT_FILENAME_TEMPLATE = 'output_$date.txt';
export const DATE_FORMAT = 'DDMMYY_HHmmss';
export const ENCODE = 'encode';
export const COPY = 'copy';
export const CUSTOM_OPTION = 'customOption';

// CLASS
export const HIDE = 'd-none';
export const DISABLED = 'disabled';
export const INVISIBLE = 'invisible';

// JQUERY EVENTS
export const CLICK = 'click';
export const SUBMIT = 'submit';
export const CHANGE = 'change';
export const KEY_UP = 'keyup';
export const KEY_DOWN = 'keydown';
export const PASTE = 'paste';
export const FOCUS = 'focus';
export const SELECT = 'select';

export const JQUERY_EVENT = {
  CLICK,
  CHANGE,
  KEY_UP,
  KEY_DOWN,
  PASTE,
  FOCUS,
  SELECT,
};

// BOOTSTRAP EVENTS
export const HIDDEN_BS_MODAL = 'hidden.bs.modal';

export const SEPARATOR = {
  CHAR: '',
  SPACE: ' ',
  LINE: '\n',
};

export const DOUBLE_QUOTE = '"';
export const BACKSLASH = '\\';
export const ENTER_KEY = 13;

export const CONTENT_TYPES = {
  TEXT: 'text',
  VAL: 'val',
};

// LOOPS
export const MIN_LOOPS = 2;
export const MAX_LOOPS = 10;

// STRING_TEMPLATES
export const FIELD_NAME_TEMPLATE = '{FIELD_NAME}';
export const PARAM_X_TEMPLATE = '{PARAM_X}';
export const ELEM_ID_TEMPLATE = '{ELEM_ID}';
export const COIN_TEMPLATE = '{COIN}';

// ERRORS
export const ERROR = {
  INVALID_JSON_FORMAT: i18n['INVALID_JSON_FORMAT'],
  DICT_FIELD_MISSING: i18n['DICT_FIELD_MISSING'],
  COPYPASTE_FAILED: i18n['COPYPASTE_FAILED'],
  FIELD_MISSING: i18n['FIELD_MISSING'],
  MIN_LENGHT_REQUIRED: i18n['MIN_LENGHT_REQUIRED'],
  WRONG_EMAIL_FORMAT: i18n['WRONG_EMAIL_FORMAT'],
};

// ALERT TYPE ERROR
export const DANGER = 'danger';
export const SUCCESS = 'success';

// WARNING
export const CONTENT_TYPE_MISSING = i18n['CONTENT_TYPE_MISSING'];

// HTTP METHODOS
export const POST = 'post';

// FORM DATA
export const NAME = i18n['NAME'];
export const EMAIL = i18n['EMAIL'];
export const MESSAGE = i18n['MESSAGE'];

// CONTACT EMAIL
export const SEND_EMAIL_URL = 'src/php/sendEmail.php';
