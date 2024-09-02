# CommonListPage 通用列表页

### 介绍

支持列表页面的搜索功能、tab 切换功能、下拉导出等中间按钮、表格功能

### 基础参数

- `appName`: 相关接口的服务前缀
- `listUri`: 列表接口

### 搜索功能参数

- `defaultValues`: 额外不为空的初始化参数
- `search`: 搜索方法
- `reset`: 重置方法
- `change`: 实时更新外部数据，如传入的 defaultValues
- `labelWidth`: label 宽度，config.form.labelWidth 的优先级最高
- `searchConfig`: `components`枚举 datePicker、input、bizSelect、multiInput、select、其他参数是组件的 props

相关事件须采用组件实例调用

```js
this.$refs.CommonListPage.handleSearch();
```

### tab 功能参数

- `tabs`: id 和 label 的数组项，支持函数，回调参数时列表接口的`otherObject`，一般为数据的数量统计,返回数组，label 里面可以文本带有当前数据的数量
- `tabFieldName`: tab 对应的字段名称，在`defaultValues`里面初始化

### 中间的按钮

`middleButtons`: 数组配置[{ type: xxx, action, icon... }] type`none`自定义按钮

action点击方法、icon对应iconfont,

type 内部按钮，都有图标
- `export`，普通到处,不需要其他参数，`resetExportParams`属性可以重置导出的请求参数，例如不需要tab的字段，自己过滤掉
- `add`: 只是图片，需要配置action
- `dropMenu`: 有额外menus下拉按钮项，label和data的组合
- `import`,普通导入，需要额外 query 如下：
```js
{
  syncKey: "货物名称,货物编码",
  batch: true, //是否批量
  moduleKey: "goodsInfoKey", // 各个页面约定key
  origin: "goodsManageList" //来源路由
}
```

```js
[
  {
    type: "none",
    text: "明细导出",
    action: this.handleExportDetail,
    code: 5335,
  },
  {
    type: "none",
    icon: "e6-icon-history",
    action: () => this.unifyRouterPush("orderContractRecordNew"),
    code: 462,
    title: "历史记录",
  },
  {
    type: "dropMenu",
    code: 46,
    icon: "e6-icon-Import_fill",
    action: this.handleImport,
    menus: [
      {
        label: "导入",
        data: { moduleKey: "orderContractKey", judgeKey: "" }, // 任意数据，传给action
      },
      {
        label: "订单导入",
        data: { moduleKey: "orderContractImportKey", judgeKey: "" },
      },
    ],
  },
  { type: "export" },
  {
    type: "add",
    action: () => this.unifyRouterPush("orderContractAddNew"),
  },
];
```

### 表格相关参数

- `tableButtons`: 右侧按钮, 开发环境生效，线上使用服务端列表返回的buttonInfo
- `tableAction`: 点击按钮的方法，通过第一个参数ID权限编码来判断点击的按钮，第二个参数ROW是当前行的数据
- `resetTableColConfig`: 重置表格的列配置，例如不同tab下面的配置文案不一样，每次请求列表信息都会先请求配置项信息

```jsx
  <CommonListPage
    ref="CommonListPage"
    appName="E6-MS-ASSET-MANAGE-WEB"
    listUri="/assetOrderContractInfo/page"
    :searchConfig="searchConfig"
    :tableButtons="[{ id: -66, label: '测试按钮' }]"
    />
```

### slot

配合`tableColSlots`使用

```jsx
  <template v-slot:table-订单状态="{ value, row }">
    <status-flag
      module="billStatus"
      :id="row.status || ''"
      :label="row.statusStr || ''"
    ></status-flag>
  </template>
```
