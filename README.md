## Vuex ^2.4.0

### Counter just Vue
+ 数据：data
+ 计算属性：computed
+ 事件处理器：methods
+ methods中可以使用computed中的属性
+ methods中可以同步和异步处理data数据，直接修改数据

### Counter Vuex
+ 集中式存储管理应用的所有组件的状态
+ 以相应的规则保证状态以一种可预测的方式发生变化
+ Vuex 的状态存储是响应式的
+ 状态数据：state，唯一数据源
+ 派生状态：getters
+ 数据管理：mutations，不能直接改变 store 中的状态，更改 Vuex 的 store 中的状态的唯一方法是提交 mutatio；同步操作；不能使用派生状态
+ 异步操作：actions，通过提交mutation来修改状态( 在严格模式下直接修改state数据会报错 )

### Counter-hot
+ 把getters统一为数据的获取出口，actions统一为数据的操作入口
+ 热重载：主要在开发环境中使用；当模块内容修改时，保留Vuex数据，重载修改模块的业务逻辑；如果不用热重载，修改模块时整体刷新，数据不再保留

### Shopping Cart
+ 事件：获取商品列表，增加到购物车(涉及两个行为：商品列表页减少，购物车列表增加)，购物车列表，购买商品
+ Mutation事件类型：常量模式, mutation-types.js
+ 模块：Modules，每个模块拥有自己的state、getter、mutation、action
+ 不同模块：可以定义相同的state数据：有局部状态，命名相同的mutation会被同时触发，getters不容许有命名冲突
+ 严格模式：无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误，比如在actions中改变状态；只在开发环境使用
+ map辅助函数：数组形式映射，对象形式映射(别名)
+ 插件: 内置Logger插件，日志调试

### TodoMVC

### FluxChat