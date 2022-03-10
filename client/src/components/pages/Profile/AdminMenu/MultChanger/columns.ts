import {
  validateMultLevel,
  validateMultName
} from 'components/validate/adminValidate';

const columns = [
  {
    name: 'id',
    tag: 'span',
  },
  {
    name: 'name',
    tag: 'input',
    validator: validateMultName,
  },
  {
    name: 'level',
    tag: 'input',
    validator: validateMultLevel,
  },
  {
    name: 'serial',
    tag: 'span',
  },  
]

export default columns;