import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleCreateUser = async (e) => {
        // TODO: need to make an api call http://localhost:5000/users/create
        // you need to use fetch api 
        e.preventDefault();
        console.log("handle user creation ... ");
        console.log(e);
        const response = await fetch("http://localhost:5000/users/create", {
            method: "POST",
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const user = await response.json();
        console.log(user);
        navigate("/");
    }
    return (
        <div className='flex items-center justify-center'>
            <form className='flex flex-col space-y-8 items-center justify-center text-2xl border-2 border-cyan-600 p-5 rounded-xl max-w-2xl'>
                <h2>Create User</h2>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="">UserName: </label>
                    <input type="text" placeholder='Type your username ... ' onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                </div>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="">Email: </label>
                    <input type="text" placeholder='Type your Email ... ' onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="">Password: </label>
                    <input type="password" placeholder='Type your password ... ' onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>
                <div className='flex flex-col space-y-2'>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" placeholder='Confirm your password ... ' onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}/>
                </div>
                <button className='border-2 border-green p-4 rounded-lg disabled' onClick={handleCreateUser}>Signup</button>
            </form> 
        </div>
    )
}

export default Signup
