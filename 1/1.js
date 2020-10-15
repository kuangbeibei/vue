function render() {
    console.log('自己的逻辑：模拟视图更新');
}
/**
 * 基本响应式
 */
function defineReactive(key, value, data) {
    observe(value); // 注意点
    let v = value;
    Object.defineProperty(data, key, {
        get() {
            return v;
        },
        set(val) {
            if (v !== val) {
                if (typeof val === 'object') {
                    observe(val); // 注意点
                }
                v = val;
                render();
            }
        }
    })
}

/**
 * 支持数组
 * AOP
 * 但缺点是：不支持索引更改，除非用$set方法；不支持更改数组length；不支持替换成新数组
 */
const methods = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice']; // slice不改变原数组
const originPrototype = Array.prototype;
const selfPrototype = Object.create(originPrototype);
methods.forEach(method => {
    selfPrototype[method] = function() { // 重写数组原型上方法
        render();
        originPrototype[method].call(this, ...arguments);
    }
})

function observe(obj) {
    if (Array.isArray(obj)) {
        obj.__proto__ = selfPrototype;
        return
    }
    if (typeof obj === 'object' && obj !== null ) { // 首先要判断是对象
        Object.keys(obj).forEach(key => {
            defineReactive(key, obj[key], obj)
        })
    }
}

/**
 * $set方法
 * 给对象增加一个不存在的属性，或者还有一种：obj.location = {...obj.location, a: 1}
 */
function $set(data, key, value) {
    if (Array.isArray(data)) {
        data.splice(key,1,value);
        return;
    }
    defineReactive(key, value, data)
}

let obj = {
    name: 'kk',
    location: {
        x: 100,
        y: 100
    }
};

let arr = [1,2,3];

observe(obj);
observe(arr);
// obj.name = 'hh';
// obj.location.x = 200;
// obj.name = {
//     nickname: 'ff'
// }
// console.log(obj.name.nickname);

// $set(obj, 'a', 9);
// console.log('obj.a:',obj.a);
// obj.a = 10;

// arr.push(4);
$set(arr, 0, 100);
console.log('arr:',arr);