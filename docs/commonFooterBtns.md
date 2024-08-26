# CommonFooterBtns 底部按钮

### 介绍

底部按钮组件，应用在弹窗编辑页、编辑页

### 属性配置

style来控制按钮的整体样式，普通编辑页面需要设置position:fixed;
config来配置渲染

```js
[
  {
    text: '取消',
    click: close,
  },
  {
    text: '确定',
    click: submit,
    show: submitShow
    type: 'primary',
  },
]
```