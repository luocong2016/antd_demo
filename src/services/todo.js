/**
 * Created by Lutz on 2017/9/22.
 */
import fetch from 'dva/fetch';

export function async query() {
  return await fetch('/todo', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    }).catch((e) => {
      console.log('Oops, error');
    });
  });
}
