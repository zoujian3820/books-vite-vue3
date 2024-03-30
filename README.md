# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

# Eslint配置
- 第一步：安装eslint相关依赖
```
npm i eslint eslint-plugin-vue vue-eslint-parser @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```
- 第二步：初始化Eslint，生成eslintrc.js默认规则
```
执行初始化命令 eslint --init
按提示安装 @eslint/create-config@0.4.6
此项目 选择To check syntax and find problems
此项目 选择CommonJS (require/exports)
选择vue
选择用Typescript
选择Browser
选择Javascript
```