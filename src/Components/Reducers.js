// reducers.js
import { combineReducers } from 'redux';

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
    // Add more cases as needed for other actions
    // For example, you could handle 'PAUSE_AUDIO', 'STOP_AUDIO', etc.
    default:
      return state;
  }
};

// You can add more reducers here if needed

export default combineReducers({
  audio: audioReducer,
  // Add more reducers as needed
});
