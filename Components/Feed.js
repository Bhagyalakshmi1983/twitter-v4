import React from "react";
import {SparklesIcon} from "@heroicons/react/24/outline"
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Bhagya",
      username: "code with Bhagyalakshmi",
      userimg: "/Images/APZE5774.JPG",
      img: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      text: "nice view",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      name: "Bhagya",
      username: "code with Bhagyalakshmi",
      userimg: "/Images/APZE5774.JPG",
      img: "https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      text: "wow!",
      timestamp: "2 days ago"
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
<SparklesIcon className="h-5"/>
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}
