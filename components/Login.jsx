import React from 'react';

const Login = ({ openSignUp }) => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        type="email"
                        placeholder="Enter Email"
                        id="email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="password">Password</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        type="password"
                        id="password"
                    />
                </div>

                <div className="mb-4 flex items-center justify-between">
                    <label className="inline-flex items-center" htmlFor="remember">
                        <input className="form-checkbox" type="checkbox" id="remember" />
                        <span className="ml-2 mr-4 text-gray-700">Remember me</span>
                    </label>
                    <a className="text-red-800" href="#">Forgot Password?</a>
                </div>

                <div className="mb-4">
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">Login</button>
                </div>
            </form>

            <div className="flex justify-between">
                <span className="text-gray-700">Don't have an Account?</span>
                <button className="text-red-800" onClick={openSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default Login;
