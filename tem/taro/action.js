const actionTem = (pageStr) => {
    const action = `import { TEST } from "./${pageStr}.constant";
import { CreateAction } from "@utils";
import { CreateActionOption } from "@utils/redux";
export const test = () => {
    return {
    type: TEST
    };
};

// 异步的action
export function asyncTest(
    option: CreateActionOption = { url: "", type: TEST }
) {
    console.log(option);
    return CreateAction.getAction(option);
}
`
    return action;
}
module.exports = {
    actionTem
}