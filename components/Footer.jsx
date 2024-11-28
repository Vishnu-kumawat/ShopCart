// import React from 'react'
// import { BadgeHelp, BriefcaseBusiness, Gift } from "lucide-react"

// const Footer = () => {
//     return (
//         <div>

//             <div className='flex mx-20 border-t-2 border-b-2 pt-10 mt-10 pb-10 mb-10'>
//                 <div className=''>
//                     <div className='flex items-center'>
//                         <img className='w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BnamwQSHMGF3vutVgWOYYT-StE1VSmIf1Efk8ekAysodL7fr8ueSriNBzko9vhqSMPk&usqp=CAU" alt="" />
//                         <p className='text-2xl text-green-950 font-bold'> SHOPCART</p>
//                     </div>
//                     <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//                     <p> Voluptatem, id voluptatibus rem in harum aspernatur suscipit aliquid.</p>
//                     <p> amet quo est? Totam non reiciendis beatae?</p>
//                 </div>

//                 <div className='ml-16'>
//                     <h1 className='text-xl font-semibold'>Department</h1>
//                     <ul className='mt-5'>
//                         <li className='hover:text-center hover:text-orange-500'>Fashion</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Education Product</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Frozen Food</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Beverages</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Organic Grocery</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Office Supplies</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Beauty Products</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Books</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Electronics & Gadgets</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Travel Accesories</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Fitness</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Sneakers</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Toys</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Furniture</li>
//                     </ul>
//                 </div>

//                 <div className='ml-16'>
//                     <p className='text-xl font-semibold'>About Us</p>
//                     <ul className='mt-5'>
//                         <li className='mt-1 hover:text-center hover:text-orange-500' >About Shopcart</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Careers</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>News & Blog</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Help</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Press center</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Shop by Location</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Shopcart Brands</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Affiliate & Partners</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Ideas & Guides</li>
//                     </ul>
//                 </div>

//                 <div className='ml-16'>
//                     <p className='text-xl font-semibold'>Services</p>
//                     <ul className='mt-5'>
//                         <li className='mt-1 hover:text-center hover:text-orange-500' >Gift Card</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Mobile App</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Shipping and Delivery</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Order Pickup</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Account Signup</li>
//                     </ul>
//                 </div>

//                 <div className='ml-16'>
//                     <p className='text-xl font-semibold'>Help</p>
//                     <ul className='mt-5'>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Shopcart Help</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Returns</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Track Orders</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Contact Us</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Feedback</li>
//                         <li className='mt-1 hover:text-center hover:text-orange-500'>Security and Fraud</li>
//                     </ul>
//                 </div>
//             </div>



//             <div className='flex mx-20 mb-10 '>

//                 <div className='flex ml-10 hover:text-orange-500 cursor-pointer'>
//                     <p> <BriefcaseBusiness className='text-pink-500' /> </p>
//                     <p className='text-base ml-2 font-medium'>Become Seller</p>
//                 </div>

//                 <div className='flex ml-10 hover:text-orange-500 cursor-pointer'>
//                     <p> <Gift className='text-pink-500' /> </p>
//                     <p className='text-base ml-2 font-medium'>Gift Cards</p>
//                 </div>

//                 <div className='flex ml-10 hover:text-orange-500 cursor-pointer'>
//                     <p> <BadgeHelp className='text-pink-500' /> </p>
//                     <p className='text-base ml-2 font-medium'>Help Center</p>
//                 </div>

//                 <div className='flex '>
//                     <p className='text-base ml-20 font-medium hover:text-orange-500 cursor-pointer'>Terms of Services</p>
//                     <p className='text-base ml-20 font-medium hover:text-orange-500 cursor-pointer'>Privacy & Policy</p>
//                     <p className='text-base ml-20 font-medium hover:text-orange-500 cursor-pointer'>All Rights reserved by musemind agency | 2022 </p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Footer


import React from 'react'
import { BadgeHelp, BriefcaseBusiness, Gift } from "lucide-react"

const Footer = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-10">

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t-2 border-b-2 py-10'>

                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <img className='w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BnamwQSHMGF3vutVgWOYYT-StE1VSmIf1Efk8ekAysodL7fr8ueSriNBzko9vhqSMPk&usqp=CAU" alt="SHOPCART Logo" />
                        <p className='text-2xl text-green-950 font-bold ml-3'>SHOPCART</p>
                    </div>
                    <div className='mt-5 text-sm'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id voluptatibus rem in harum aspernatur suscipit aliquid. amet quo est? Totam non reiciendis beatae?</p>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-xl font-semibold'>Department</h1>
                    <ul className='mt-5 text-sm'>
                        <li className='hover:text-center hover:text-orange-500'>Fashion</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Education Product</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Frozen Food</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Beverages</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Organic Grocery</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Office Supplies</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Beauty Products</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Books</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Electronics & Gadgets</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Travel Accessories</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Fitness</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Sneakers</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Toys</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Furniture</li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='text-xl font-semibold'>About Us</h1>
                    <ul className='mt-5 text-sm'>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>About Shopcart</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Careers</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>News & Blog</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Help</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Press Center</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Shop by Location</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Shopcart Brands</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Affiliate & Partners</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Ideas & Guides</li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='text-xl font-semibold'>Services</h1>
                    <ul className='mt-5 text-sm'>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Gift Card</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Mobile App</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Shipping and Delivery</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Order Pickup</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Account Signup</li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='text-xl font-semibold'>Help</h1>
                    <ul className='mt-5 text-sm'>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Shopcart Help</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Returns</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Track Orders</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Contact Us</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Feedback</li>
                        <li className='mt-1 hover:text-center hover:text-orange-500'>Security and Fraud</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-wrap justify-between items-center mx-20 mb-10 mt-10 text-sm'>

                <div className='flex items-center hover:text-orange-500 cursor-pointer'>
                    <BriefcaseBusiness className='text-pink-500' />
                    <p className='ml-2 font-medium'>Become Seller</p>
                </div>

                <div className='flex items-center hover:text-orange-500 cursor-pointer'>
                    <Gift className='text-pink-500' />
                    <p className='ml-2 font-medium'>Gift Cards</p>
                </div>

                <div className='flex items-center hover:text-orange-500 cursor-pointer'>
                    <BadgeHelp className='text-pink-500' />
                    <p className='ml-2 font-medium'>Help Center</p>
                </div>

                <div className='flex flex-col md:flex-row md:space-x-8 mt-5 md:mt-0'>
                    <p className='hover:text-orange-500 cursor-pointer'>Terms of Services</p>
                    <p className='hover:text-orange-500 cursor-pointer'>Privacy & Policy</p>
                    <p className='hover:text-orange-500 cursor-pointer'>All Rights reserved by musemind agency | 2022</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;
