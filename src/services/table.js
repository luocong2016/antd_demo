import fetch from 'dva/fetch';
import S from 'react-dom/server'

export function query() {
  return fetch('/table', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }).then(response => response.json());
}
