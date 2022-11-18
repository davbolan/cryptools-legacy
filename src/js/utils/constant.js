const i18n = {
  LANGUAGE: 'Language',

  STEPS: 'Pasos',

  DONATION_DO_YOU_WANT_DONATE: 'Do you want donate me?',
  DONATION_SELECT_CRYPTO: 'Select a cryptocurrency...',
  DONATION_COIN_ADDRESS: '{COIN} address',

  CONTENT_INTRO: [
    'Cryptools is a group of tools aimed at obfuscation and encryption of text.',
    'You will be able to transform a text to base64 to use your own dictionary that replaces the words or characters that you want.',
    'Combine them however you like to further strengthen the encryption.',
    "Don't lose the dictionary if you ever want to recover the encrypted text!",
  ],
  CONTENT_TOOLS: 'Tools',

  B64_TITLE: 'Base64 coder/decoder',
  B64_INTRO: [
    'Did you know that base64 encoding can be used to obfuscate text?',
    "This way, for example, we can avoid outside eyes, because anyone who doesn't know what base64 is, will see a <em>mess</em> of characters.",
    "This way we can also prevent the text or words that it 'hides' from appearing in file searches.",
  ],
  B64_STEPS: [
    'Choose which operation on {base64} you want to do: encode or decode',
    'Enter the text you want to transform',
  ],
  B64_WHAT_DO_YOU_WANT_TO_DO: 'What do you want to do?',
  B64_ENCODE: 'Encode in base64',
  B64_DECODE: 'Decode from base64',
  B64_WHAT_TEXT: 'What is the text?',
  B64_RESULT: 'Result',
  B64_COPY_TO_CLIPBOARD: 'Copy result to clipboard',
  B64_ERROR_DECODE:
    'Error: it is not possible to perform the decoding with the entered characters. Check it out to continue.',

  DELETER_INTRO: [
    'Not much to explain, a simple tool to remove what we want from a text.',
  ],
  DELETER_STEPS: [
    'Enter the character, word or text you want to delete',
    'Enter the text you want to remove from',
  ],
  DELETER_TITLE: 'Deleter',
  DELETER_WHAT_WORD_OR_CHAR: 'What word or character do you want to delete?',
  DELETER_WHAT_TEXT: 'What is the text?',
  DELETER_RESULT: 'Result',
  DELETER_COPY_TO_CLIPBOARD: 'Copy result to clipboard',

  BUILDER_INTRO: [
    'A dictionary is made up of a set of keys, each of which has an associated value.',
    'Under this premise and taking advantage of its operation, we can transform a text into a completely different one.',
    'On the contrary, if we want to return to the original text, we only have to exchange the <samp>key</samp> with its <samp>value</samp>.',
    'With this utility, you can easily create a dictionary.',
    '<strong>Do not lose your dictionary or it will probably be impossible to recover the contents of your encrypted texts in the future!</strong>',
  ],
  BUILDER_STEPS: [
    'Select a predefined separator or indicate a custom one. You can even use words!',
    'Enter the text, characters, numbers... that will be used to create the dictionary. The more the better!',
    "If you don't like the result, you can redo it with a <em>click</em>",
    'You can also enlarge it to better visualize the result, even copy or download it.',
  ],
  BUILDER_TITLE: 'Dictionary builder',
  BUILDER_WHAT_SEPARATOR: 'What separator do you want to use?',
  BUILDER_WHAT_TEXT_TO_USE:
    'What text are you going to use to build the dictionary?',
  BUILDER_CHAR_TO_CHAR: 'Character to character',
  BUILDER_SPACE: 'Space',
  BUILDER_DOT: 'Dot',
  BUILDER_COMMA: 'Comma',
  BUILDER_COLON: 'Colon',
  BUILDER_ASTERISK: 'Asterisk',
  BUILDER_CUSTOM: 'Custom',
  BUILDER_SET_CUSTOM: 'Enter separator...',
  BUILDER_REDO_DICT: 'Redo dictionary',
  BUILDER_OPEN_WINDOW: 'Open in window',
  BUILDER_COPY_TO_CLIPBOARD: 'Copy result to clipboard',
  BUILDER_DOWNLOAD_DICT: 'Download dictionary',
  BUILDER_RESULT: 'Result',
  BUILDER_LOST_DICT_ADVISOR:
    "Remember! Don't lose your dictionary and keep it in a safe place!",
  BUILDER_ADD_DEFAULT_DICT: 'Create default {BASIC} or {EXTENDED} dictionary ',
  BUILDER_BASIC_DICT: 'basic',
  BUILDER_EXTENDED_DICT: 'extended',

  DICT_INTRO: [
    'With this utility you will be able to make uses of your dictionary, either with one that you already have from before, or one that you indicate manually.',
    'Of course, you also need the text you want to encrypt.',
  ],
  DICT_STEPS: [
    'Attach a dictionary from a file or write it manually',
    'Enter the text you want to encrypt',
    'Press the <samp>Transform</samp> button',
    'You can also enlarge it to better visualize the result, even copy or download it.',
  ],
  DICT_TITLE: 'Dictionary',
  DICT_DO_YOU_WANT_ENCODE_OR_DECODE: 'Do you want encode or decode?',
  DICT_ENCODE: 'Encode',
  DICT_DECODE: 'Decode',
  DICT_LOAD_JSON_OR_MANUAL:
    'Load dictionary from file (JSON format) o enter manually',
  DICT_LOAD_JSON_BTN: 'Load file',
  DICT_LOAD_INPUT_OR_MANUAL: 'Load text from file or write manually',
  DICT_LOAD_INPUT_FILE_BTN: 'Load text',
  DICT_TRANSFORM_BTN: 'Transform',
  DICT_RESULT: 'Result',
  DICT_COPY_TO_CLIPBOARD: 'Copy result to clipboard',
  DICT_DOWNLOAD_DICT: 'Download result',

  DOWNLOAD_CRYPTOOLS_ZIP: 'Download cryptools...',

  CONTACT: 'Contact',
  CONTACT_NAME: 'Name',
  CONTACT_EMAIL: 'E-mail',
  CONTACT_MESSAGE: 'Message',
  CONTACT_WHO_ARE_YOU: 'Who are you?',
  CONTACT_YOUR_MESSAGE: 'Write your question',
  CONTACT_SEND_MESSAGE: 'Send message',
  EMPTY_NAME_TXT: 'The name is empty',
  EMPTY_EMAIL_TXT: 'The email is empty',
  EMPTY_MSG_TXT: 'The message is empty',
  INVALID_EMAIL_TXT: 'Invalid email format',
  TEMP_EMAIL_TXT: 'The use of disposable emails is not allowed',
  TOO_SHORT_MSG_TXT: 'Message too short. The minimum length is 10 characters',
  VALID_EMAIL_TXT: 'Email sent successfully',
  CONTACT_ERROR_SENDING_EMAIL_TXT: 'There was an error sending the email',

  INVALID_JSON_FORMAT:
    'The entered dictionary does not have a valid JSON format',
  DICT_FIELD_MISSING:
    "The entered JSON dictionary does not have the 'dict' field",
  COPYPASTE_FAILED:
    'There has been an error copying to the clipboard. Please copy the text manually with <CTRL + C> or <CMD + C>.',
  FIELD_MISSING: 'You must complete the {FIELD_NAME}',
  MIN_LENGHT_REQUIRED:
    'The {FIELD_NAME} must contain at least {PARAM_1} characters',
  WRONG_EMAIL_FORMAT:
    'The email must be in a valid format (Ex: mail@domain.com)',
  CONTENT_TYPE_MISSING:
    "The element '{ELEM_ID}' which you want to copy its content does not have the attribute 'data-content-type'.This can cause problems when copying text and therefore it is not done correctly.\nThe available values for 'data-content-type' are:",

  NAME: 'NAME',
  EMAIL: 'EMAIL',
  MESSAGE: 'MESSAGE',
};
const JSON_FILENAME_TEMPLATE = 'dict_$date.json';
const OUTPUT_FILENAME_TEMPLATE = 'output_$date.txt';
const DATE_FORMAT = 'DDMMYY_HHmmss';
const ENCODE = 'encode';
const COPY = 'copy';
const CUSTOM_OPTION = 'customOption';

// CLASS
const HIDE = 'd-none';
const DISABLED = 'disabled';
const INVISIBLE = 'invisible';

// JQUERY EVENTS
const CLICK = 'click';
const SUBMIT = 'submit';
const CHANGE = 'change';
const KEY_UP = 'keyup';
const KEY_DOWN = 'keydown';
const PASTE = 'paste';
const FOCUS = 'focus';
const SELECT = 'select';

const JQUERY_EVENT = {
  CLICK,
  CHANGE,
  KEY_UP,
  KEY_DOWN,
  PASTE,
  FOCUS,
  SELECT,
};

// BOOTSTRAP EVENTS
const HIDDEN_BS_MODAL = 'hidden.bs.modal';

const SEPARATOR = {
  CHAR: '',
  SPACE: ' ',
  LINE: '\n',
};

const DOUBLE_QUOTE = '"';
const BACKSLASH = '\\';
const ENTER_KEY = 13;

const CONTENT_TYPES = {
  TEXT: 'text',
  VAL: 'val',
};

// LOOPS
const MIN_LOOPS = 2;
const MAX_LOOPS = 10;

// STRING_TEMPLATES
const FIELD_NAME_TEMPLATE = '{FIELD_NAME}';
const PARAM_X_TEMPLATE = '{PARAM_X}';
const ELEM_ID_TEMPLATE = '{ELEM_ID}';
const COIN_TEMPLATE = '{COIN}';

// ERRORS
const ERROR = {
  INVALID_JSON_FORMAT: i18n['INVALID_JSON_FORMAT'],
  DICT_FIELD_MISSING: i18n['DICT_FIELD_MISSING'],
  COPYPASTE_FAILED: i18n['COPYPASTE_FAILED'],
  FIELD_MISSING: i18n['FIELD_MISSING'],
  MIN_LENGHT_REQUIRED: i18n['MIN_LENGHT_REQUIRED'],
  WRONG_EMAIL_FORMAT: i18n['WRONG_EMAIL_FORMAT'],
};

// ALERT TYPE ERROR
const DANGER = 'danger';
const SUCCESS = 'success';

// WARNING
const CONTENT_TYPE_MISSING = i18n['CONTENT_TYPE_MISSING'];

// HTTP METHODOS
const POST = 'post';

// FORM DATA
const NAME = i18n['NAME'];
const EMAIL = i18n['EMAIL'];
const MESSAGE = i18n['MESSAGE'];

// CONTACT EMAIL
const SEND_EMAIL_URL = 'src/php/sendEmail.php';
