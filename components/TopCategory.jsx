// import React from 'react'

// const TopCategory = () => {
//     return (
//         <div className='mt-80 mx-20'>
//             <p className='text-2xl font-semibold'>Shop our Top Categories</p>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
//                 <div className='relative mt-2'>
//                     <img className='h-56 w-72  object-cover rounded-3xl' src="https://img.freepik.com/free-photo/young-attractive-girl-electronics-store-stands-desk-tests-phone_78826-3427.jpg?t=st=1727016547~exp=1727020147~hmac=a9d7185b991b9287f6790f3e8a4a7c40e5e015d740766cbf92b73dac585ab0e5&w=1060" alt="" />
//                     <div>
//                         <p className='text-2xl font-serif text-white absolute font-semibold left-32 bottom-40'>Electronics</p>
//                     </div>
//                 </div>

//                 <div className='relative mt-2'>
//                     <img className='h-56 w-72 object-cover rounded-3xl' src="https://img.freepik.com/free-photo/bearded-man-staying-nature_23-2148378553.jpg?t=st=1727013009~exp=1727016609~hmac=532321f1a29c6ae4568fc50a0f071c28d7769bf0a6ed5a8eb0041491dff4a403&w=1060" alt="" />
//                     <div>
//                         <p className='text-2xl text-white absolute font-semibold left-8 bottom-40'>Men's</p>
//                     </div>
//                 </div>

//                 <div className='relative mt-2'>
//                     <img className='h-56 w-72 object-cover rounded-3xl' src="https://img.freepik.com/free-photo/beautiful-young-woman-looking-camera-against-blue-background_23-2148204719.jpg?t=st=1727013175~exp=1727016775~hmac=f3672cba837ccf7d1611a47a033e32663ea0c6d2d95fa88989631e26342c9f25&w=1060" alt="" />
//                     <div>
//                         <p className='text-2xl text-white absolute font-semibold left-32 bottom-40'>Women's</p>
//                     </div>

//                 </div>
//                 <div className='relative mt-2'>
//                     <img className='h-56 w-72 object-cover rounded-3xl' src="https://img.freepik.com/free-photo/word-diamond-is-ring_1340-43018.jpg?t=st=1727013365~exp=1727016965~hmac=0ee70579110a42618bb4a71c99c2a1f0d9ebcec1e74fe23b8d8df510d08f1fba&w=1060" alt="" />
//                     <div>
//                         <p className='text-2xl text-white absolute font-semibold left-32 bottom-40'>Jewellary</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default TopCategory


import React from 'react';

const TopCategory = () => {
    return (
        <div className='mt-10 sm:mt-20 md:mt-40 lg:mt-60 xl:mt-80 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold'>Shop our Top Categories</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4'>
                <div className='relative mt-2'>
                    <img className='h-auto w-full object-cover rounded-3xl' src="https://img.freepik.com/free-photo/woman-choosing-phone-technology-store_1303-31328.jpg?t=st=1732270120~exp=1732273720~hmac=8761ee7cd1dfada00ba40fd0aec5cd5cecb4e07ceb22451ac4501e9fc0226e3b&w=1060" alt="Electronics" />
                    <div>
                        <p className='text-2xl sm:text-xl md:text-xl lg:text-2xl text-white absolute font-semibold left-5 top-5 sm:top-5 md:top-8 '>Electronics</p>
                    </div>
                </div>

                <div className='relative mt-2'>
                    <img className='h-auto w-full object-cover rounded-3xl' src="https://img.freepik.com/free-photo/young-handsome-man-choosing-cloth-shop_1303-19847.jpg?t=st=1732270342~exp=1732273942~hmac=55bf2c2d2ca895105530a733aebccf7b41f8c223c96246f2c59fc45bb3261eee&w=1060" alt="Men's" />
                    <div>
                        <p className='text-2xl sm:text-xl md:text-xl lg:text-2xl text-white absolute font-semibold right-10 top-5 sm:top-5 md:top-8'>Men's</p>
                    </div>
                </div>

                <div className='relative mt-2'>
                    <img className='h-auto w-full object-cover rounded-3xl' src="https://img.freepik.com/free-photo/fall-studio-shot-two-models-with-blond-wavy-hairstyle-wool-straw-hat-wearing-striped-poncho_273443-3794.jpg?t=st=1732270399~exp=1732273999~hmac=bc1baaa057e085b6826ebf9b5a1b63c78f8aacc955613c93f47f4b7d3d8177a4&w=1060" alt="Women's" />
                    <div>
                        <p className='text-2xl sm:text-xl md:text-xl lg:text-2xl text-white absolute font-semibold left-5 top-5 sm:top-5 md:top-8'>Women's</p>
                    </div>
                </div>

                <div className='relative mt-2'>
                    <img className='h-auto w-full object-cover rounded-3xl' src="https://img.freepik.com/free-photo/flat-lay-essentials-bead-working_23-2148815813.jpg?t=st=1732270509~exp=1732274109~hmac=6a6bb8793befaabdb7bbd2d779dde0517cb106340462b32f115ce3762d08b7b0&w=1060" alt="Jewellary" />
                    <div>
                        <p className='text-2xl sm:text-xl md:text-xl lg:text-2xl text-white absolute font-semibold right-5 top-8 sm:right-5 md:right-8'>Jewellary</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategory;