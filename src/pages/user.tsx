
import React from 'react'
import { setUserDetail__action } from '../redux/actions/user.action';
import { useReduxDispatch, useReduxSelector } from '../redux/hooks';
import { user__selector } from '../redux/selectors'

export const user = () => {


    const userState = useReduxSelector((state) => user__selector(state));
    const dispatch = useReduxDispatch();

    console.log(userState)


    return (
        <div>
            <button onClick={() => dispatch(setUserDetail__action({
                name: "Saurav",
                email: "saurav@gmail.com",
                userid: "24524"
            }))}>Click to dispatch state</button>
            <br /><br />

            <p></p>

            <button onClick={() => dispatch(setUserDetail__action({
                name: "Amit",
                email: "amit@gmail.com",
                userid: "28479",
                cd: "sdkfb"
            }))}>Click to dispatch state</button>
        </div>
    )
}

export default user;