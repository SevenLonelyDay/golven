#!/usr/bin/env node

// 命令行打印

const fs = require('fs');

// 命令窗口输入表单
const inquirer = require('inquirer');

// 解析参数
const argv = require('minimist')(process.argv.slice(2));
// 首字母大写转换
const {
    log,
    mkDir,
    mkFile
} = require('./utils/util');
// 引入模板
const {
    actionTem,
    componentTem,
    configTem,
    constantTem,
    interfaceTem,
    pageTem,
    reducerTem,
    scssTem
} = require('./tem/taro');

// 命令窗口打印GOLVEN
log.logo();

// 命令窗口填写表单
const questions = [{
        type: 'list',
        name: 'template',
        message: '选择你要生成的模板:',
        choices: ['component', 'page', 'service', 'constant', 'active', 'reducer'],
        validate: (value) => {
            console.log(value);
            if (value.length) {
                return true;
            } else {
                return '选择你的模板类型.';
            }
        }
    },
    {
        name: 'dirname',
        type: 'input',
        message: '输入目录名称:',
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return '输入你的目录名称.';
            }
        }
    },
    {
        name: 'filename',
        type: 'input',
        message: '请输入生成的文件名:',
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return '请输入生成的文件名.';
            }
        }
    }
];

const main = async (options) => {
    const selectArgv = await await inquirer.prompt(options);
    let dirname = '';
    let filename = 'index';
    if (selectArgv.dirname) dirname = selectArgv.dirname;
    if (selectArgv.filename) filename = selectArgv.filename;

    switch (selectArgv.template) {
        case 'component':
            await mkDir(`./src/components/${dirname}`);

            await mkFile(`./src/components/${dirname}/${filename}.tsx`, componentTem(filename));
            await mkFile(`./src/components/${dirname}/${filename}.scss`, scssTem(filename));
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            // actionTem,
            // componentTem,
            // configTem,
            // constantTem,
            // interfaceTem,
            // pageTem,
            // reducerTem,
            // scssTem
            break;
        case 'page':
            await mkDir(`./src/pages/${dirname}`);
            await mkFile(`./src/pages/${dirname}/${filename}.action.tsx`, actionTem(filename));
            await mkFile(`./src/pages/${dirname}/config.tsx`, configTem(filename));
            await mkFile(`./src/pages/${dirname}/${filename}.constant.tsx`, constantTem(filename));
            await mkFile(`./src/pages/${dirname}/${filename}.interface.tsx`, interfaceTem(filename));
            await mkFile(`./src/pages/${dirname}/${filename}.reducer.tsx`, reducerTem(filename));
            await mkFile(`./src/pages/${dirname}/${filename}.tsx`, pageTem(filename));
            await mkFile(`./src/pages/${dirname}/${filename}.scss`, scssTem(filename));
            log.info(`${dirname}  component创建完成`);
            process.exit(0);
            break;
        case 'service':

            break;
        case 'constant':

            break;
        case 'active':

            break;
        case 'reducer':

            break;
        default:
            break;
    }
}
main(questions).then(data => {
    // 获取到命令行的参数
    console.log(argv._);
    console.log(fs.realpathSync(__filename));
});