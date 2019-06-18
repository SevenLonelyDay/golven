const {
  firstToUpperCase
} = require('./../../utils/util');
const interfaceTem = (componentStr) => {
  const upperComponentStr = firstToUpperCase(componentStr);
  return `export type ${upperComponentStr}StateProps = {
  ${componentStr}: {
    num: number;
  };
};

export type ${upperComponentStr}DispatchProps = {
  test: () => void;
  asyncTest: () => void;
};

export type ${upperComponentStr}OwnProps = {};

export type ${upperComponentStr}State = {};

export type ${upperComponentStr}Props = ${upperComponentStr}StateProps & ${upperComponentStr}DispatchProps & ${upperComponentStr}OwnProps;

`
};
module.exports = {
  interfaceTem
}