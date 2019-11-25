import request from '@/utils/request';

export async function userLogin(params) {
  return request('/api/userInfo/login', {
    method: 'POST',
    body: params,
  });
}


export async function queryCurrent() {
  return request('/api/userInfo/currentUser');
  // return request('/api/currentUser');
}
