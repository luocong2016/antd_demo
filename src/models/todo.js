import queryString from 'query-string';
import * as todoService from '../services/todo';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const result = yield call(todoService.query);
      console.log(result)
      yield put({
        type: 'save',
        payload: {
          list: result.data,
          page: result.page,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        const query = queryString.parse(search);
        if (pathname === '/todo') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
