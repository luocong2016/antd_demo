/**
 * Created by Lutz on 2017/9/15 0015.
 */

export default {
  namespace: 'products',
  state: {
    productsList: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
