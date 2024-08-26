# BizSelect 业务下拉

### 介绍

内置下拉业务数据请求，支持字典查询功能

### 组件参数

下拉数据组件，包含了数据的请求初始化, 组件参数和入参如下：

- `type`: 内部类型：
1. `carType`: 汽车类型
2. `carNo`:  车牌下拉数据 
3. `vin`:   VIN号下拉数据，部分下拉功能需要展示车牌号传VIN号，使用属性值`carNoByVin`
4. `subject`: 办理方下拉数据，福江...
5. `orderStatus`: 订单状态
6. `userList`: 用户列表
7. `tenantry`: 承运商列表
8. `其他值xx`不再上述值里面的，采用字典接口`findByDicTypeKeyMap`累查询

- `request`和`params`: 自定义获取下拉数据的请求接口和参数，请求方法需要返回下拉数据的请求结果
- `options`: 传入选择项, 不请求数据的时候可以使用
- `useElement`: 使用elmentUI的select
- `useElement`默认是false的时候参数和`e6-vr-select`保持一致，true的使用请查看elementUI2.xx
- `style`: 设置样式
- 事件`change`： 回调参数选中的值

```jsx
<BizSelect
  v-model="vinList"
  type="vin"
  placeholder="VIN号"
  multiple
></BizSelect>
```