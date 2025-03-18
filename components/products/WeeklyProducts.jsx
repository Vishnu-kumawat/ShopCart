import React from 'react'
import useFetchProducts from '../../Hooks/useFetchProjuct'
import useCartStore from '../../store/AddToCart';

const WeeklyProducts = () => {
    const { products } = useFetchProducts();
    const addToCart = useCartStore((state) => state.addToCart)

    return (
        <div>
            <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-2 xl:mx-20'>
                <p className='text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-4 ml-8'>Weekly Popular Products</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 sm:p-4">
                    {products.slice(3, 6).map((product) => (
                        <div key={product.id} className="shadow-2xl border-gray-300 rounded-3xl mt-2 flex flex-col pb-2 bg-white">
                            <img className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-contain mt-1 rounded-3xl mx-auto" src={product.image} alt={product.title} />
                            <h1 className="text-xs line-clamp-2 sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-center mt-5 mx-3">{product.title}</h1>
                            <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-center line-clamp-2 mx-4">{product.description}</p>

                            <div className='flex justify-around items-center mt-5 w-full px-2 sm:px-4'>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap'>Price:${Math.round(product.price)}</p>
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


        </div>
    )
}

export default WeeklyProducts
