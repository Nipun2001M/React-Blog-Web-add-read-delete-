import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist=({blogs,title,handledelete})=>{
    // const blogs=props.blogs;
    return(
        <div className="bloglist">
            <h>{title}</h>
             {blogs.map((blog)=>(
                <div className="blogpreview" key={blog.id}>
               <Link to={`/blogs/${blog.id}`}>
               <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
               </Link>


            </div>
            ))}
        </div>

    )
}
export default Bloglist;