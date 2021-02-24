import axios from 'axios';
import React from 'react'

class Users extends React.Component{

  /*constructor(props)
  {
    super(props);
    

  
  }*/

  componentDidMount()
  {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response)=>{ 
    this.props.setUsers(response.data.items);})
  }
    getUsers=()=>
  {
    /* if(this.props.users.length===0)
    { 
      //  debugger;
      //console.log('ds'); 
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response)=>{ 
        this.props.setUsers(response.data.items);
      })
     props.setUsers(
        
        [ 
        {id:1,photoUrl:'https://sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg',followed:true, fullName:"Вася",status:"All zbs", location:{city:"Минск", country:"Беларусь"}},
        {id:2,photoUrl:'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/234/946/6.jpg',followed:false,fullName:"Аня",status:"Учусь", location:{city:"Ростов", country:"Россия"}},
        {id:3,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cat_eyes_2007-1.jpg/250px-Cat_eyes_2007-1.jpg',followed:true,fullName:"Макс",status:"Бухаю", location:{city:"Лосанджелес", country:"США"}}
        ]
      )
    
    }*/
  }
   


render() {return(<div>
  <button onClick={this.getUsers}>Get users</button>
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