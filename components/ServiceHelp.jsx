// import React from 'react'

// const ServiceHelp = () => {
//     return (
//         <div className='mx-20 mt-10'>
//             <p className='text-3xl font-bold'>Services To Help You Shop</p>
//             <div className='flex'>
//                 <div className='my-16 bg-gray-100 rounded-3xl'>
//                     <div className='ml-8 py-10'>
//                         <p className='text-3xl text-gray-800 font-bold'>Frequently Asked</p>
//                         <p className='text-3xl text-gray-800 font-bold'>Questions</p>
//                         <p className='mt-5 text-lg text-gray-800'>Updates on safe Shopping in</p>
//                         <p className='text-lg text-gray-800'>our Stores</p>
//                     </div>
//                     <img className='rounded-b-3xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" alt="" />
//                 </div>

//                 <div className='my-16 bg-gray-100 rounded-3xl ml-10'>
//                     <div className='ml-8 py-10'>
//                         <p className='text-3xl text-gray-800 font-bold'>Online Payment</p>
//                         <p className='text-3xl text-gray-800 font-bold'>Process </p>
//                         <p className='mt-5 text-lg text-gray-800'>Updates on safe Shopping in</p>
//                         <p className=' text-lg text-gray-800'>our Stores</p>
//                     </div>
//                     <img className='rounded-b-3xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png" alt="" />
//                 </div>

//                 <div className='my-16 bg-gray-100 rounded-3xl ml-10'>
//                     <div className='ml-8 py-10'>
//                         <p className='text-3xl text-gray-800 font-bold'>Home Delivery</p>
//                         <p className='text-3xl text-gray-800 font-bold'>Options</p>
//                         <p className='mt-5 text-lg text-gray-800'>Updates on safe Shopping in</p>
//                         <p className='text-lg text-gray-800'>our Stores</p>
//                     </div>
//                     <img className='rounded-b-3xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png" alt="" />
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default ServiceHelp


import React from 'react';

const ServiceHelp = () => {
    return (
        <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 mt-10'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Services To Help You Shop</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                <div className='bg-gray-100 rounded-3xl'>
                    <div className='p-6 md:p-10'>
                        <p className='text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold'>Frequently Asked</p>
                        <p className='text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold'>Questions</p>
                        <p className='mt-2 sm:mt-5 text-base sm:text-lg text-gray-800'>Updates on safe Shopping in</p>
                        <p className='text-base sm:text-lg text-gray-800'>our Stores</p>
                    </div>
                    <img className='w-full rounded-b-3xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" alt="" />
                </div>

                <div className='bg-gray-100 rounded-3xl'>
                    <div className='p-6 md:p-10'>
                        <p className='text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold'>Online Payment</p>
                        <p className='text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold'>Process</p>
                        <p className='mt-2 sm:mt-5 text-base sm:text-lg text-gray-800'>Updates on safe Shopping in</p>
                        <p className='text-base sm:text-lg text-gray-800'>our Stores</p>
                    </div>
                    <img className='w-full rounded-b-3xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png" alt="" />
                </div>

                <div className='bg-gray-100 rounded-3xl'>
                    <div className='p-6 md:p-10'>
                        <p className='text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold'>Home Delivery</p>
                        <p className='text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold'>Options</p>
                        <p className='mt-2 sm:mt-5 text-base sm:text-lg text-gray-800'>Updates on safe Shopping in</p>
                        <p className='text-base sm:text-lg text-gray-800'>our Stores</p>
                    </div>
                    <img className='w-full rounded-b-3xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServiceHelp;
