const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT='SET_USERS_TOTAL_COUNT';
const TOOGLE_IS_FEATHING='TOOGLE_IS_FEATHING';


let initState={
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currrentPage:3,
    isFething:false
    
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
    case TOOGLE_IS_FEATHING: return{...state,isFething:action.isFething}
    default: return (state)

}
    
}

export const follow=(userId)=>{return{type:FOLLOW,userId}}
export const unfollow=(userId)=>{return{type:UNFOLLOW,userId}}
export const setUsers=(users)=>{return{type:SET_USERS,users}}
export const setCurrentPage=(currrentPage)=>{return{type:SET_CURRENT_PAGE,currrentPage}}//для использования без : нужно чтобы было одно имя currentPage
export const setTotalCount=(totalUsersCount)=>{return{type:SET_USERS_TOTAL_COUNT,count:totalUsersCount}}
export const toogleIsFething=(isFething)=>{return{type:TOOGLE_IS_FEATHING,isFething}}
export default usersReducer;