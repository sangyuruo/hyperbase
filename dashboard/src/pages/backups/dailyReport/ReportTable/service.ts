import request from '@/utils/request';

export async function queryNotes() {
  return request('/api/notes/getnotes');
}
