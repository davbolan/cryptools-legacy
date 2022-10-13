export const JSON_FILENAME_TEMPLATE = 'dict_$date.json';
export const DATE_FORMAT = 'DDMMYY_HHmmss';
export const ENCODE = 'encode';
export const COPY = 'copy';
export const CUSTOM_OPTION = 'customOption';

// CLASS
export const HIDE = 'd-none';
export const DISABLED = 'disabled';

// JQUERY EVENTS
export const CLICK = 'click';
export const CHANGE = 'change';
export const KEY_UP = 'keyup';
export const KEY_DOWN = 'keydown';
export const PASTE = 'paste';
export const FOCUS = 'focus';
export const SELECT = 'select';

export const JQUERY_EVENTS = {
  CLICK,
  CHANGE,
  KEY_UP,
  KEY_DOWN,
  PASTE,
  FOCUS,
  SELECT,
};
export const CHAR_SEPARATOR = '';
export const SPACE_SEPARATOR = ' ';
export const LINE_SEPARATOR = '\n';
export const DOUBLE_QUOTE = '"';
export const BACKSLASH = '\\';
export const ENTER_KEY = 13;

export const CONTENT_TYPE = {
  TEXT: 'text',
  VAL: 'val',
};

// LOOPS
export const MIN_LOOPS = 2;
export const MAX_LOOPS = 10;

// ERRORS
export const ERROR = {
  INVALID_JSON_FORMAT:
    'El diccionario introducido no tiene un formato Json válido',
  DICT_FIELD_MISSING:
    "El diccionario Json introducido no tiene el campo 'dict'",
  COPYPASTE_FAILED:
    'Ha habido un error al copiar al cortapapeles. Por favor, copie el texto manualmente con ctrl+C o cmd+C.',
};
