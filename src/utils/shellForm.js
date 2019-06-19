// 命令窗口输入表单
const inquirer = require('inquirer');

const shellForm = (options) => {
    return inquirer.prompt(options);
}

module.exports = {
    shellForm
}