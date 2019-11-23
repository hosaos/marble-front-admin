import request from '@/utils/request';
import { getQueryPath } from '@/utils/utils';
import { parseSearchResult } from '@/utils/search';

export async function searchPageList(params = {}) {
  // const url = getQueryPath('/api/userInfo/pageList', params);
  // console.log(url)
  // return request(url).then(res => parseSearchResult(res));
  return request(getQueryPath('/api/sample', params)).then(res => parseSearchResult(res));
}

// export async function getSample(id) {
//   return request(`/api/sample/${id}`);
// }
//
// export async function saveSample(sample) {
//   if (sample.id) {
//     return request(`/api/sample/${sample.id}`, {
//       method: 'PUT',
//       body: sample,
//     });
//   }
//   return request(`/api/sample`, {
//     method: 'POST',
//     body: sample,
//   });
// }
