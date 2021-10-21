export const validateName = (value: string) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z._%+-]{3,14}$/i.test(value)) {
    error = 'Invalide name';
  }
  return error;
};

export const validateLogin = (value: string) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]{6,14}$/i.test(value)) {
    error = 'Invalid login';
  }
  return error;
};

export const validatePassword = (value: string) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]{6,14}$/i.test(value)) {
    error = 'Invalid password';
  }
  return error;
};