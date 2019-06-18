const configTem = () => {
    const config = `import { Config } from "@tarojs/taro";

export const config: Config = {
  navigationBarTitleText: "标题"
};
`
    return config;
}
module.exports = {
    configTem
}