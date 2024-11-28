// import React from 'react';

// const CashBack = () => {
//     return (
//         <div className="relative my-20">
//             <div className="relative">
//                 <img
//                     className="w-full"
//                     src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
//                     alt=""
//                 />
//                 {/* Overlay Container */}
//                 <div className="absolute top-0 right-0 h-4/6 mt-24 mr-[10vw] bg-[#0f372a]  flex items-center px-8">
//                     <div className="text-right text-white max-w-md">
//                         <p className="text-5xl mr-[7vw] font-bold">Get 5% Cash</p>
//                         <p className="text-5xl mr-[5.5vw] font-bold mt-2">Back on $200</p>
//                         <p className="text-lg font-medium mt-8 mr-[4.5vw]">Shopping is a bit of a relaxing hobby for</p>
//                         <p className="text-lg font-medium mt-2 mr-[4vw]">me, which is sometimes troubling for the</p>
//                         <p className="text-lg font-medium mt-2 mr-[18.5vw]">bank balance.</p>
//                         <button className="mt-10 text-white text-3xl border px-6 py-2 rounded-3xl border-white mr-[13vw]">Learn More</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CashBack;


import React from 'react';

const CashBack = () => {
    return (
        <div className="relative my-20">
            <div className="relative">
                <img
                    className="w-full h-[50vh] md:h-[70vh] object-cover"
                    src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
                    alt="Cash Back Banner"
                />
                {/* Overlay Container */}
                <div className="absolute mt-10 top-0 right-28 h-[60vh] w-[30vw] flex items-start justify-center md:justify-end px-4 sm:px-8 bg-[#0f372a] ">
                    <div className="flex flex-col items-start text-left text-white max-w-md px-4 md:px-0 space-y-2 sm:space-y-4">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-14 font-bold">Get 5% Cash</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Back on $200</p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Shopping is a bit of a relaxing hobby for</p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">me, which is sometimes troubling for the</p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">bank balance.</p>
                        <button className="md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl text-white border px-4 sm:px-6 md:px-8 py-2 rounded-3xl border-white">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CashBack;