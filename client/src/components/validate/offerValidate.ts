export const validateQuestion = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (value.length > 200) {
    error = 'invalid';
  }
  return error;
};

export const validateShortText = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (value.length > 50) {
    error = 'invalid';
  }
  return error;
};

export const validateLongText = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (value.length > 1000) {
    error = 'invalid';
  }
  return error;
};