## React组件API
1. 设置状态：setState
> setState(object nextState[, function callback])
- nextState，将要设置的新状态，该状态会和当前的state合并
- callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。

2. 替换状态：replaceState
> replaceState(object nextState[, function callback])
- nextState，将要设置的新状态，该状态会替换当前的state。
- callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。

3. 设置属性：setProps
> setProps(object nextProps[, function callback])
- nextProps，将要设置的新属性，该状态会和当前的props合并
- callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。

4. 替换属性：replaceProps
> replaceProps(object nextProps[, function callback])
- nextProps，将要设置的新属性，该属性会替换当前的props。
- callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。

5. 强制更新：forceUpdate
> forceUpdate([function callback])
- callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。

6. 获取DOM节点：findDOMNode
> DOMElement findDOMNode()
- 返回值：DOM元素DOMElement

7. 判断组件挂载状态：isMounted
> bool isMounted()
- 返回值：true或false，表示组件是否已挂载到DOM中
