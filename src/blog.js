import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Post from './post'
import Pagination from './pagination'

const Blog=()=> {
    const[posts,setPosts] = useState([]);
    const[loading,setLoading] = useState(false)
    const[currentPage,setcurrentPage] = useState(1);
    const[postperpage,setPostperpage] = useState(10);

    useEffect(()=>{
        const fetchPost=async()=>{
            setLoading(true);
            const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        };
        fetchPost();
    },[])
   //GetCurrentPost

   const indexOflastpost = currentPage*postperpage;
   const indexOffirstpost= indexOflastpost-postperpage;
   const currentPost = posts.slice(indexOffirstpost,indexOflastpost)

   //paginate
   const paginate=(pageNumber)=>setcurrentPage(pageNumber);
    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-3">My Blog</h2>
            <Post posts={currentPost} loading={loading}/>
            <Pagination postPerpage={postperpage} totalPost={posts.length} paginate={paginate}/>
        </div>
    )
}
export default Blog;