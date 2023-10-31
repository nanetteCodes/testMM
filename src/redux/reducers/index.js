// reducers/index.js
import {combineReducers} from 'redux';
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
  sample: sampleReducer,
  // Add more reducers here
});

export default rootReducer;
