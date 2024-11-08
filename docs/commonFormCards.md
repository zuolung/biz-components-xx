# CommonFormCards 表单卡片

### 介绍

表单卡片，用于表单页面提交、表单弹窗提交、页面详情等场景

### 基本参数

提交表单的卡片渲染， 数组传入配置项`config`

- `defaultValues`: 初始化表单值，支持异步
- `disabledAll`: 所有表单都disabled,但有限制小于表单项的disabled
- `scrollToError`: 是否滚动到第一个错误项
- `labelWidth`: 表单label的宽度
- `titleStyle`: 卡片标题的样式
- `config[xx].title`: 卡片标题, 传入空字符/不传则不展示
- `config[xx].span`: 总宽度24份，占有多少份, 优先级小于form里面的span
- `config[xx].show`: 当前卡片是否展示，不填默认展示
- `config[xx].expandShow`: 当前卡片是否有收展功能
- `config[xx].expandCount`: 收起展示的数量
- `change事件`: 回调参数所有最新的表单值，第二个参数是setForm设置表单值的方法, 第三个参数formData


### 表单配置
`config[xx].form`卡片表单里面的配置属性如下
- `component`组件类型， 下面属性和component同一层级
1. `input`: 输入框组件，elemtnUI的大部分属性，后缀使用suffix设置，暂时只支持文本
2. `bizSelect`: 业务下拉组件, bizType对应type属性
3. `radio`: elemtnUI单选组件
4. `city`: 城市选择组件`e6City`，输出的字段名fieldNameProvince、fieldNameCity、fieldNameDistrict，默认分别是province、city、area
5. `datePicker`: elemtnUI日历选择
6. `uploader`: e6的上传组件，acceptType支持上传的文件类型、fileType对象（object）/字符串(string) ...

- `fieldName`: 字段名称
- `label`: 表单label表述，支持函数
- `placeholder`: 输入提示，支持函数
- `span`: 总宽度24份，占有多少份
- `labelWidth`: 表单label的宽度，优先级大于外层
- `ifDisabled`: 是否禁用，必须传函数，返回布尔值
- `tips`: 表单项的提示文案
- `className`: 挂在col组件上面，可通过函数返回特定class来修改部分特殊表单样式

例子如下：

```js
[
  {
    component: "input",
    fieldName: "orderNo",
    label: "订单编号",
    ifDisabled: () => this.pageType !== "add",
    show: () => this.pageType !== "add",
    required: true,
  },
  {
    component: "bizSelect",
    fieldName: "orderType",
    bizType: "orderContractType",
    label: "订单类型",
    required: true,
    ifDisabled: () => this.pageType !== "add",
  },
  {
    component: "input",
    maxlength: 13,
    fieldName: "lesseeBusinessPhone",
    label: "承租方对接人电话",
    show: ({ formData }) => formData.orderType !== 2,
    rules: [telAndMobileValid.rule({ trigger: "blur" })],
    type: "number",
  },
]
```

> 涉及到动态更新，属性请采用`函数`返回属性值

### 验证表单

通过组件实例调用`valid`方法
1. 第一个参数回调函数，表单校验通过的时候执行
2. 第二个参数为true的时候，过滤show为false, disabled为true的表单项的数据，id不过旅

```js
this.$refs.CommonFormCards.valid((res) => {
  console.info(res)
}, true)
```


### slot插入内容

- `headerButtonXXIndex`: 第xx个卡片和标题平行的按钮插入
- `headerTitleXXIndex`: 第xx个卡片标题后的内容，可用于描述、提示
- `prefix-XXFildName`: 表单项前缀内容，回调参数所有表单的现有值
- `prefix-XXFildName`: 表单项前缀内容，回调参数所有表单的现有值formData、当前表单值value
- `suffix-XXFildName`: 表单项后缀内容，回调参数所有表单的现有值formData、当前表单值value
- `suffix-col`: 和表单布局相同的插入内容，即elementUI的Col布局的内容，只适合卡片数据一个项的时候
- `suffix-colXXIndex`: 和表单布局相同的插入内容，即elementUI的Col布局的内容

