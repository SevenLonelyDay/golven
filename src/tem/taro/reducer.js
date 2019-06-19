const {
  firstToUpperCase
} = require('./../../utils/util');
const reducerTem = (componentStr) => {
  const upperComponentStr = firstToUpperCase(componentStr);
  const reducer = `
import { TEST } from "./${componentStr}.constant";

const STATE = {
  num: 0
};

export default function ${componentStr}(state = STATE, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        num: state.num + 1
      };
    default:
      return state;
  }
}
`
  return reducer;
}
module.exports = {
  reducerTem
}