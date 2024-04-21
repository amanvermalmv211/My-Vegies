import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "User Login - MV";
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {

    };

    return (
        <div className={`h-[38rem] flex items-center justify-center text-gray-700 px-4`}>
            <div className={`max-w-md w-full p-4 space-y-4 shadow-[0_6px_10px_#00000090] rounded-xl relative`}>
                <div className='space-y-2'>
                    <div className="flex justify-center mt-2">
                        <div className="w-16 h-16 overflow-hidden rounded-full shadow-[0_6px_10px_#00000090]">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <h2 className={`text-center text-3xl font-extrabold text-green-700`}>Sign in to your account</h2>
                    <p className={`text-center`}>Or <Link to="/userlogin" className='text-blue-500'>Signup</Link> to have an account<Link to="/userlogin" className='cursor-text'>..!</Link></p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="email" className="block ml-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 mt-1 text-gray-800 border rounded-lg focus:outline-none focus:ring ring-green-500 focus:border-green-700"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block ml-1">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 text-gray-800 border rounded-lg focus:outline-none focus:ring ring-green-500 focus:border-green-700"
                            autoComplete='password'
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 top-7 right-5 flex items-center focus:outline-none z-10 text-black"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2 12s5.5-10 12-10 12 10 12 10-5.5 10-12 10-12-10-12-10z"
                                    />
                                </svg>
                            ) : (<i className="fa fa-eye-slash" aria-hidden="true"></i>)
                            }
                        </button>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="w-full my-6 px-4 py-2 font-medium text-white rounded-lg bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-green-600"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>

                </form>

                <div className='absolute -bottom-24 -left-20 lg:-left-28 w-60 h-60'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/young-man-using-laptop-while-seating-on-chair-2706043-2257838.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default UserLogin;