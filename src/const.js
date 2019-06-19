const projectOptions = [{
    type: 'list',
    name: 'project',
    message: '选择要生成的模板项目:',
    choices: ['taro'],
    validate: (value) => {
        if (value.length) {
            return true;
        } else {
            return '选择你要生成的模板项目.';
        }
    }
}]

// Taro命令窗口填写表单
const taroOptions = [{
        type: 'list',
        name: 'template',
        message: '选择你要生成的模板:',
        choices: ['component', 'page', 'service', 'constant', 'active', 'reducer'],
        validate: (value) => {
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
        validate: (value) => {
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
        validate: (value) => {
            if (value.length) {
                return true;
            } else {
                return '请输入生成的文件名.';
            }
        }
    }
];

module.exports = {
    projectOptions,
    taroOptions
};