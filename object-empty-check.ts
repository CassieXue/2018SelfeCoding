// 检测对象是否是空的
export const isEmpty = (obj?: object) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
};
