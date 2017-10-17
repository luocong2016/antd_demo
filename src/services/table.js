import fetch from 'dva/fetch';

export function query() {
  return fetch('/table', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }).then(response => response.json());
}
