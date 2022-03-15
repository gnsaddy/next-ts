import { RootState } from '../../reducers/index';
import { createSelector } from "reselect";

const userSlice = (state: RootState) => state.user.userData;

export const user__selector = createSelector(
    [userSlice],
    (user) => {
        return user;
    }
)