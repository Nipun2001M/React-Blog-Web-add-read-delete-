import { useState,useEffect } from "react"
const useFetch=(url)=>{

    const [blogs,setblogs]=useState(null)
    const [ispneding,setispending]=useState(true)
    const [error,seterror]=useState(null)
  
    useEffect(()=>{
      const abortCont=new AbortController();

      setTimeout(()=>{
        fetch(url,{signal:abortCont.signal}).then(res=>{
            if(!res.ok){
                throw Error('could not fetch data from that resource') 
            }
            return res.json();
           })
           .then((data)=>{
            console.log(data)
            setblogs(data)
            setispending(false)
    
           })
           .catch((error)=>{
            if(error.name==='AbortError'){
              console.log("Fetch Aborted")
            }else{
              console.log(error.message())
              seterror(error.message)
              setispending(false)

            }
           

           })
      },1000)
      return ()=>abortCont.abort();
    },[url])
    return {blogs,ispneding,error}
}
export default useFetch;