const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT='SET_USERS_TOTAL_COUNT';
let initState={
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currrentPage:3
};


export const usersReducer=(state=initState, action)=>
{
    


switch(action.type)
{
    case FOLLOW:
        return( {...state,users:state.users.map(
            (u)=>{
                if(u.id===action.userId){
                return{...u,followed:true}
            } return u;})}
        )
    case UNFOLLOW:
        return( {...state,users:state.users.map(
            (u)=>{
                if(u.id===action.userId){
                return{...u,followed:false}
            } return u;})}
        )
    case SET_USERS: return{...state,users:action.users}
    case SET_CURRENT_PAGE: return{...state,currrentPage:action.currrentPage}
    case SET_USERS_TOTAL_COUNT: return{...state,totalUsersCount:action.count}
    default: return (state)

}
    
}

export const followAC=(userId)=>{return{type:FOLLOW,userId}}
export const unfollowAC=(userId)=>{return{type:UNFOLLOW,userId}}
export const setUsercAC=(users)=>{return{type:SET_USERS,users}}
export const setCurrentPageAC=(currrentPage)=>{return{type:SET_CURRENT_PAGE,currrentPage}}//для использования без : нужно чтобы было одно имя currentPage
export const setTotalCountAC=(totalUsersCount)=>{return{type:SET_USERS_TOTAL_COUNT,count:totalUsersCount}}

export default usersReducer;