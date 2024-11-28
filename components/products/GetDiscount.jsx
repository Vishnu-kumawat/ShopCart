// import React from 'react'

// const GetDiscount = () => {
//   return (
//     <div className='mx-20'>

//         <p className='font-semibold text-3xl'>Get Up To 70% Off</p>
//         <div className='flex'>

//             <div className='h-[428px] w-[302px] bg-[#f2e4d9] mt-10 mb-20 rounded-xl'>
//                 <p className='pt-6 ml-7 text-2xl font-semibold text-gray-800'>Save</p>
//                 <p className='mt-5 ml-7 text-[#cb9917]'> <sup className='text-4xl font-bold '>$</sup> <span className='text-5xl font-bold'> 100 </span> </p>
//                 <p className='ml-7 mt-5 font-medium'> Explore Our Furniture & Home </p>
//                 <p className='ml-7 font-medium'>Furnishing Range </p>
//                 <img className='object-fill mt-[26px] rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" />
//             </div>

//             <div className='h-[428px] w-[302px] bg-[#f9dcdc] mt-10 mb-20 rounded-xl ml-10'>
//                 <p className='pt-6 ml-7 text-2xl font-semibold text-gray-800'>Save</p>
//                 <p className='mt-5 ml-7 text-[#961f1f]'> <sup className='text-4xl font-bold '>$</sup> <span className='text-5xl font-bold'> 29 </span> </p>
//                 <p className='ml-7 mt-5 font-medium'> Explore Our Furniture & Home </p>
//                 <p className='ml-7 font-medium'>Furnishing Range </p>
//                 <img className='object-fill mt-[26px] rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png" alt="" />
//             </div>

//             <div className='h-[428px] w-[302px] bg-[#f2e4d9] mt-10 mb-20 rounded-xl ml-10'>
//                 <p className='pt-6 ml-7 text-2xl font-semibold text-gray-800'>Save</p>
//                 <p className='mt-5 ml-7 text-[#cb9917]'> <sup className='text-4xl font-bold '>$</sup> <span className='text-5xl font-bold'> 67 </span> </p>
//                 <p className='ml-7 mt-5 font-medium'> Explore Our Furniture & Home </p>
//                 <p className='ml-7 font-medium'>Furnishing Range </p>
//                 <img className='object-fill mt-[26px] rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png" alt="" />
//             </div>

//             <div className='h-[428px] w-[302px] bg-[#d2f7ec] mt-10 mb-20 rounded-xl ml-10'>
//                 <p className='pt-6 ml-7 text-2xl font-semibold text-gray-800'>Save</p>
//                 <p className='mt-5 ml-7 text-[#003d29]'> <sup className='text-4xl font-bold '>$</sup> <span className='text-5xl font-bold'> 59 </span> </p>
//                 <p className='ml-7 mt-5 font-medium'> Explore Our Furniture & Home </p>
//                 <p className='ml-7 font-medium'>Furnishing Range </p>
//                 <img className='object-fill mt-[26px] rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png" alt="" />
//             </div>

//         </div>

//     </div>
//   )
// }

// export default GetDiscount

import React from 'react';

const GetDiscount = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-7 xl:mx-20 my-16'>
        <p className='font-semibold ml-2 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-10'>Get Up To 70% Off</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

            <div className='h-auto w-full bg-[#f2e4d9] rounded-xl flex flex-col items-start justify-between'>
                <div className='p-6'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800'>Save</p>
                    <p className='mt-5 text-[#cb9917]'> <sup className='text-3xl sm:text-4xl font-bold '>$</sup> <span className='text-4xl sm:text-5xl font-bold'> 100 </span> </p>
                    <p className='mt-5 font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Explore Our Furniture & Home</p>
                    <p className='font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Furnishing Range</p>
                </div>
                <img className='object-contain w-full rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="Sofa" />
            </div>

            <div className='h-auto w-full bg-[#f9dcdc] rounded-xl flex flex-col items-start justify-between'>
                <div className='p-6'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800'>Save</p>
                    <p className='mt-5 text-[#961f1f]'> <sup className='text-3xl sm:text-4xl font-bold '>$</sup> <span className='text-4xl sm:text-5xl font-bold'> 29 </span> </p>
                    <p className='mt-5 font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Explore Our Furniture & Home</p>
                    <p className='font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Furnishing Range</p>
                </div>
                <img className='object-contain w-full rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png" alt="Book" />
            </div>

            <div className='h-auto w-full bg-[#f2e4d9] rounded-xl flex flex-col items-start justify-between'>
                <div className='p-6'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800'>Save</p>
                    <p className='mt-5 text-[#cb9917]'> <sup className='text-3xl sm:text-4xl font-bold '>$</sup> <span className='text-4xl sm:text-5xl font-bold'> 67 </span> </p>
                    <p className='mt-5 font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Explore Our Furniture & Home</p>
                    <p className='font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Furnishing Range</p>
                </div>
                <img className='object-contain w-full rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png" alt="Shirt" />
            </div>

            <div className='h-auto w-full bg-[#d2f7ec] rounded-xl flex flex-col items-start justify-between'>
                <div className='p-6'>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800'>Save</p>
                    <p className='mt-5 text-[#003d29]'> <sup className='text-3xl sm:text-4xl font-bold '>$</sup> <span className='text-4xl sm:text-5xl font-bold'> 59 </span> </p>
                    <p className='mt-5 font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Explore Our Furniture & Home</p>
                    <p className='font-medium text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg'>Furnishing Range</p>
                </div>
                <img className='object-contain w-full rounded-b-lg' src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png" alt="Bug & Book" />
            </div>

        </div>
    </div>
  )
}

export default GetDiscount;
