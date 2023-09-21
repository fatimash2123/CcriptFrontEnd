import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const signInButton = (event) => {
        event.preventDefault();
        if (!name || !password) {
            console.log(name, " ", password)
            alert("fill in all  fields")
            return
        }
        axios.post("https://ccript-task-b-ackend-77ir.vercel.app/api/login",
            { username: name, password: password })
            .then(response => {
                alert("login successful")
                console.log(response.data.accessToken)
                localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
                navigate("/appointments")
            })
            .catch(err => {
                console.log(err)
                alert("login failed! Try Again")
                setName("")
                setPassword("")
            })


    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-emerald-500 text-6xl font-medium mb-4 text-2xl md:text-4xl lg:text-6xl">cↄript</h1>
            <form className="w-5/12">
                <div className="mb-4">
                    <label
                        className="block text-sm text-left font-medium font-sm mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="focus:shadow-inner focus:shadow-emerald-200 focus:border-emerald-500  
                        border-0 focus:outline-none focus:shadow-outline w-full py-2 px-3 text-gray-700
                        border-b-2 border-black"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-sm text-left font-medium font-sm mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="focus:shadow-inner focus:shadow-emerald-200 focus:border-emerald-500  
                        border-0 focus:outline-none focus:shadow-outline w-full py-2 px-3 text-gray-700
                        border-b-2 border-black"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <button className="bg-emerald-500 w-full rounded p-2 text-white font-medium"
                    onClick={signInButton}>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
