// import React, { useState } from 'react';
// import useCartStore from '../store/AddToCart';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//     const cart = useCartStore((state) => state.cart);
//     const removeFromCart = useCartStore((state) => state.removeFromCart);
//     const addToCart = useCartStore((state) => state.addToCart);

//     const totalPrice = cart.reduce((total, item) => total + (item.price) * (item.quantity), 0);

//     const [address, setAddress] = useState("Flat no.301, sachi bhavan, ambernath (e) , 421-501");
//     const [newAddress, setNewAddress] = useState('');
//     const [isEditing, setIsEditing] = useState(false);

//     const navigate = useNavigate()

//     const handleAddressChange = () => {
//         if (newAddress.trim() !== '') {
//             setAddress(newAddress);
//             setNewAddress('');
//             setIsEditing(false);
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <div className='flex mx-20'>

//                     <div>
//                         {cart.map((item) => (
//                             <div key={item.id} className="border rounded-xl p-4 mt-2 flex justify-between items-center">
//                                 <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
//                                 <div className="flex-grow mx-4">
//                                     <p>{item.title}</p>
//                                     <p>Price: ${item.price.toFixed(2)}</p>

//                                     <div className="flex items-center">
//                                         <p>Quantity: </p>
//                                         <button
//                                             onClick={() => addToCart(item)} // Increase quantity
//                                             className="bg-green-500 ml-3 text-white px-2 rounded"
//                                         >
//                                             +
//                                         </button>
//                                         <p className='ml-3'>{item.quantity}</p>
//                                         <button
//                                             onClick={() => removeFromCart(item.id)} // Decrease quantity
//                                             className="bg-red-500 text-white px-2 rounded ml-3"
//                                         >
//                                             -
//                                         </button>
//                                     </div>
//                                     <p>SubTotal: {(item.price.toFixed(2) * (item.quantity))}</p>
//                                 </div>
//                                 <button
//                                     onClick={() => removeFromCart(item.id)}
//                                     className="border font-semibold border-red-500 text-red-500 rounded-2xl px-4 py-2"
//                                 >
//                                     Remove
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     <div className=" pb-5 mt-2 ml-10">
//                         <div className='border rounded-xl pb-5'>
//                             <p className='ml-5 mt-5 text-xl font-semibold'>CART TOTALS</p>
//                             <div className='mx-5 mt-2 border-b border-gray-400'>
//                                 <p className='pb-3'>TOTAL ITEMS : {cart.length}</p>
//                             </div>

//                             <div className='mx-5 mt-5 '>
//                                 <span >Shipping Address: </span>
//                                 <span>{address}</span>
//                             </div>

//                             <div className="mt-4 mx-5 border-b border-gray-400 pb-5">
//                                 <button
//                                     onClick={() => setIsEditing(!isEditing)}
//                                     className="bg-blue-500 text-white p-2 rounded"
//                                 >
//                                     {isEditing ? 'Cancel' : 'Change Address'}
//                                 </button>

//                                 {isEditing && (
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             value={newAddress}
//                                             onChange={(e) => setNewAddress(e.target.value)}
//                                             placeholder="Enter new address"
//                                             className="border p-2 rounded"
//                                         />
//                                         <button
//                                             onClick={handleAddressChange}
//                                             className="ml-2 bg-green-500 text-white p-2 rounded"
//                                         >
//                                             Update Address
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>

//                             <div className='mx-5'>
//                                 <p className="text-xl font-semibold mt-4">Total Price: ${totalPrice.toFixed(2)}</p>
//                                 <button className="mt-4 bg-red-500 w-full text-xl text-white p-2 rounded" onClick={() => navigate('/checkout')}>Proceed To Checkout</button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;


import React, { useState } from 'react';
import useCartStore from '../store/AddToCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const addToCart = useCartStore((state) => state.addToCart);

    const totalPrice = cart.reduce((total, item) => total + (item.price) * (item.quantity), 0);

    const [address, setAddress] = useState("Flat no.301, sachi bhavan, ambernath (e) , 421-501");
    const [newAddress, setNewAddress] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const navigate = useNavigate()

    const handleAddressChange = () => {
        if (newAddress.trim() !== '') {
            setAddress(newAddress);
            setNewAddress('');
            setIsEditing(false);
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-sm sm:text-base">Your cart is empty.</p>
            ) : (
                <div className='flex flex-col lg:flex-row mx-2 sm:mx-4 lg:mx-20'>

                    <div className="w-full lg:w-2/3">
                        {cart.map((item) => (
                            <div key={item.id} className="border rounded-xl p-4 mt-2 flex flex-col sm:flex-row justify-between items-center">
                                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                                <div className="flex-grow mx-4 mt-2 sm:mt-0">
                                    <p className="text-sm sm:text-base md:text-lg">{item.title}</p>
                                    <p className="text-sm sm:text-base md:text-lg">Price: ${item.price.toFixed(2)}</p>

                                    <div className="flex items-center mt-2">
                                        <p className="text-sm sm:text-base">Quantity: </p>
                                        <button
                                            onClick={() => addToCart(item)} // Increase quantity
                                            className="bg-green-500 ml-3 text-white px-2 rounded"
                                        >
                                            +
                                        </button>
                                        <p className='ml-3 text-sm sm:text-base'>{item.quantity}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)} // Decrease quantity
                                            className="bg-red-500 text-white px-2 rounded ml-3"
                                        >
                                            -
                                        </button>
                                    </div>
                                    <p className="text-sm sm:text-base">SubTotal: ${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="border font-semibold border-red-500 text-red-500 rounded-2xl px-4 py-2 mt-2 sm:mt-0"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/3 pb-5 mt-2 lg:ml-10">
                        <div className='border rounded-xl pb-5'>
                            <p className='ml-5 mt-5 text-lg sm:text-xl md:text-2xl font-semibold'>CART TOTALS</p>
                            <div className='mx-5 mt-2 border-b border-gray-400'>
                                <p className='pb-3 text-sm sm:text-base'>TOTAL ITEMS : {cart.length}</p>
                            </div>

                            <div className='mx-5 mt-5 '>
                                <span className="text-sm sm:text-base">Shipping Address: </span>
                                <span className="text-sm sm:text-base">{address}</span>
                            </div>

                            <div className="mt-4 mx-5 border-b border-gray-400 pb-5">
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="bg-blue-500 text-white p-2 rounded text-sm sm:text-base"
                                >
                                    {isEditing ? 'Cancel' : 'Change Address'}
                                </button>

                                {isEditing && (
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={newAddress}
                                            onChange={(e) => setNewAddress(e.target.value)}
                                            placeholder="Enter new address"
                                            className="border p-2 rounded w-full text-sm sm:text-base"
                                        />
                                        <button
                                            onClick={handleAddressChange}
                                            className="ml-2 bg-green-500 text-white p-2 rounded text-sm sm:text-base"
                                        >
                                            Update Address
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className='mx-5'>
                                <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">Total Price: ${totalPrice.toFixed(2)}</p>
                                <button className="mt-4 bg-red-500 w-full text-lg sm:text-xl text-white p-2 rounded" onClick={() => navigate('/checkout')}>Proceed To Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
