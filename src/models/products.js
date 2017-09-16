/**
 * Created by Lutz on 2017/9/15 0015.
 */
import dva from 'dva';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
