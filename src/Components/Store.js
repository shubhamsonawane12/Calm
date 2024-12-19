// Create a Redux store (store.js)
import { createStore } from 'redux';
import rootReducer from './Reducers';
import { combineReducers } from 'redux';

export const store = createStore(rootReducer);



// Define your reducers (reducers.js)


const initialState = {
  currentAudio: null,
  isPlaying: false,
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_AUDIO':
      return {
        ...state,
        currentAudio: action.payload,
      };
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  audio: audioReducer,
  // Add more reducers as needed
});

// Create your Redux actions (actions.js)
export const setCurrentAudio = (audioSrc) => ({
  type: 'SET_CURRENT_AUDIO',
  payload: audioSrc,
});

export const setIsPlaying = (isPlaying) => ({
  type: 'SET_IS_PLAYING',
  payload: isPlaying,
});
// Define your reducers (reducers.js)







