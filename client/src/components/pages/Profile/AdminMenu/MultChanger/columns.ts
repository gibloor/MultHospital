import {
  validateMultLevel,
  validateMultName
} from 'components/validate/adminValidate';

const columns = [
  {
    name: 'name',
    type: 'string',
    validator: validateMultName,
  },
  {
    name: 'level',
    type: 'number',
    validator: validateMultLevel,
  },
  {
    name: 'serial',
    type: 'number',
    validator: validateMultLevel,
  },  
]

export default columns;