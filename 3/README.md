# 指令
# v-for 但是一般循环不用of，有的时候编辑器会报错，比如webstorm，一般用in。实际上两者都可以;2.5+版本在循环的时候必须加上key，为了dom-diff
# v-bind 可以简写成冒号: 但是后面跟的值都是变量
# v-if v-else
# v-show, 这个不支持template写法
# v-on:click，可以简写成@, 事件可以带括号，也可以不带。如果要传参，得加上括号，务必记得加上事件源参数$event，不然想用到的时候就没有
# 所有的数据最后都会被合并到vm实力上，但是会被data覆盖掉，所以methods啥的取名不要和data的同名
# v-once 只渲染一次，渲染后会产生缓存
# v-html，但是容易导致xss攻击
# v-text 等价于 {{}}
# v-model 非常重要！！！！
# v-cloak
# v-slot 非常重要！！！!
  
 