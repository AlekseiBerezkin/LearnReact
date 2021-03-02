import axios from "axios";

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "API-KEY": "3f6e8f66-951b-4a4b-9a88-b0ae17de4da0"
    }
  }
);

export const usersApi = {

  getUsers(currrentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currrentPage}&count=${pageSize}`, {}).then(response => { return response.data })
  },

  setFollow(id){
    return instance.post(`follow/${id}`,{},{}).then((response)=>{ return response.data})},

  setUnfollow(id){
    
    return instance.delete(`follow/${id}`,{},{}).then((response)=>{ return response.data})},
 
  getUserProfile(userId){
      return instance.get(`profile/${userId}`).then((response)=>{return response.data})},
  getAuth(){
    return instance.get(`auth/me`,{}).then((response)=>{ return response})
  }
  

}

