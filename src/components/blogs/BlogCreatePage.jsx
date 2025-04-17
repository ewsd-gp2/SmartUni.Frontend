import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import GradientButton from '../buttons/GradientButton';
import { IoAddCircle } from 'react-icons/io5';

const BlogCreatePage = () => {
  const blogTypes = ["KnowledgeSharing", "Announcement", "NewsLetter"];
  const [type, setType] = useState("");
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const userRole = localStorage.getItem("user_role");

const navigate = useNavigate()
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!type || !title.trim() || !content.trim() || !coverImage) {
      toast.error("Please fill in all fields before submitting.", {
        icon: "✋",
        style: {
          borderRadius: "8px",
          background: "#ECFDF5", // Teal-50
          color: "#065F46", // Teal-800
          borderLeft: "4px solid #047857", // Teal-700
          boxShadow: "0 2px 10px rgba(5, 150, 105, 0.1)",
          fontSize: "20px",
        },
        iconTheme: {
          primary: "#047857", // Teal-700
          secondary: "#D1FAE5", // Teal-100
        },
      });
      return;
    }
    const formData = new FormData();
    formData.append("type", type);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("coverImage", coverImage);
    try{
   const url="http://localhost:7142/blog";
   await axios.post(url,formData,{
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:5173",
    },
    withCredentials: "true",
   });
   toast.success("Blog created successfully");
 navigate(`/${userRole}/blog`);
    }catch(error){
      console.log(error);
    }
   
  };

  
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Create A Blog Post</h1>
      
      <form className="space-y-6" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="blogType" className="block text-sm font-medium text-gray-700 mb-1">Blog Type</label>
          <select
            id="blogType"
            onChange={(e) => setType(e.target.value)}
            className="block w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">Select Blog Type</option>
            {blogTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
            
          </select>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            id="content"
            rows="4"
            onChange={(e) => setContent(e.target.value)}
            className="block w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:ring-teal-500 focus:border-teal-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            accept='image/*'
            onChange={(e) => {
              const file = e.target.files[0];
              setCoverImage(file);
              if (file) {
                setPreviewImage(URL.createObjectURL(file));
              }
            }}
            className="block w-full text-sm text-gray-700"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-2 max-w-full h-auto"
            />
          )}
        </div>
        <GradientButton Icon={IoAddCircle} type="submit" text={"Create Blog"} width={"full"} rounded={"xl"} />
      </form>
    </div>
  )
}

export default BlogCreatePage;
