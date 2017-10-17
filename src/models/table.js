import queryString from 'query-string';
import * as tableService from '../services/table';
import { error } from '../utils/message';

export default {
  namespace: 'table',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const result = yield call(tableService.query);
      if (!result || !result.success) {
        error('警告', '获取数据非法');
        return;
      }
      console.log(result)
      yield put({
        type: 'save',
        payload: {
          list: result.data,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        const query = queryString.parse(search);
        if (pathname === '/table') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
