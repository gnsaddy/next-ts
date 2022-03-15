import { CONSTANTS } from './index'

type InitialState = {
    name: string;
    email: string;
    userid: string;
}



export const setUserDetail__action = (userData: InitialState) => {
    console.log("user action", userData)

    return {
        type: CONSTANTS.SET_USER_DETAILS,
        payload: userData
    }
}