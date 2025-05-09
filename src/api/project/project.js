import { get, post } from '../request.js';

function getSu7() {
  return get('static/content/xiaomisu7.md');
}

export {
  getSu7
}