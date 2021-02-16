import sMyPost from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

  
let ElementPosts = props.posts.map(p=> <Post message={p.message}  countLike={p.like} />);
  return (
    <div className={sMyPost.posts}>
      <h3>New posts</h3> 
      <div>
        <textarea name="" id="" cols="30" rows="1">

        </textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      
      {ElementPosts}
    </div>
  );

}
export default MyPosts;
