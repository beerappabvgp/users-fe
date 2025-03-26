import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const CreatePost = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content,setContent] = useState("");
    const [message, setMessage] = useState("");
    useEffect(() => {
        if (!token) {
            return navigate("/login");
        }
    }, [token]);
    const handleCreatePost = async (e) => {
        e.preventDefault();
        setMessage("");
        const response = await axios.post("http://localhost:5000/posts/create", {
            title,
            content
        } , {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        const post = response.data;
        setMessage(post.msg);
        console.log(response);
        return navigate("/");
    }
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-2xl mb-6'>Create a Post ... </h1>
            <form className='flex flex-col space-y-8 items-center justify-center text-2xl border-2 border-cyan-600 p-5 rounded-xl max-w-2xl'>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="" >Title</label>
                    <input type="text" placeholder='Type in the title ... ' onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </div>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="">Content</label>
                    <input type="text" placeholder='Type in the content ... ' onChange={(e) => {
                        setContent(e.target.value);
                    }}/>
                </div>
                <button onClick={handleCreatePost}className='border-2 border-green p-4 rounded-lg'>Create Post</button>
            </form>
            { message && <p>{message}</p>}
        </div>
    )
}

export default CreatePost
