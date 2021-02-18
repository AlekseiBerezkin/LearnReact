import sMyPost from './Post.module.css'

const Post=(props)=>
{
  
    return(
    <div>
      <div className={sMyPost.item}>
        {props.message}
        {props.date}
      </div>
      <div>
        <span>like {props.countLike}</span>
      </div>
      </div>
    
  );

}
export default Post;
