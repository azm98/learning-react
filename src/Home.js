import React,{useState,useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // const [name,setName] = useState('azm');
    // const [age,setAge] = useState(21);
    // const handleClick = () =>{
    //     setName('taaha')
    //     setAge(25)

    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')
   


    return ( 
        <div className="home">
            {/* <h2>Home Component</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>CLick me</button> */}
         {error &&<div>{error}</div>}
         {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
          {/* <button onClick={()=>setName('taaha')}>Change Name</button>
          <p>{name}</p> */}
        </div>
     );
}
 
export default Home;
{/* <h2>Home Component</h2> */}