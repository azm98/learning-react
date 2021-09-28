import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [ispending,setIspending] = useState(false);

    const history = useHistory();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        console.log(blog)
        setIspending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json" },
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIspending(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add New Blog...</h2>
            <form onSubmit={handlesubmit}>
                <label>Body Title : </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body : </label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog author : </label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario" >mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
               {!ispending && <button>Add Blog</button>}
               {ispending && <button>Adding Blog....</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
      );
}
 
export default Create;