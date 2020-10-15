/**
 * 用proxy改写数据劫持，代理
 * 1. 解决数组问题，不用区分数组还是对象了
 * 2. 解决对象新增属性问题
 * 缺点：兼容性差
 */

function render() {
    console.log('自己的逻辑：模拟视图更新');
};

let obj = {
    name: 'kk',
    age: 9,
    hobbies: ['eat', 'drink']
};

const handler = {
    get(target, key){
        if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], handler) // 注意这里的递归
        }
        return Reflect.get(target,key)
    },
    set(target, key, value){
        render();
        return Reflect.set(target, key, value)
    }
}

const proxy = new Proxy(obj, handler);
// proxy.age = 100;
// proxy.hobbies[0] = 'travel';
// proxy.hobbies.push('catting');
proxy.hobbies.length = 3