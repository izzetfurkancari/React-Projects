import axios from "axios";

const getUsers=async(Number)=>{
    const {data:users}=await(axios("https://jsonplaceholder.typicode.com/users/"+Number));
    console.log(users);
    };
    
const getPost=async(Number)=>{
    const {data:post}=await(axios("https://jsonplaceholder.typicode.com/posts?id=" + Number));
    console.log(post);
    };
    

async function getData(Number){
   try{
    const users= await getUsers(Number);
    const post=await getPost(Number);
    return users+post;
   }
  catch(error){
    return error;
  }
}

export default getData