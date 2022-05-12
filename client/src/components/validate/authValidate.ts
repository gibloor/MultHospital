export const validateName = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (!/^[A-ZА-Я._%+-]{3,14}$/i.test(value)) {
    error = 'invalid';
  }
  return error;
};

export const validateLogin = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (!/^[A-Z0-9._%+-]{6,14}$/i.test(value)) {
    error = 'invalid';
  }
  return error;
};

export const validateEmail = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'invalid';
  }
  return error;
};

export const validatePassword = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (!/^[A-Z0-9._%+-]{6,20}$/i.test(value)) {
    error = 'invalid';
  }
  return error;
};