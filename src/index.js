import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';

import PostsIndex from './components/post_index';
import NewPost from './components/new_post';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex}/>
        <Route path="/new" component={NewPost}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
