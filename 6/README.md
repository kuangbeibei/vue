# computed & watch

# computed 可以缓存数据，提高性能。这意味着缓存数据所依赖的数据没有变化，该缓存数据不会变化，即便其他变量变化了。
# computed是基于Object.defineProperty，所以computed数据有两种写法，一种是函数，一种用get和set，相当于getter和setter
# 什么时候用computed的set方法呢？比如vuex中的数据，需要在组件里运用时，会发生变化；或者这个缓存的数据变化了，会导致其他数据的变化
# 还有一个常见的场景就是复选框，全选、多选啥的

# watch 也有两种写法，一种直接写函数，一种写对象
# 写成watch方式的目的，为了传递参数，一个是immediate一个是deep，deep不写默认只监控一层，加了deep对任意象属性发生变化，watch的回调函数都会执行

# 不同之处：watch中可以写异步方法，computed是同步的；语义上的区别，一个是监控，导致其他的变化；一个是根据依赖的变量而变化
# computed和methods中函数区别，一个可以缓存，一个不能



