#!/usr/bin/env node
 // 解析参数
const argv = require('minimist')(process.argv.slice(2));
// 首字母大写转换
const {
    log,
    mkDir,
    mkFile,
    form
} = require('./utils');

// 常量配置文件
const {
    taroOptions
} = require('./const');

// 生成方法
const {
    taro
} = require('./generate');

// 命令窗口打印GOLVEN
log.logo();


const main = async () => {
    const selectArgv = await form(taroOptions);
    let dirname = '';
    let filename = 'index';
    if (selectArgv.dirname) dirname = selectArgv.dirname;
    if (selectArgv.filename) filename = selectArgv.filename;
    switch (selectArgv.template) {
        case 'component':
            await taro.createdComponent(dirname, filename);
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            break;
        case 'page':
            await taro.createdPage(dirname, filename);
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            break;
        case 'service':
            await taro.createdService(dirname, filename);
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            break;
        case 'constant':
            await taro.createdConstant(dirname, filename);
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            break;
        case 'active':
            await taro.createdActive(dirname, filename);
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            break;
        case 'reducer':
            await taro.createdReducer(dirname, filename);
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            break;
        default:
            break;
    }
}
main().then(data => {
    // 获取到命令行的参数
    console.log(argv._);
});