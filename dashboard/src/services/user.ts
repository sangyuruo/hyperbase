import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request('http://rap2.taobao.org:38080/app/mock/232687/api/login/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
