// import React from 'react'

// const ChooseByBrand = () => {
//     return (
//         <div className='mx-20 my-16'>

//             <p className='text-3xl font-bold'>Choose By Brand</p>

//             <div>

//                 <div className='flex'>

//                     <div className='flex mt-8 bg-gray-100 rounded-xl'>
//                         <div className='w-[70px] h-[70px] ml-5 my-6'>
//                             <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png" alt="Staples" />
//                         </div>
//                         <div className='ml-4 mt-8 pr-6'>
//                             <p className='text-xl font-medium'>Staples</p>
//                             <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                         </div>
//                     </div>

//                     <div className='flex mt-8 bg-gray-100 rounded-xl ml-5'>
//                         <div className='w-[70px] h-[70px] ml-5 my-6'>
//                             <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png" alt="Staples" />
//                         </div>
//                         <div className='ml-4 mt-8 pr-6'>
//                             <p className='text-xl font-medium'>Sprouts</p>
//                             <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                         </div>
//                     </div>

//                     <div className='flex mt-8 bg-gray-100 rounded-xl ml-5'>
//                         <div className='w-[70px] h-[70px] ml-5 my-6'>
//                             <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png" alt="Staples" />
//                         </div>
//                         <div className='ml-4 mt-8 pr-6'>
//                             <p className='text-xl font-medium'>Grocery outlet</p>
//                             <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                         </div>
//                     </div>

//                     <div className='flex mt-8 bg-gray-100 rounded-xl ml-5'>
//                         <div className='w-[70px] h-[70px] ml-5 my-6'>
//                             <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png" alt="Staples" />
//                         </div>
//                         <div className='ml-4 mt-8 pr-6'>
//                             <p className='text-xl font-medium'>Mollie stones</p>
//                             <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//             <div className='flex'>
//                 <div className='flex mt-8 bg-gray-100 rounded-xl'>
//                     <div className='w-[70px] h-[70px] ml-5 my-6'>
//                         <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png" alt="Staples" />
//                     </div>
//                     <div className='ml-4 mt-8 pr-6'>
//                         <p className='text-xl font-medium'>Sports Basement</p>
//                         <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                     </div>
//                 </div>

//                 <div className='flex mt-8 bg-gray-100 rounded-xl ml-5'>
//                     <div className='w-[70px] h-[70px] ml-5 my-6'>
//                         <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png" alt="Staples" />
//                     </div>
//                     <div className='ml-4 mt-8 pr-6'>
//                         <p className='text-xl font-medium'>Container store</p>
//                         <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                     </div>
//                 </div>

//                 <div className='flex mt-8 bg-gray-100 rounded-xl ml-5'>
//                     <div className='w-[70px] h-[70px] ml-5 my-6'>
//                         <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png" alt="Staples" />
//                     </div>
//                     <div className='ml-4 mt-8 pr-6'>
//                         <p className='text-xl font-medium'>Target </p>
//                         <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                     </div>
//                 </div>

//                 <div className='flex mt-8 bg-gray-100 rounded-xl ml-5'>
//                     <div className='w-[70px] h-[70px] ml-5 my-6'>
//                         <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png" alt="Staples" />
//                     </div>
//                     <div className='ml-4 mt-8 pr-6'>
//                         <p className='text-xl font-medium'>Bevmo!</p>
//                         <p className='text-gray-800 mt-2'>Delivery with in 24 hours</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ChooseByBrand


import React from 'react';

const ChooseByBrand = () => {
    return (
        <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-7 xl:mx-20 my-16'>
            <p className='text-sm ml-3 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-8'>Choose By Brand</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png" alt="Staples" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Staples</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png" alt="Sprouts" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Sprouts</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png" alt="Grocery Outlet" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Grocery Outlet</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png" alt="Mollie Stones" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Mollie Stones</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png" alt="Sports Basement" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Sports Basement</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png" alt="Container Store" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Container Store</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png" alt="Target" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Target</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

                <div className='flex bg-gray-100 rounded-xl'>
                    <div className='w-[70px] h-[70px] m-4'>
                        <img className='rounded-xl' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png" alt="Bevmo!" />
                    </div>
                    <div className='ml-4 mt-4 pr-6'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium'>Bevmo!</p>
                        <p className='text-gray-800 mt-2 text-xs sm:text-sm'>Delivery within 24 hours</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ChooseByBrand;
