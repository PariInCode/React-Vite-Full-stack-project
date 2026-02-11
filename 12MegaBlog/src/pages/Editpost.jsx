
import {Container,PostForm} from '../components'
import appwriteService from "../Appwrite/conf";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";


function EditPost(){
    const [post , setPosts] = useState(null)
    const navigate=useNavigate()
    const {slug} = useParams()

    useEffect (() => {
        if(slug){
            appwriteService.getPosts(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate("/")
        }
    })
    return(
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    )
}

export default EditPost