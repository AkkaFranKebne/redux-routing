import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const allPosts = _.mapKeys(action.payload.data, 'id');
      return allPosts;
    case FETCH_POST:
      const thisPostData = action.payload.data;
      return { ...state, [thisPostData.id]: thisPostData }; // preserve all that is in the state untill now, after that add key interpolation
    default:
      return state;
  }
}
