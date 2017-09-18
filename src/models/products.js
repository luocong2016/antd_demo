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
    delete(state, { payload: id }) {
      const { productsList = [] } = state
      return { ...state, productsList:productsList.filter(item => item.id !== id) };
    },
  },
};
