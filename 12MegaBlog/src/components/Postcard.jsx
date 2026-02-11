import React from 'react'
import appwriteService from "../Appwrite/conf"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  console.log("featuredImage:", featuredImage);


  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>

          {featuredImage &&  (
          <img
            src={appwriteService.getFileView(featuredImage).toString()}
            alt={title}
            className='w-full h-64 object-cover rounded-xl shadow-md'
          />
          )}



        </div>
        <h2
          className='text-xl text-gray-800 font-bold'
        >{title}</h2>
      </div>
    </Link>
  )
}


export default PostCard