# storybook-templet

基于storybook扩展后的模板，用于快速搭建组件库。

> storybook + React + less/sass + webpack => npm package 


## 目录结构

```shell
.
├── .storybook                  # storybook配置文件
│ ├── main.js                   # 主配置，包含：插件、webpack配置等
│ ├── manager.js                # 主题样式配置
│ ├── perview.js                # 预览页模块配置，包含 canvas区域、Docs区域等
│ └── preview-head.html         # 主题风格配置
├── .vscode                     # 搭配vscode编辑器的项目配置，统一编码风格
│ └── settings.json
├── devtools                    # 打包相关配置文件
│ ├── build-package.js          # 定义打包流程
│ ├── build.babel.config.js     # 打包时的 babel 配置
| └── tsconfig.build.js         # 打包时的 TS 配置
├── storybook-static            # 站点打包后的静态文件产物 (gitignore)
├── node_modules                # 开发依赖包 (gitignore)
├── package                     # build-package的产物，用于发npm包 (gitignore)
├── src                         # 组件库源码（原stories => src）
│ ├── examples                  # 存放示例页面（目录排序：3）
│ ├── components                # 存放所有组件（目录排序：4）
│   ├── xxx-xxx                 # 某组件源码 (小写+中划线命名)
│     ├── xxx.stories.tsx       # 组件Demo
│     ├── style                 # 组件样式文件
│     ├── index.ts              # 组件入口文件，用于 export 组件及 TS声明
│     ├── Xxxx.tsx              # 组件子组成部分(大驼峰命名)
│ ├── mixins                    # Saas通用minxins
│ ├── _assets                   # 存放静态资源，如: 图片、svg、font等。
│ ├── style                     # 存放全局样式文件
│ ├── untils                    # 存放工具函数
│ ├── index.ts                  # 组件库打包入口文件
│ ├── Introduction.stories.mdx  # 组件库说明页（目录排序：1）
| └── Changelog.stories.mdx     # 组件库更新日志（目录排序：2）
├── .gitignore                  # 定义git提交时忽略的目录和文件
├── .prettierrc                 # prettier配置文件
├── babel.config.js             # babel配置文件
├── package-lock.json           # 依赖版本锁，npm>5 执行 npm i 时自动生成改文件
├── package.json                # 项目描述文件
├── postcss.config.json         # postcss配置文件
└── tsconfig.json               # TS配置文件
```
