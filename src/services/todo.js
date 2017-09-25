/**
 * Created by Lutz on 2017/9/22.
 */
import fetch from 'dva/fetch';

export function query() {
  return fetch('/todo', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }).then(response => response.json());
}
