const constantTem = (componentStr) => {
    const constant = `
export const TEST = "TEST${componentStr.toUpperCase()}";
`
    return constant;
}
module.exports = {
    constantTem
};