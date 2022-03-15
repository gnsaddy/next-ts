// combineReducers will help in creating the rootReducer object,
// that we need to pass to the store instance.
// It combines all the different reducer slices into a single object.
import { combineReducers } from 'redux';

// Sample Reducer file import, 
// we'll create this in a moment as an example.
import userReducer from './userReducer/userDetails.reducer';

export const rootReducer = combineReducers({
    // Sample Reducer name mapping
    user: userReducer,
})

// Optional - We used this earlier in redux.d.ts to provide type intellisense globally
// while using useSelector hook.
// Since we have created our own type enabled useReduxSelector hook, this is not required.
export type RootState = ReturnType<typeof rootReducer>;