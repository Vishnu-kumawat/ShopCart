import React from 'react'
import useCartStore from '../../store/AddToCart';
import useFetchProducts from '../../Hooks/useFetchProjuct';

const MostSelling = () => {
    const { products } = useFetchProducts();
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <div>
            <div className='mx-16 mt-64'>
                <p className='text-2xl font-semibold my-5'>Most Selling Products</p>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                        {products.slice(14, 20).map((product) => (
                            <div key={product.id} className="shadow-2xl mb-5 border-gray-600 rounded-3xl mt-2 flex justify-center flex-col items-center pb-2">
                                <img className="h-56 object-contain mt-1 mix-blend-multiply" src={product.image} alt={product.title} />
                                <p className="text-xl font-semibold text-center mt-4 mx-3 line-clamp-2">{product.title}</p>
                                <p className="text-gray-600 mt-3 text-[17px] text-center line-clamp-2 mx-4">{product.description}</p>

                                <div className='flex mt-4'>
                                    <p className='mr-3 ml-2 text-lg'>Price : ${product.price.toFixed(2)} </p>
                                    <p className='bg-gray-200 rounded-3xl px-5 py-1 text-orange-600 font-semibold'>50% OFF</p>
                                    <span className='ml-2 text-gray-500 font-semibold'>Original Price : </span>
                                    <span className='line-through px-2 text-gray-500 font-semibold text-lg'>${(product.price * 2).toFixed(2)}</span>
                                </div>

                                <div className="flex justify-around items-center mt-2">
                                    <p className="font-semibold mr-8 ">⭐ {product.rating.rate}</p>
                                    <p className="font-semibold ml-5 text-lg">( {product.rating.count} Reviews )</p>
                                    <button onClick={() => addToCart(product)} className='shadow-2xl bg-red-600 font-semibold rounded-2xl px-4 py-2 mb-2 ml-10 text-white text-lg '>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostSelling
