
import React from 'react'
import { NavLink } from 'react-router-dom';
import { usersApi } from '../api/api';
import styles from './Users.module.css'

let Users = (props)=>{
    //debugger;
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
  
    for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
    }
    //debugger
    return(
        
        (<div>
            { pages.map((p)=>{ return <span onClick={(e)=>{props.onPageChenged(p);}}
            className={styles.Npage} className={props.currrentPage===p && styles.selectedPage}>{p}</span>})
            }
        
        
          {
            props.users.map(u=><div key={u.id}>
               <span>
                 <div>
                  <NavLink to={'/profile/'+u.id}> 
                    <img src={u.photos.small!=null ? u.photos.small:
                      "http://cdn.onlinewebfonts.com/svg/img_290037.png"} width="200" alt=""/>
                  </NavLink>
                 </div>
               </span>
               <span>
               <div>
                 {u.followed ?
                    
                  <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={()=>{

                    //debugger
                   props.toogleIsFollowingProgress(true,u.id)
                    usersApi.setUnfollow(u.id).then((data)=>{
                      if(data.resultCode==0) {props.unfollow(u.id)}
                      
                     props.toogleIsFollowingProgress(false,u.id)
                    })}}>Unfollow</button>
                  :<button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={()=>{
                    //debugger
                    props.toogleIsFollowingProgress(true,u.id)
                    usersApi.setFollow(u.id).then((data)=>{
                      if(data.resultCode==0) {props.follow(u.id)}
                      props.toogleIsFollowingProgress(false,u.id)
                 })}}>Follow</button>
                 }
                   
                 </div>
               </span>
               <span>
                 <div>{u.name}</div>
                 <div>{u.status}</div>
                 </span>
               <span>
               
                 <div>{"u.location.country"}</div>
                 <div>{"u.location.city"}</div>
               </span>
            </div>)
          }
          </div>)
    )
}

export default Users;