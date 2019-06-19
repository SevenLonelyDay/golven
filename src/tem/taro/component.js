const {
  firstToUpperCase
} = require('./../../utils/util');

const componentTem = (componentStr) => {
  const upperComponentStr = firstToUpperCase(componentStr);
  const component = `import Taro, { Component, ComponentClass } from "@tarojs/taro";
import "./${componentStr}.component.scss";
import { ${upperComponentStr}Props, ${upperComponentStr}State, ${upperComponentStr}OwnProps } from "./${componentStr}.interface";

import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import * as ${componentStr}Actions from "@actions/${componentStr}";
import { globalData, environment, toast } from "@utils";

interface ${upperComponentStr}Component {
  props: ${upperComponentStr}Props;
}

@connect(
  state => state.${componentStr},
  { ...${componentStr}Actions }
)
class ${upperComponentStr}Component extends Component { 

  render() { 
    return <View></View>
  }
}
export default ${upperComponentStr}Component as ComponentClass<${upperComponentStr}OwnProps, ${upperComponentStr}State>;`
  return component;
}
module.exports = {
  componentTem
}