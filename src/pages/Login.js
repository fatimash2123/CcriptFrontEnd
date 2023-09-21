function Login() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-emerald-500 text-6xl font-medium mb-4 text-2xl md:text-4xl lg:text-6xl">cↄript</h1>
            <form className="w-5/12">
                <div className="mb-4">
                    <label
                        className="block text-sm text-left font-medium font-sm mb-2"
                        for="username"
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
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-sm text-left font-medium font-sm mb-2"
                        for="password"
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
                    />
                </div>
                <button className="bg-emerald-500 w-full rounded p-2 text-white font-medium">Sign In</button>
            </form>
        </div>
    );
}

export default Login;
