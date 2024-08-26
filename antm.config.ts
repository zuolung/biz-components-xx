import { join } from 'path'
import { defineConfig } from '@antmjs/types'

const CWD = process.cwd()

export default defineConfig({
  docs: {
    title: 'biz-components',
    src: [join(CWD, './docs')],
    globalStyles: [join(CWD, './theme.less')],
    route: {
      level: 1,
    },
    buildPort: 6767,
    menu: [
      {
        name: '业务组件',
        items: [
          {
            title: '业务数据下拉',
            path: 'bizSelect',
          }
        ]
      },
      {
        name: '公共组件',
        items: [
          {
            title: '列表页',
            path: 'commonListPage',
          },
          {
            title: '表单卡片',
            path: 'commonFormCards',
          },
          {
            title: '底部提交按钮',
            path: 'commonFooterBtns',
          },
        ]
      },
    ],
  },
})
