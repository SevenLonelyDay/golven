const {
    firstToUpperCase
} = require('./../utils/util');

const componentTem = (componentStr) => {
    const upperComponentStr = firstToUpperCase(componentStr);
    const component = `import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./${componentStr}.scss";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface ${upperComponentStr} {
  props: IProps;
}

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({})
)
class ${upperComponentStr} extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {}
  /**
   * 生命周期函数--监听页面加载
   */
  componentWillMount() {}

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  componentDidMount() {}

  /**
   * 生命周期函数--监听页面显示
   */
  componentDidShow() {}

  /**
   * 生命周期函数--监听页面隐藏
   */
  componentDidHide() {}

  /**
   * 生命周期函数--监听页面卸载
   */
  componentWillUnmount() {}

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {}

  render() {
    return <View />;
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default ${upperComponentStr} as ComponentClass<PageOwnProps, PageState>;
`
    return component;
}
module.exports = {
    componentTem
}