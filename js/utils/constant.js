export const JSON_FILENAME_TEMPLATE = 'dict_$date.json';
export const OUTPUT_FILENAME_TEMPLATE = 'output_$date.txt';
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

// ERRORS
export const ERROR = {
  INVALID_JSON_FORMAT:
    'El diccionario introducido no tiene un formato Json válido',
  DICT_FIELD_MISSING:
    "El diccionario Json introducido no tiene el campo 'dict'",
  COPYPASTE_FAILED:
    'Ha habido un error al copiar al cortapapeles. Por favor, copie el texto manualmente con <CTRL + C> o <CMD + C>.',
};

// WARNING
export const CONTENT_TYPE_MISSING =
  `El elemento '%ELEM_ID%' el cual se quiere copiar su contenido no tiene el atributo 'data-content-type'.${SEPARATOR.LINE}` +
  `Esto puede provocar problemas a la hora de copiar texto y esto puede no hacerse correctamente.${SEPARATOR.LINE}` +
  `Los valores disponibles para 'data-content-type' son: ${SEPARATOR.LINE}`;
