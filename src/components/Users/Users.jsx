import React from 'react'
import styles from './Users.module.css'

let Users = (props)=>{
    //debugger;
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
  
    for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
    }
    return(
        
        (<div>
            { pages.map((p)=>{ return <span onClick={(e)=>{props.onPageChenged(p);}}className={styles.Npage} className={props.currrentPage===p && styles.selectedPage}>{p}</span>})}
        
        
          {
            props.users.map(u=><div key={u.id}>
               <span>
                 <div>
                   <img src={u.photos.small!=null ? u.photos.small:"http://cdn.onlinewebfonts.com/svg/img_290037.png"} width="200" alt=""/>
                 </div>
               </span>
               <span>
               <div>
                 {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                 :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                   
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