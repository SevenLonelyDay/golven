const fs = require("fs");
const chalk = require("chalk");
const figlet = require('figlet');
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
    logo: () => {
        console.log(chalk.hex('#66339996').bold(figlet.textSync('GOLVEN  CLI', {
            horizontalLayout: 'full'
        })))
    }
}

// 创建目录
const mkDir = (path) => {
    if (!path.length) {
        log.error('文件路径为空');
        process.exit();
    }
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
        if (url) {
            url = url + '/' + element;
        } else {
            url = element;
        }
        if (index === dirs.length && checkDir(url)) {
            if (checkDir(`${url}`)) {
                log.error(`${url}目录已存在`)
                process.exit(0);
            }
        }
        if (!checkDir(`./${url}`)) fs.mkdirSync(`./${url}`);
    }
    // return ''
    // 当前进程进入文件夹目录
    // process.chdir(url);
}

// 直接写入覆盖文件
const mkFile = (filename, content) => {
    fs.writeFileSync(`${filename}`, content);
}

// 在文件后面追加，如果没有该文件创建并写入
const appendWriteFile = (filename, content) => {
    fs.appendFileSync(filename, content);
}


// 解析参数
const argv = require('minimist')(process.argv.slice(2))._;

module.exports = {
    firstToUpperCase,
    checkDir,
    mkFile,
    appendWriteFile,
    mkDir,
    log,
    argv
}