import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export const DATA_POST = 'dataPost';
export const ADD_POST = 'addPost';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'dataPost':
      return (state = action.payload);
    case 'addPost':
      console.log(action);
      let newPost = [...state, action.payload];
      return newPost;

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
