// 在嵌套对象中查找指定（key: value）所在对象
export const nestedObjectQuery = (obj?: object, propery?: string, value?: any) => {
    let result = null;
    if (obj instanceof Array) {
        for (let i = 0; i < obj.length; i++) {
            result = nestedObjectQuery(obj[i], propery, value);
            if (result) {
                break;
            }
        }
    } else {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (prop === propery) {
                    if (obj[prop] === value) {
                        return obj;
                    }
                }
                if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
                    result = nestedObjectQuery(obj[prop], propery, value);
                    if (result) {
                        break;
                    }
                }
            }
        }
    }
    return result;
};

//在混合数组中查找指定值
export const nestedArrayQueryParent = (array: Array<any>, property: string, value?: any) => {
    let result = null;
    if (array && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return array;
            } else {
                if (array[i][property] instanceof Array) {
                    result = nestedArrayQueryParent(array[i][property], property, value);
                    if (result) {
                        break;
                    }
                }
            }
        }
    }
    return result;
};

//在对象中查找属性property
export const nestedArrayQueryFirstLeaf = (obj: object, property: string) => {
    let result = null;
    if (obj[property] && obj[property].length > 0) {
        result = nestedArrayQueryFirstLeaf(obj[property][0], property);
    } else {
        result =  obj;
    }
    return result;
};
