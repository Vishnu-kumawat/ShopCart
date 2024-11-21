import React, { useState } from 'react';
import { ChevronDown, Phone, Search, ShoppingCart, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/AddToCart';

const Header = ({ openLogin, openSignUp }) => {
    const [searchInput, setSearchInput] = useState('');
    const cart = useCartStore((state) => state.cart);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            navigate(`/filtered-product?query=${encodeURIComponent(searchInput)}`);
            setSearchInput('');
        }
    };

    return (
        <div>

            <div className="bg-green-900 text-white text-xs sm:text-sm font-semibold py-2">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 lg:px-10 space-y-2 md:space-y-0">

                    <div className="flex justify-center md:justify-start items-center space-x-2">
                        <Phone className="w-4 h-4 md:w-5 md:h-5" />
                        <p className="text-xs md:text-sm">+001234567890</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center text-center justify-center space-y-1 md:space-y-0 md:space-x-2">
                        <p className="text-xs md:text-sm">Get 50% Off on Selected Items</p>
                        <span className="hidden md:inline">|</span>
                        <p className="text-xs md:text-sm">Shop Now</p>
                    </div>

                    <div className="flex justify-center md:justify-end items-center space-x-6">
                        <div className="flex items-center space-x-1">
                            <p className="text-xs md:text-sm">Eng</p>
                            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div className="flex items-center space-x-1">
                            <p className="text-xs md:text-sm">Location</p>
                            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                    </div>

                </div>
            </div>


            <div className='h-auto md:h-24 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-10 space-y-4 md:space-y-0'>

                {/* Logo Section */}
                <div className='flex items-center mb-2 md:mb-0'>
                    <img
                        className='h-16 sm:h-20 mix-blend-multiply'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BnamwQSHMGF3vutVgWOYYT-StE1VSmIf1Efk8ekAysodL7fr8ueSriNBzko9vhqSMPk&usqp=CAU"
                        alt="ShopCart Logo"
                    />
                    <p className='ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>ShopCart</p>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-6'>
                    <div className='flex items-center space-x-1'>
                        <p className='text-sm sm:text-base md:text-base lg:text-lg'>Category</p>
                        <ChevronDown />
                    </div>
                    <p className='text-sm sm:text-base md:text-base lg:text-lg'>Deals</p>
                    <p className='text-sm sm:text-base md:text-base lg:text-lg'>What's New</p>
                    <p className='text-sm sm:text-base md:text-base lg:text-lg'>Delivery</p>
                </div>

                {/* Search Bar */}
                <form className='flex items-center relative mb-2 md:mb-0' onSubmit={handleSearch}>
                    <input
                        className='border-2 rounded-xl w-48 sm:w-60 md:w-64 lg:w-72 border-gray-400 px-3 py-1 text-sm sm:text-base md:text-base lg:text-lg'
                        type="text"
                        placeholder='Search Product'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit" className='absolute right-2 text-gray-500'>
                        <Search />
                    </button>
                </form>

                {/* Account and Cart Section */}
                <div className='flex items-center space-x-4 md:space-x-6'>
                    <div className='flex items-center space-x-1'>
                        <User />
                        <button className='text-sm sm:text-base md:text-base lg:text-lg' onClick={openLogin}>Account</button>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <ShoppingCart />
                        <Link to="/cart" className='text-sm sm:text-base md:text-base lg:text-lg'>
                            Cart
                            {cart.length > 0 && (
                                <span className='bg-red-500 text-white text-xs sm:text-sm rounded-full px-1 ml-1'>
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Header;
