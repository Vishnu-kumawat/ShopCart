// import React from 'react'

// const CashBack = () => {
//     return (
//         <div>

//             <div>
//                 <div>
//                     <img className='w-full mt-16' src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png" alt="" />
//                     <div className='bg-[#003d29]'>
//                         <div className='py-10 mx-12'>
//                             <p className='text-5xl text-white'>Get 5% Cash</p>
//                             <p className='text-5xl text-white'>Back on $200 </p>
//                             <p className='text-lg text-white'>Shopping is a bit of a relaxing hobby for</p>
//                             <p className='text-lg text-white'>me, which is sometimes troubling for the</p>
//                             <p className='text-lg text-white'>bank balance.</p>
//                             <button className='text-white text-3xl border px-6 py-2 rounded-3xl border-white'> Learn More</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default CashBack

import React from 'react';

const CashBack = () => {
    return (
        <div className="relative my-20">
            <div className="relative">
                <img
                    className="w-full"
                    src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
                    alt=""
                />
                {/* Overlay Container */}
                <div className="absolute top-0 right-0 h-4/6 mt-24 mr-28 bg-[#0f372a]  flex items-center px-8">
                    <div className="text-right text-white max-w-md">
                        <p className="text-5xl mr-[105px] font-bold">Get 5% Cash</p>
                        <p className="text-5xl mr-[84px] font-bold mt-2">Back on $200</p>
                        <p className="text-lg font-medium mt-8 mr-[70px]">Shopping is a bit of a relaxing hobby for</p>
                        <p className="text-lg font-medium mt-2 mr-[60px]">me, which is sometimes troubling for the</p>
                        <p className="text-lg font-medium mt-2 mr-[286px]">bank balance.</p>
                        <button className="mt-10 text-white text-3xl border px-6 py-2 rounded-3xl border-white mr-[198px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashBack;
