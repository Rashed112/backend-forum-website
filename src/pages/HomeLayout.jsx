import axios from "axios"
import { useLoaderData } from "react-router-dom";
import {Post} from '../components'


export  const loader = async () => {
    try {
        const postData = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        const userData = await axios.get('https://jsonplaceholder.typicode.com/users');

        const posts = postData.data;
        const users = userData.data;
        console.log(postData.data, userData.data);
        return {posts, users};
        
    } catch (error) {
        console.log(error);
    }
}

const HomeLayout = () => {
  const {users, posts} = useLoaderData();
  
  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId)
    return user ? user.name : 'Unknown User';
  }

  const sortedPosts = [...posts].sort((a,b) => b.id - a.id);
  
  return (
    <div>
        {sortedPosts.map(post =>(
            <Post
                key = {post.id}
                title = {post.title}
                body = {post.body}
                userName = {getUserName(post.userId)}
            />
        ))}
    </div>
  )
}
export default HomeLayout