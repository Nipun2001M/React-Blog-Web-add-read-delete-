import { useState,useEffect } from "react"
import Bloglist from "./bloglist"
import useFetch from "./usefetch"
const Home=()=>{
    const {blogs,ispneding,error}=useFetch('http://localhost:8000/blogs')
    
   
    return(
        <div className="home">
            {ispneding && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
            {/* <Bloglist blogs={blogs.filter((blog)=>(
                blog.author==="mario"

            ))} title="Marios Blogs!"/> */}



           </div>


    )

}
export default Home;