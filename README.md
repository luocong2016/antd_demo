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

## 项目运行
1. 克隆项目
```
git clone https://github.com/luocong2016/antd_demo.git
```

2. 进入项目并安装依赖(推荐淘宝镜像)
```
cd antd_demo && cnpm i
```
3. 启动项目
```
npm run start
```
打开浏览器[localhost:8989](localhost:8989)

4. 打包项目
```
npm run build
```

## 【参考资料】
推荐网址
react 的[state](http://www.runoob.com/react/react-state.html) 、[props](http://www.runoob.com/react/react-props.html)、[10个生命周期](http://note.youdao.com/share/?id=c70819126575dc410fb59094cd4d1b88&type=note#/)、[refs](http://www.runoob.com/react/react-props.html)

10分钟学会react + dva [入门](http://www.jianshu.com/p/69f13e9123d9)

dva系列开发可参考: [sorrycc的git网站](https://github.com/sorrycc)

访问[dva官网](https://github.com/dvajs/dva)、[dva中文官网](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)、[antd官网](https://ant.design/docs/react/practical-projects-cn)

基于dva-cli创建项目，最好了解[配置方式](https://github.com/dvajs/dva-cli)


了解dva的 [8个概念](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md)，及他们如何串联

12步30分钟 [CURD应用](https://github.com/sorrycc/blog/issues/18)

详细可参考roadhog的[配置](https://github.com/sorrycc/roadhog#配置)

[atool-build + dora 到 roadhog](https://github.com/sorrycc/blog/issues/17)

[前端跨域方案](http://www.jianshu.com/p/2fde9e7df2f9)

