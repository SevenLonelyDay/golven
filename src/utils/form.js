// 命令窗口输入表单
const inquirer = require('inquirer');

const form = (options) => {
    return inquirer.prompt(options);
}

module.exports = {
    form
}