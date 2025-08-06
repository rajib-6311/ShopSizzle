import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast'


const Login = ({ setToken }) => {
    const serverURL = import.meta.env.VITE_BACKEND_URL 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleAdminLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(serverURL + "/api/user/admin", {
                email,
                password
            });
            
              const data = response?.data;
            //   console.log(data)
              
              if(data?.success){
                setToken(data?.token)
                toast.success(data?.message)
              }else{
                toast.error(data?.message)
              }
        } catch (error) {
            console.log('Login ERROR', error)
            toast.error(error?.message)
        }

    }
    return (
        <div className="flex items-center justify-center pt-30">
            <form
                onSubmit={handleAdminLogin}
                className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">Admin Login</h1>
                <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
                <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email" placeholder="Email id" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" required />
                </div>

                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 mb-6">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password" placeholder="Password" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full " required />
                </div>

                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity mb-11">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;