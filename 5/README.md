# 自定义指令
# 作用：操作dom
# v-开头
# 指令里面的this是window
# 全局指令和组件内部指令
# 实现v-click-outside
# 默认的指令，不写生命周期时，调用的是bind+update
# 指令的value是变量，当value变了，才会执行指令的update生命周期，或者当组件里面数据更新，指令也会更新
# 指令常用的三个生命周期顺序，bing->inserted->update，但是update会多次执行

# filter 中的this也是window


