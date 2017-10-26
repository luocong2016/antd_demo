# 路由跳转
## model
```
import {routerRedux} from 'dva/router';
yield put(routerRedux.push('/products'));
```
## component
```
import { Link } from 'dva/router';

<Link to={{ pathname: 'products', query: { productId: record.id} }}>
     <Button>Btn</Button>
</Link>

<Link to={{ pathname: 'products', state: { productId: record.id} }}>
     Button>Btn</Button>
</Link>
```

### 跳转事件

```
//关闭默认事件
event.preventDefault()

//关闭冒泡
event.stopPropagation()

```
