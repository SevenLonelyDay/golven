const fs = require("fs");
const chalk = require("chalk");
// 首字母大写转换
const firstToUpperCase = (str) => {
    return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

// 检查文件夹是否存在
const checkDir = (path) => {
    try {
        fs.accessSync(path);
        return true;
    } catch (error) {
        false
    }
}

// 打印输出

const log = {
    error: (str) => {
        console.log(`${new Date()}   ${chalk.red(str)}`);
    },
    info: (str) => {
        console.log(`${new Date()}   ${chalk.hex('#66339996').bold(str)}`);
    },
    warn: (str) => {
        console.log(`${new Date()}   ${chalk.yellow(str)}`);
    },
    blue: (str) => {
        console.log(`${new Date()}   ${chalk.blue(str)}`)
    },
    green: (str) => {
        console.log(`${new Date()}   ${chalk.green(str)}`)
    },
}

// 创建目录
const mkDir = (path) => {
    if (!path.length) {
        log.error('文件路径为空');
        process.exit();
    }
    // var a = '232'
    // a.split
    // a.startsWith(.)
    // 目录数组
    let dirs = [];
    // 判断路径是以./开头
    if (path.startsWith('./')) {
        // 路径以.开头
        let list = path.split('/');
        dirs = list.filter((value) => {
            if (value !== '.') {
                return value
            }
        })
    } else if (path.startsWith('../')) {
        // 路径以../开头
        log.error('路径没有在项目内,不支持../');
        process.exit();
    } else {
        // 正常
        let list = path.split('/');
        dirs = list.filter((value) => {
            if (value) {
                return value
            }
        })
    }
    let url = '';
    for (let index = 0; index < dirs.length; index++) {
        const element = dirs[index];
        url = url + element;
        if (index === dirs.length && checkDir(url)) {
            if (checkDir(`./src/components/${dirname}`)) {
                log.error(`${dirname}目录已存在`)
                process.exit(0);
            }
        }
        if (!checkDir(`./${url}`)) fs.mkdirSync(`./${url}`);
    }

    // 当前进程进入文件夹目录
    process.chdir(url);
}

// 直接写入覆盖文件
const mkFile = (filename, content) => {
    fs.writeFileSync(`${filename}`, content);
    // // 在组件创建文件夹
    // fs.mkdirSync(`./src/components/${dirname}`);
    // // 进入该目录下面
    // process.chdir(`./src/components/${dirname}`);
    // // 写入tsx文件

    // // fs.writeFileSync(`${filename}.tsx`,conent componentTem(filename));
    // // 写入scss文件
    // fs.writeFileSync(`${filename}.scss`, conent scssTem(filename));
    // log.info(`${dirname}component创建完成`);
    // process.exit(0);
    // 追加内容
    //     fs.appendFileSync(`./src/test1.js`, `
    // import {inxex} from './index'`)
}

// 在文件后面追加，如果没有该文件创建并写入
const appendWriteFile = (filename, content) => {
    fs.appendFileSync(filename, content);
}

module.exports = {
    firstToUpperCase,
    checkDir,
    mkFile,
    appendWriteFile,
    mkDir,
    log
}