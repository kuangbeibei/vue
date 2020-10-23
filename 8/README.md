# 组件的生命周期
# 组件间的通信
# render方法，扩展组件

# 树组件、日历组件、表单组件、扩展表格组件


## 生命周期钩子函数
#### beforeCreate 在new Vue的时候，最先调用，这个钩子一般不做太多业务功能，底层中做一些链。
#### created 拿不到$el，获取不到真实dom
    * beforeCreate和created都可以在没有$el这个属性时执行
#### beforeMount 必须有$el这个属性
    * beforeMount以及之后的生命周期必须有要渲染的模板，不论是$el属性，还是template属性，还是render函数，才会执行
#### mounted 已经挂在真实dom节点中  
#### beforeUpdate 
#### updated 不能够在这个生命周期里更改数据
#### beforeDestroy 一般用来取消事件的订阅，取消定时器。组件的销毁、路由的切换，手动销毁vm.$destroy
#### destroyed 不影响dom，只是把属性、方法、事件等都取消了
