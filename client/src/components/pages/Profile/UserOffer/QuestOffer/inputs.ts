import { validateQuestion, validateShortText } from "components/validate/offerValidate";

const inputs = [
  {
    name: 'question',
    validator: validateQuestion,
    class: 'long'
  },
  {
    name: 'answer',
    validator: validateShortText,
    class: 'short'
  },
  {
    name: 'false1',
    validator: validateShortText,
    class: 'short'
  },
  {
    name: 'false2',
    validator: validateShortText,
    class: 'short'
  },
  
]
export default inputs;