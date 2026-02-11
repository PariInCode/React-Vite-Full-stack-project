import React, {useState , useEffect } from "react";
import appwriteService from "../Appwrite/conf";
import { Container , Postcard } from "../components";

function AllPost(){
    const [post , setPost] = useState([]);
    useEffect(() => {
        appwriteService.getPosts([]).then((post)=>{
        if (post){
            setPost(post.documents)
        }
    })
    } , [])

    

    return(
        <div className="py-8 w-full">
            <Container>
              <div className="flex flex-wrap">
                {post.map((posts) => (
                    <div key={posts.$id} className="p-2 w-1/4 ">
                        <Postcard post={posts} />
                    </div>

                ))}
              </div>
            </Container>
        </div>
    )
}

export default AllPost