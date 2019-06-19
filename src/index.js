#!/usr/bin/env node
 // 首字母大写转换
const {
    log,
    shellForm
} = require('./utils');

// 常量配置文件
const {
    projectOptions
} = require('./const');

// 生成方法
const {
    taroGenerate
} = require('./generate');

// 命令窗口打印GOLVEN
log.logo();

const main = async () => {
    const projectArgv = await shellForm(projectOptions);
    switch (projectArgv.project) {
        case 'taro':
            await taroGenerate();
            break;
        default:
            break;
    }

}
main();