#!/usr/bin/env node

// 命令行打印
const figlet = require('figlet');
const fs = require('fs');

// 命令窗口输入表单
const inquirer = require('inquirer');

// 解析参数
const argv = require('minimist')(process.argv.slice(2));

// 首字母大写转换
const {
    firstToUpperCase,
    log,
    checkDir
} = require('./utils/util');

// 引入模板
const {
    componentTem
} = require('./tem/component');
const {
    scssTem
} = require('./tem/scss')

// 命令窗口打印
log.info(
    figlet.textSync('GOLVEN  CLI', {
        horizontalLayout: 'full'
    })
);

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
    if (selectArgv.filename) filename = selectArgv.dirname;

    switch (selectArgv.template) {
        case 'component':
            // 判断文件是否存在创建文件夹
            if (!checkDir('./src')) fs.mkdirSync(`./src`);
            if (!checkDir('./src/components')) fs.mkdirSync(`./src/components`);
            if (checkDir(`./src/components/${dirname}`)) {
                log.error(`${dirname}目录已存在`)
                process.exit(0);
            }
            // 在组件创建文件夹
            fs.mkdirSync(`./src/components/${dirname}`);
            // 进入该目录下面
            process.chdir(`./src/components/${dirname}`);
            // 写入tsx文件
            fs.writeFileSync(`${filename}.tsx`, componentTem(filename));
            // 写入scss文件
            fs.writeFileSync(`${filename}.scss`, scssTem(filename));
            log.info(`${dirname}component创建完成`);
            process.exit(0);
            break;
        case 'page':

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

    // 获取命令窗口的参数

    // const dirName = process.argv[2];
    // const dirName = process.argv[3];
    // 获取到命令行的参数
    console.log(argv._);
    console.log(fs.realpathSync(__filename));

    // const dirName = argv._[1];


    // console.log(dirName)
    // if (!dirName) {
    //     console.log('文件夹名称不能为空！');
    //     console.log('示例：npm run tep test');
    //     process.exit(0);
    // }
    // const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
    // console.log(capPirName);
});