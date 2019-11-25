import request from '@/utils/request';
import { getQueryPath } from '@/utils/utils';
import { parseSearchResult } from '@/utils/search';

export async function searchPageList(params = {}) {
  const url = getQueryPath('/api/userInfo/pageList', params);
  return request(url).then(res => parseSearchResult(res));
}

export async function getWebUser(id) {
  return request(`/api/userInfo/detail/${id}`);
}

export async function modifyWebUser(webUser) {
  return request(`/api/userInfo/saveOrUpdate`, {
    method: 'POST',
    body: webUser,
  });
}
export async function deleteWebUser(webUser) {
  return request(`/api/userInfo/delete`, {
    method: 'POST',
    body: webUser,
  });
}
