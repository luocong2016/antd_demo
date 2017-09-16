/**
 * Created by Lutz on 2017/9/16 0016.
 */
import request from '../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=5`);
}
