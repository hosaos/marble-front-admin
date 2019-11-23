import request from '@/utils/request';
import { getQueryPath } from '@/utils/utils';
import { parseSearchResult } from '@/utils/search';

export async function searchPageList(params = {}) {
  const url = getQueryPath('/api/userInfo/pageList', params);
  return request(url).then(res => parseSearchResult(res));
}

// export async function getSample(id) {
//   return request(`/api/sample/${id}`);
// }
//
export async function modifyWebUser(webUser) {
  return request(`/api/userInfo/saveOrUpdate`, {
    method: 'POST',
    body: webUser,
  });
}

//   return request(`/api/sample`, {
//     method: 'POST',
//     body: sample,
//   });
// }
