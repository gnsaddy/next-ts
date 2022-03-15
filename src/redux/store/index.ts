// createStore helps in creating a new store instance,
// that'll hold the state of our application
import { createStore } from 'redux';
// We'll be creating this rootReducer in a while
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// Initializing the store object
const store = createStore(rootReducer, composeWithDevTools());


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;