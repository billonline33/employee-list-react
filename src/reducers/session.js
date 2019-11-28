import cognitoUtils from '../lib/cognitoUtils';

const SET_SESSION="SET_SESSION";
const CLEAR_SESSION="CLEAR_SESSION";



const initialState={
    isLoggedIn:false
}

export default (state=initialState, action)=>{
  switch (action.type){
    case SET_SESSION:
       return {
           ...state,
           isLoggedIn: true
       }

    case CLEAR_SESSION:
        return {
            ...state,
            ...initialState
        }

    default:
        return state;
  }
}


/* Actions */

export const setSession=()=>{
    return dispatch=>{
        dispatch({
            type:SET_SESSION
        })
    }
}

export const clearSession=()=>{
    return dispatch=>{
        dispatch({
            type:CLEAR_SESSION
        })
    }
}

export function initSessionFromCallbackURI(callbackHref){
    return dispatch=>{
        return cognitoUtils.parseCognitoWebResponse(callbackHref)
               .then(()=>{
                   return cognitoUtils.getCognitoSession()
               })
               .then((session)=>{
                   debugger;
                  dispatch({
                    type:SET_SESSION,
                    session
                  })
               })
    }
}

