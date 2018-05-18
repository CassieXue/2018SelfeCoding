export const cloneObject = (source?: any) => {
    const json = JSON.stringify(source);
    const result = JSON.parse(json);
    result.__proto__ = source.__proto__;
    return result;
}; //深度克隆对象
