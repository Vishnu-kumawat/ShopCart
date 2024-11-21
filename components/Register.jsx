import React from 'react';

const Register = ({ openLogin }) => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Name</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        type="text"
                        placeholder="Enter your Name"
                        id="name"
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

                <div className="mb-4">
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded">Sign Up</button>
                </div>
            </form>

            <div className="text-center">
                <span className="text-gray-700">Already have an Account?</span>
                <button className="text-red-800 ml-4" onClick={openLogin}>Login</button>
            </div>
        </div>
    );
};

export default Register;
