import {
  CHANGE,
  DANGER,
  DISABLED,
  EMAIL,
  ERROR,
  FIELD_NAME_TEMPLATE,
  HIDDEN_BS_MODAL,
  INVISIBLE,
  KEY_UP,
  MESSAGE,
  NAME,
  PARAM_X_TEMPLATE,
  POST,
  SEND_EMAIL_URL,
  SUBMIT,
  SUCCESS,
} from '../utils/constant.js';
import Alert from './alert.js';
import { checkMinLength, checkRegex } from './validations.js';

const { FIELD_MISSING, WRONG_EMAIL_FORMAT, MIN_LENGHT_REQUIRED } = ERROR;

const formFieldsSettings = {
  name: {
    name: NAME,
    validations: [
      {
        validation: checkMinLength,
        params: [1],
        error: FIELD_MISSING,
      },
    ],
  },
  email: {
    name: EMAIL,
    validations: [
      {
        validation: checkMinLength,
        params: [1],
        error: FIELD_MISSING,
      },
      {
        validation: checkRegex,
        params: [
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .source,
        ],
        error: WRONG_EMAIL_FORMAT,
      },
    ],
  },
  message: {
    name: MESSAGE,
    validations: [
      {
        validation: checkMinLength,
        params: [10],
        error: MIN_LENGHT_REQUIRED,
      },
    ],
  },
};

const emailAjaxSettings = {
  type: POST,
  url: SEND_EMAIL_URL,
  data: '',
};

const setEmailPostData = () => {
  emailAjaxSettings.data = $('#form-contact').serialize();
};

const formatError = (name, params, error) => {
  for (
    let indexParam = 0, paramTemplate = '';
    indexParam < params.length;
    indexParam++
  ) {
    paramTemplate = PARAM_X_TEMPLATE.replace('X', indexParam + 1);
    error = error.replaceAll(paramTemplate, params[indexParam]);
  }
  return error.replaceAll(FIELD_NAME_TEMPLATE, name);
};

const validateField = ({ name, value }) => {
  const { name: formName, validations } = formFieldsSettings[name];
  let msgError = '';
  validations.every(({ validation, params, error }) => {
    const valid = validation(value, params);
    if (valid) return true;
    msgError = formatError(formName, params, error);
  });

  return msgError;
};

const validateFormFields = (fieldsArray) => {
  const errors = {};
  fieldsArray.forEach((field) => {
    const error = validateField(field);
    if (Boolean(error)) errors[field.name] = error;
  });

  return errors;
};

const displayError = (invalidFields) => {
  Object.entries(invalidFields).forEach(([key, value]) => {
    $(`#${key}-input`).toggleClass('form-error', true);
    const $formErrorElem = $(`#${key}-error`);
    $formErrorElem.text(value);
    $formErrorElem.toggleClass(INVISIBLE, false);
  });
};
const closeContactModal = () => {
  bootstrap.Modal.getInstance($('#contact-modal')).hide();
};

const sendEmailCallbacks = {
  DONE: (data) => {
    Alert(data.message, SUCCESS);
    closeContactModal();
  },
  FAIL: ({ responseJSON: data }) => {
    Alert(data.message, DANGER);
  },
  ALWAYS: () => {
    $('#send-email-btn').prop(DISABLED, false);
  },
};

const sendEmail = () => {
  setEmailPostData();
  $('#send-email-btn').prop(DISABLED, true);
  $.ajax(emailAjaxSettings)
    .done(sendEmailCallbacks.DONE)
    .fail(sendEmailCallbacks.FAIL)
    .always(sendEmailCallbacks.ALWAYS);
};

const submitContact = (event) => {
  const formFieldsArray = $('#form-contact').serializeArray();
  try {
    const invalidFields = validateFormFields(formFieldsArray);
    if (!$.isEmptyObject(invalidFields)) {
      displayError(invalidFields);
    } else {
      sendEmail();
    }
  } catch (err) {
    $('#send-email-btn').prop(DISABLED, false);
  }
  event.preventDefault();
};

const cleanError = (event) => {
  const $elem = $(event.target);
  $elem.toggleClass('form-error', false);
  const elemName = $elem.attr('name');
  const $elemError = $(`#${elemName}-error`);
  $elemError.text('.');
  $elemError.toggleClass(INVISIBLE, true);
};

const resetModalFields = () => {
  Object.keys(formFieldsSettings).forEach((formField) => {
    $(`#${formField}-input`).val('');
    $(`#${formField}-error`).text('');
    $(`#${formField}-error`).toggleClass(INVISIBLE, true);
  });
};

const loadContactHandle = () => {
  const FORM_FIELDS_EVENTS = `${KEY_UP} ${CHANGE}`;
  $('#form-contact').on(SUBMIT, submitContact);
  $('.contact-field').on(FORM_FIELDS_EVENTS, cleanError);
  $('#contact-modal').on(HIDDEN_BS_MODAL, resetModalFields);
};

export default loadContactHandle;
