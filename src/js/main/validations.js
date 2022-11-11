const checkMinLength = (value, [minLength]) => {
  return Boolean(value) && value.length >= minLength;
};

const checkRegex = (value, [exp]) => {
  return Boolean(value) && new RegExp(exp).test(value);
};

export { checkMinLength, checkRegex };
