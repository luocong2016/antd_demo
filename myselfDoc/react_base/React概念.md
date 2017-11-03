## React 特点
1. 声明式设计 −React采用声明范式，可以轻松描述应用。
2. 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
3. 灵活 −React可以与已知的库或框架很好地配合。
4. JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
5. 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
6. 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

## React JSX
React 使用 JSX 来替代常规的 JavaScript。
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。

我们不需要一定使用 JSX，但它有以下优点：
- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。


## JavaScript表达式
1. JSX中使用JavaScript。表达式写在花括号{}里。
2. JSX中不能使用if else 语句，但可以使用conditional（三元运算）表达式来替代。
3. JSX中的注释使用{/**/}。
4. React推荐内联样式(React会在指定元素数字后自动添加px)。 
```const myStyle = {fontSize: 100, color:'F00'}```
5. JSX允许在模版中插入数组，数组会自动展开所有成员。
```const arr = [<h2>Lutz-h2</h2>,<h2>自我编程</h2>]```
```
1 import { render } from 'react-dom'
2
3 render(<div>
4    <h1 style={myStyle>Hello, world</h1>
5    <div>
6      { 1 + 1 }
7      { i ==1 ? 'True': 'False' }
8      {/* 注释 */}
9    </div>
10   <div>{arr}</div>
11</div>, document.getElementById('root'))
```
