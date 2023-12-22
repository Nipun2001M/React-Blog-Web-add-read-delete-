import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom";

const BlogDetails=()=>{
    const {id}=useParams();
    const history=useHistory();
    const {blogs,ispneding,error}=useFetch('http://localhost:8000/blogs/'+id)
    const handleclick=()=>{
        fetch('http://localhost:8000/blogs/'+blogs.id,{
            method:"DELETE",

        }).then(()=>{
            history.push('/')

        })
    }
    return(
        <div className="blogdetails">
            {ispneding && <div>Loading...</div>}
            {error && <div>Loading...</div>} 
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written By {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleclick}>Delete</button>
                </article>
            )} 

            
            

        </div>

    )
}
export default BlogDetails;