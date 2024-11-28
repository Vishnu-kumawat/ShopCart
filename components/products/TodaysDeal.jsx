// import React from 'react'
// import useCartStore from '../../store/AddToCart';
// import useFetchProducts from '../../Hooks/useFetchProjuct';

// const TodaysDeal = () => {
//     const { products } = useFetchProducts();
//     const addToCart = useCartStore((state) => state.addToCart)


//     return (
//         <div>
//             <div className='mx-16'>
//                 <p className='text-2xl font-semibold my-5'>Todays Best Deals For You</p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
//                 {products.slice(6,14).map((product) => (
//                     <div key={product.id} className="shadow-2xl border-gray-600 rounded-3xl mt-2 flex justify-center flex-col items-center pb-2">
//                         <div className='mx-3'>
//                         <img className="h-56 object-contain mt-1 rounded-3xl " src={product.image} alt={product.title} />
//                         </div>
//                         <h1 className="text-xl font-semibold text-center mt-5 mx-3">{product.title}</h1>
//                         <p className="text-gray-600 mt-3 text-[17px] text-center line-clamp-2 mx-4">{product.description}</p>

//                         <div className='flex mt-5'>
//                             <p className='ml-1.5 text-lg'>Price : ${product.price.toFixed(2)} </p>
//                             {/* <p className='bg-gray-200 rounded-3xl px-2 py-1 text-orange-600 font-semibold'>50% OFF</p> */}
//                             <span className='ml-1.5 text-gray-500 font-semibold'>Original Price : </span>
//                             <span className='line-through text-gray-500 font-semibold text-lg'>${(product.price * 2).toFixed(2)}</span>
//                         </div>

//                         <div className="flex justify-around items-center mt-4">
//                             <p className="font-semibold ml-2 ">⭐ {product.rating.rate}</p>
//                             <p className="font-semibold ml-2 text-lg">( {product.rating.count} Reviews )</p>
//                             <button onClick={() => addToCart(product)} className=' bg-red-600 font-semibold rounded-2xl px-2 py-1.5 mb-2 ml-1.5 text-white text-lg '>Add to Cart</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             </div>
//         </div>
//     )
// }

// export default TodaysDeal


import React from 'react';
import useCartStore from '../../store/AddToCart';
import useFetchProducts from '../../Hooks/useFetchProjuct';

const TodaysDeal = () => {
    const { products } = useFetchProducts();
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        // <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20'>
        //     <p className='text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold my-5 ml-8'>Today's Best Deals For You</p>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 sm:p-4">
        //         {products.slice(6, 14).map((product) => (
        //             <div key={product.id} className="shadow-2xl border-gray-300 rounded-3xl mt-2 flex flex-col items-center pb-2 bg-white">
        //                 <div className='flex justify-center w-full'>
        //                     <img className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-contain mt-1 rounded-3xl" src={product.image} alt={product.title} />
        //                 </div>
        //                 <h1 className="text-xs line-clamp-2 sm:text-sm md:text-lg lg:text-xl xl:text-xl font-semibold text-center mt-5 mx-3">{product.title}</h1>
        //                 <p className="text-gray-600 mt-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-base text-center line-clamp-2 mx-4">{product.description}</p>

        //                 <div className='flex justify-evenly items-center mt-5 w-full px-2 sm:px-4'>
        //                     <p className='text-xs sm:text-sm md:text-sm lg:text-base '>Price: ${Math.round(product.price)}</p>
        //                         <span className='bg-gray-200 rounded-3xl px-2 py-1 text-orange-600 font-semibold text-xs sm:text-xs md:text-xs lg:text-sm whitespace-nowrap'>50% OFF</span>
        //                         <span className='text-xs sm:text-xs md:text-xs lg:text-sm text-gray-500 font-semibold whitespace-nowrap'>Orig Price:${Math.round(product.price * 2)}</span>
        //                 </div>

        //                 <div className="flex justify-evenly items-center mt-4 w-full px-2 sm:px-4">
        //                     <p className="font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-base">⭐ {product.rating.rate}</p>
        //                     <p className="font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-base">({product.rating.count} Reviews)</p>
        //                     <button onClick={() => addToCart(product)} className='shadow-2xl ml-2 bg-red-600 font-semibold rounded-2xl px-2 py-1 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base text-white'>Add to Cart</button>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>


        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-2 xl:mx-20'>
            <p className='text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-4 ml-8'>Today's Best Deals For You</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 sm:p-4">
                {products.slice(6,14).map((product) => (
                    <div key={product.id} className="shadow-2xl border-gray-300 rounded-3xl mt-2 flex flex-col pb-2 bg-white">
                        <img className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-contain mt-1 rounded-3xl mx-auto" src={product.image} alt={product.title} />
                        <h1 className="text-xs line-clamp-2 sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-center mt-5 mx-3">{product.title}</h1>
                        <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-center line-clamp-2 mx-4">{product.description}</p>

                        <div className='flex justify-between items-center mt-5 w-full px-2 sm:px-4'>
                            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap'>Price: ${Math.round(product.price)}</p>
                            <span className='bg-gray-200 rounded-3xl px-2 py-1 text-orange-600 font-semibold text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg whitespace-nowrap'>50% OFF</span>
                            <span className='text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-500 font-semibold whitespace-nowrap'>Orig Price: ${Math.round(product.price * 2)}</span>
                        </div>

                        <div className="flex justify-around items-center mt-4 w-full px-2 sm:px-4">
                            <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-md">⭐ {product.rating.rate}</p>
                            <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-md whitespace-nowrap">({product.rating.count} Reviews)</p>
                            <button onClick={() => addToCart(product)} className='shadow-2xl bg-red-600 font-semibold rounded-2xl px-2 py-1 text-xs sm:text-sm md:text-base lg:text-md text-white whitespace-nowrap'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default TodaysDeal;