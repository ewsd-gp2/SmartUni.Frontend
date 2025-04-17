import axios from "axios"
const BASE_URL = "http://localhost:7142";
export const getBlogs = async () => {
 try{
    const response = await axios.get(`${BASE_URL}/blog`,{
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:5173", 
        },
        withCredentials: true,
     });  
     return response.data    
 }  catch(error){
    console.log("Fetching blog error", error)
 }
}

