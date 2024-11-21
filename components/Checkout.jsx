import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/AddToCart';

const Checkout = ({ setOrder }) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const { cart } = useCartStore(state => state);
    const navigate = useNavigate();
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        zip: ""
    });

    const handleOrder = () => {
        if (!shippingInfo.address || !shippingInfo.city || !shippingInfo.zip) {
            alert("Please complete the shipping information.");
            return;
        }
        const newOrder = {
            products: cart,
            orderNumber: "123456",
            shippingInformation: shippingInfo,
            totalPrice: cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        };
        setOrder(newOrder);
        navigate("/order-confirmation");
    };

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='p-2 mb-6'>


                        {/* Billing Information */}
                        <div className='border rounded-2xl px-2 py-3'>
                            <div className='text-lg flex justify-between font-semibold mb-2' onClick={() => setBillingToggle(!billingToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                                {billingToggle ? <ChevronUp /> : <ChevronDown />}
                            </div>

                            <div className={`space-y-4 ${billingToggle ? '' : 'hidden'}`}>
                                <div>
                                    <label className='block text-gray-700'>Name</label>
                                    <input className='w-full px-3 py-2 border rounded-xl' type="text" />
                                </div>
                                <div>
                                    <label className='block text-gray-700'>Email</label>
                                    <input className='w-full px-3 py-2 border rounded-xl' type="email" />
                                </div>
                                <div>
                                    <label className='block text-gray-700'>Phone</label>
                                    <input className='w-full px-3 py-2 border rounded-xl' type="text" />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Information */}
                        <div className='border rounded-2xl px-2 mt-3 py-3'>
                            <div className='text-lg flex justify-between font-semibold mb-2' onClick={() => setShippingToggle(!shippingToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                                {shippingToggle ? <ChevronUp /> : <ChevronDown />}
                            </div>

                            <div className={`space-y-4 ${shippingToggle ? '' : 'hidden'}`}>
                                <div>
                                    <label className='block text-gray-700'>Address</label>
                                    <input className='w-full px-3 py-2 border rounded-xl' type="text" name='address' onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
                                </div>
                                <div>
                                    <label className='block text-gray-700'>City</label>
                                    <input className='w-full px-3 py-2 border rounded-xl' type="text" name='city' onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })} />
                                </div>
                                <div>
                                    <label className='block text-gray-700'>Zip Code</label>
                                    <input className='w-full px-3 py-2 border rounded-xl' type="text" name='zip' onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className='border rounded-2xl px-2 mt-3 py-3'>
                            <div className='text-lg flex justify-between font-semibold mb-2' onClick={() => setPaymentToggle(!paymentToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                                {paymentToggle ? <ChevronUp /> : <ChevronDown />}
                            </div>

                            <div className={`space-y-4 ${paymentToggle ? '' : 'hidden'}`}>
                                <div className='flex items-center mb-2'>
                                    <input type="radio" name='payment' checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                    <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <input type="radio" name='payment' checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                                    <label className='block text-gray-700 ml-2'>Debit Card</label>
                                </div>
                                {paymentMethod === "dc" && (
                                    <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                        <h3 className='text-xl font-semibold mb-4'>Debit card Information</h3>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                            <input className='border p-2 w-full rounded-xl' type="text" placeholder='Enter Card Number' />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                            <input className='border p-2 w-full rounded-xl' type="text" placeholder='Enter Name ' />
                                        </div>
                                        <div className='flex justify-between mb-4'>
                                            <div className='w-1/2 mr-2'>
                                                <label className='block text-gray-700 font-semibold mb-2'>Expire date</label>
                                                <input className='border p-2 w-full rounded-xl' type="text" placeholder='MM/YY' />
                                            </div>
                                            <div className='w-1/2 ml-2'>
                                                <label className='block text-gray-700 font-semibold mb-2'>CVV number</label>
                                                <input className='border p-2 w-full rounded-xl' type="text" placeholder='CVV number' />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className='md:w-1/3 bg-white    '>
                    <div className='border shadow-md p-6 rounded-xl mt-2'>
                        <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                        <div className='space-y-4'>
                            {cart.map((product) => (
                                <div key={product.id} className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <img className='w-16 h-16 object-contain rounded' src={product.image} alt="" />
                                        <div className='ml-4'>
                                            <h4 className='text-md font-semibold'>{product.title}</h4>
                                            <p className='text-gray-600'>$ {product.price} x {product.quantity}</p>
                                        </div>
                                    </div>
                                    <div className='text-gray-800'>
                                        ${(product.price * product.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}

                            <div className='flex justify-between'>
                                <h3 className='text-lg font-semibold'>Total Price:</h3>
                                <p className='text-gray-700'>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                            </div>
                            <button className='px-4 py-2 mt-4 bg-red-500 hover:bg-green-700 text-white w-full rounded-md' onClick={handleOrder}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
