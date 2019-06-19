const {
    mkDir,
    mkFile
} = require('./../utils');
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
} = require('./../tem/taro');
const taro = {
    createdPage: async (dirname, filename) => {
        await mkDir(`./src/pages/${dirname}`);
        await mkFile(`./src/pages/${dirname}/${filename}.action.tsx`, actionTem(filename));
        await mkFile(`./src/pages/${dirname}/config.tsx`, configTem(filename));
        await mkFile(`./src/pages/${dirname}/${filename}.constant.tsx`, constantTem(filename));
        await mkFile(`./src/pages/${dirname}/${filename}.interface.tsx`, interfaceTem(filename));
        await mkFile(`./src/pages/${dirname}/${filename}.reducer.tsx`, reducerTem(filename));
        await mkFile(`./src/pages/${dirname}/${filename}.page.tsx`, pageTem(filename));
        await mkFile(`./src/pages/${dirname}/${filename}.scss`, scssTem(filename));
    },
    createdComponent: async (dirname, filename) => {
        await mkDir(`./src/components/${dirname}`);
        await mkFile(`./src/components/${dirname}/${filename}.interface.tsx`, interfaceTem(filename));
        await mkFile(`./src/components/${dirname}/${filename}.component.tsx`, componentTem(filename));
        await mkFile(`./src/components/${dirname}/${filename}.component.scss`, scssTem(filename));
    },
    createdService: async (dirname, filename) => {},
    createdConstant: async (dirname, filename) => {
        await mkDir(`./src/${dirname}`);
        await mkFile(`./src/${dirname}/${filename}.constant.tsx`, constantTem(filename));
    },
    createdActive: async (dirname, filename) => {
        await mkDir(`./src/${dirname}`);
        await mkFile(`./src/${dirname}/${filename}.action.tsx`, actionTem(filename));
    },
    createdReducer: async (dirname, filename) => {
        await mkDir(`./src/${dirname}`);
        await mkFile(`./src/${dirname}/${filename}.reducer.tsx`, reducerTem(filename));
    },
}


module.exports = {
    taro
};