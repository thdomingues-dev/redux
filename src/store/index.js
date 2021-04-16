import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    'ReactJS',
    'React Native',
    'Vue',
  ],
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CURSE':
      return { ...state, data: [...state.data, action.title] };

    default:
      return state;
  }
}

const store = createStore(courses);

export default store;