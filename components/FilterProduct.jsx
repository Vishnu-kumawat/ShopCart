// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import useCartStore from '../store/AddToCart';

// const FilteredProduct = ({ products }) => {
//     const addToCart = useCartStore((state) => state.addToCart)
//     const location = useLocation();
//     const query = new URLSearchParams(location.search);
//     const searchTerm = query.get('query') || '';

//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className='mx-10'>
//             <h2 className='text-3xl font-semibold mt-10'>Filtered Products</h2>
//             <p className='text-2xl text-gray-700 mt-5 font-medium'>Search Term: {searchTerm}</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map(product => (
//                         <div key={product.id} className="shadow-2xl border-gray-600 rounded-3xl mt-2 flex justify-center flex-col items-center pb-2">
//                             <img className="h-56 object-contain mt-1 rounded-3xl" src={product.image} alt={product.title} />
//                             <p className="text-xl font-semibold text-center mt-4 font-serif mx-3 line-clamp-2">{product.title}</p>
//                             <p className="text-gray-600 font-sans mt-2 text-lg text-center line-clamp-2 mx-4">{product.description}</p>

//                             <div className='flex mt-4'>
//                                 <p className='mr-10 text-lg ml-1.5'>Price : ${product.price.toFixed(2)} </p>
//                                 {/* <p className='bg-gray-200 rounded-3xl px-3 py-1 text-orange-600 font-semibold'>50% OFF</p> */}
//                                 <span className=' text-gray-500 font-semibold ml-10'>Original Price : </span>
//                                 <span className='line-through px-2 text-gray-500 font-semibold'>${(product.price * 2).toFixed(2)}</span>
//                             </div>

//                             <div className="flex justify-around items-center mt-2">
//                                 <p className="font-semibold">⭐ {product.rating.rate}</p>
//                                 <p className="font-semibold text-lg ml-8">( {product.rating.count} Reviews )</p>
//                                 <button onClick={() => addToCart(product)} className='shadow-2xl bg-red-600 font-semibold rounded-2xl px-3 py-2 mb-2 ml-10 text-white text-lg '>Add to Cart</button>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FilteredProduct;


import React from 'react';
import { useLocation } from 'react-router-dom';
import useCartStore from '../store/AddToCart';

const FilteredProduct = ({ products }) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('query') || '';

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-5 font-semibold mt-10'>Filtered Products</h2>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mt-5 ml-5 font-medium'>Search Term: {searchTerm}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="shadow-2xl border-gray-600 rounded-3xl mt-2 flex flex-col items-center pb-2 bg-white">
                            <img className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-contain mt-1 rounded-3xl" src={product.image} alt={product.title} />
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center mt-4 mx-3 line-clamp-2">{product.title}</p>
                            <p className="text-gray-600 line-clamp-2 text-sm sm:text-base md:text-lg lg:text-xl text-center mt-2 mx-4 ">{product.description}</p>

                            <div className='flex justify-evenly items-center w-full px-2 mt-4'>
                                <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Price: ${product.price.toFixed(2)}</p>
                                <div className='flex items-center space-x-1'>
                                    <span className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-semibold'>Original Price:</span>
                                    <span className='line-through text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-semibold'>${(product.price * 2).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center w-full px-2 mt-2">
                                <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">⭐ {product.rating.rate}</p>
                                <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">( {product.rating.count} Reviews )</p>
                                <button onClick={() => addToCart(product)} className='shadow-2xl bg-red-600 font-semibold rounded-2xl px-2 py-1 text-sm sm:text-base md:text-lg lg:text-xl text-white'>Add to Cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default FilteredProduct;

