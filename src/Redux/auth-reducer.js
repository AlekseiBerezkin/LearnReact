import { usersApi } from "../components/api/api";

const SET_USER_DATA='SET_USER_DATA';




let initState={
    userId:null,
    email:null,
    login:null,
    isAuth:false

    
};


export const authReducer=(state=initState, action)=>
{
    


switch(action.type)
{
    case SET_USER_DATA:
        return {...state,
        ...action.data,
        isAuth:true
        }
        

    default: return (state)

}
    
}

export const setAuthUserData=(userId,email,login)=>( {type:SET_USER_DATA,data:{userId,email,login}})

export const authUser =()=>{
    //debugger;
    return (dispatch)=>{
        
        usersApi.getAuth().then((data)=>{ 
            
            //debugger
            if(data.resultCode===0)
                {   
                    let {id,email,login}=data.data;
                    dispatch(setAuthUserData(id,email,login))
                    //debugger
                }
            }
            )
        }
        }


export default authReducer;