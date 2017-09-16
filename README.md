# antd_demo

## 项目描述
1. 从现有项目 atool-build + dora项目 到重构的 roadhog项目
- roadhog 是约束型配置，基于 JSON 格式，给出有限的配置方式
- atool-build + dora 是扩展型，表现为插件和编程 webpack.config.js 的方式

2. 为啥用 roadhog?
- 既然 roadhog 功能没 atool-build + dora 强大，那为啥要切换呢?
- 体验好，基于 create-react-app，比如有非常友好的 错误处理
- 配置简单，基于 JSON，比如禁用 CSS Modules 只要配"disableCSSModules": true
- 黑盒升级，就算之后 roadhog 换成 rollup 或其他的，用户也不需要更改配置

【参考资料】

 推荐网址
 
[dva官网](https://github.com/dvajs/dva)

[dva-cli官网](https://github.com/dvajs/dva-cli)

[dva中文官网](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)

[sorrycc git 地址](https://github.com/sorrycc)

了解dva的 [8个概念](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md)，及他们如何串联

12步30分钟 [CURD应用](https://github.com/sorrycc/blog/issues/18)

roadhog的[配置](https://github.com/sorrycc/roadhog#配置)

[atool-build + dora 到 roadhog](https://github.com/sorrycc/blog/issues/17)


