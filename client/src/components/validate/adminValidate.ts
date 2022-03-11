import React from 'react';

export const validateMultName = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (!/^[A-ZА-Я0-9&._%+-]{3,14}$/i.test(value)) {
    error = 'invalid';
  }
  return error;
};

export const validateMultLevel = (value: string) => {
  let error;
  if (!value) {
    error = 'required';
  } else if (!/^[0-9]{1,3}$/i.test(value)) {
    error = 'invalid';
  }
  return error;
};