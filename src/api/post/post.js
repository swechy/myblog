import { get, post } from '../request.js';

function getPost(name) {
  return get('static/content/' + name);
}

function getPostList() {
  return get('static/sql/postlist.json');
}
export {
  getPost,
  getPostList
}