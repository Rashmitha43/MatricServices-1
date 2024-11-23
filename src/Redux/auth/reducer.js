
import * as types from './actionTypes'
const initalState = {
    isLoading:false,
    isError:false,
    getlogin:{}
}

export const reducer = (state=initalState,action)=>{
    const {type,payload} = action;

    switch(type){
     
        //post login details
        case types.POST_LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
            };
        case types.POST_LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case types.POST_LOGIN_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:payload
            }

        //get login details
        case types.GET_LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
                getlogin:{}
            };
        case types.GET_LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                getlogin:payload
            };
        case types.GET_LOGIN_FAILURE:
            return{
             ...state,
             isLoading:false,
             isError:payload,
             getlogin:{}
            }
        default :{
            return state
        }
    }
}