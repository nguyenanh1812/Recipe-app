import { createStore } from 'react-redux';
import { rootReducer } from './rootreducer';

export const store = createStore(rootReducer);
