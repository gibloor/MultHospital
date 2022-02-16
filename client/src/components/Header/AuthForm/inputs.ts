import {
  validateName,
  validateLogin,
  validatePassword,
  validateEmail
} from 'components/validate/authValidate';

const inputs = [
  {
    name: 'name',
    validator: validateName,
    signIn: false,
  },
  {
    name: 'login',
    validator: validateLogin,
    signIn: true,
  },
  {
    name: 'email',
    validator: validateEmail,
    signIn: false,
  },
  {
    name: 'password',
    validator: validatePassword,
    signIn: true,
  },
]

export default inputs;