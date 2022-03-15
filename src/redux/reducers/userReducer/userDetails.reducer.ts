
import { CONSTANTS } from '../../actions';
import produce from 'immer';

type InitialState = {
    userData: {
        name: string;
        email: string;
        userid: string;
    }
}

const initialState: InitialState = {
    userData: {
        name: "Aditya",
        email: "gnsaddy@gmail.com",
        userid: "1233"
    }
}

const userReducer = (state: InitialState = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            case CONSTANTS.SET_USER_DETAILS: {
                const userData: any = action.payload

                draft.userData = userData
                console.log("payload from user reducer", userData)
                break;
            }

            default:
                return draft;
        }
    })

export default userReducer;