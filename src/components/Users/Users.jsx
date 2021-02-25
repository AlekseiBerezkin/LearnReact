import axios from 'axios';
import React from 'react'
import styles from './Users.module.css'
class Users extends React.Component{

  /*constructor(props)
  {
    super(props);
  }*/

  componentDidMount()
  {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currrentPage}&count=${this.props.pageSize}`).then((response)=>{ 
    this.props.setUsers(response.data.items);
    this.props.setTotalCount(response.data.totalCount);})
  }
    onPageChenged=(pageNumber)=>
  {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response)=>{ 
      this.props.setUsers(response.data.items);})
  }
   


render() {
  let pagesCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize);
  let pages=[];

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }
  return(<div>
    { pages.map((p)=>{ return <span onClick={(e)=>{this.onPageChenged(p);}}className={styles.Npage} className={this.props.currrentPage===p && styles.selectedPage}>{p}</span>})}


  {
    this.props.users.map(u=><div key={u.id}>
       <span>
         <div>
           <img src={u.photos.small!=null ? u.photos.small:"http://cdn.onlinewebfonts.com/svg/img_290037.png"} width="200" alt=""/>
         </div>
       </span>
       <span>
       <div>
         {u.followed ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button> 
         :<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
           
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
  </div>)}
}

export default Users;