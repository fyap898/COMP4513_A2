const Login = (props) => {

    // console.log(props.email);
    // console.log(props.password);

    return(
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-8xl font-bold text-[#0A171A] mb-10 tracking-widest">
                Art Dashboard
            </h1>

            <div className="bg-[#6B8B93]/65 p-8 rounded-lg shadow-xl w-full max-w-xl">
                <h2 className="text-3xl font-bold text-[#0A171A] mb-6 text-center">
                    Login
                </h2>

                <form className="space-y-6" onSubmit={props.handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#DAE2DF] mb-1 text-left">
                            Email
                        </label>
                        <input type="email" 
                            id="email" 
                            value={props.email}
                            onChange={(e) => props.setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-[#6B8B93] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D5C64] bg-[#A0BBBF] text-[#0A171A]" 
                            placeholder="Enter your email"/>
                    </div>

                    <div>
                        <label htmlFor="password"
                                className="block text-sm font-semibold text-[#DAE2DF] mb-1 text-left">
                            Password
                        </label>
                        <input type="password"
                                id="password"
                                value={props.password}
                                onChange={(e) => props.setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-[#6B8B93] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D5C64] bg-[#A0BBBF] text-[#0A171A]"
                                placeholder="Enter your password"/>
                    </div>

                    <div className="flex justify-between">
                        <button type="submit"
                                className="px-6 py-2 border border-[#6B8B93] rounded-md bg-[#0A171A] text-white hover:bg-[#6B8B93] font-semibold transition">
                            Login
                        </button>
                        <button type="button"
                                className="px-6 py-2 border border-[#6B8B93] rounded-md bg-[#0A171A] text-white hover:bg-[#6B8B93] font-semibold transition">
                            Register
                        </button>
                    </div>
                </form>
            </div>

            <a href='https://unsplash.com/photos/black-textile-on-green-textile-FtOfK7TAYmw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash'
                className="fixed bottom-2 left-2">
                <p className="mt-10 text-[#3D5C64] italic text-[#A0BBBF]">Hero image credit</p>
            </a>
        </div>
    );
}

export default Login;