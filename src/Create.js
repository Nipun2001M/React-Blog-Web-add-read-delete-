import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create=()=>{
    const [title,setTitle]=useState("")
    const [body,setbody]=useState("")
    const [author,setauthor]=useState("mario")
    const [ispending,setispending]=useState(false)
    const history=useHistory();
    const handleSubmit=(e)=>{
        setispending(true)
        e.preventDefault();
        const blog={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setispending(false);
            history.push('/')
        })
    }

    return(
        
        <div className="create">
        <h1>Add new Blog</h1>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            required>

            </input>
            <label>
                Blog Body:
            </label>
            <textarea  value={body}
            onChange={(e)=>setbody(e.target.value)}
            required>

            </textarea>
            <label>Blog Author:</label>
            <select
            value={author}
            onChange={(e)=>setauthor(e.target.value)}>
                <option value="mario">Mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!ispending &&             <button>Create</button>

}
{ispending &&             <button>Adding</button>
}
        </form>
    </div>
    )


}
export default Create;