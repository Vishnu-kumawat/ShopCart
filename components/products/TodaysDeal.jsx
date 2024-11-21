import React from 'react'
import useCartStore from '../../store/AddToCart';
import useFetchProducts from '../../Hooks/useFetchProjuct';

const TodaysDeal = () => {
    const { products } = useFetchProducts();
    const addToCart = useCartStore((state) => state.addToCart)


    return (
        <div>
            <div className='mx-16'>
                <p className='text-2xl font-semibold my-5'>Todays Best Deals For You</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
                {products.slice(6,14).map((product) => (
                    <div key={product.id} className="shadow-2xl border-gray-600 rounded-3xl mt-2 flex justify-center flex-col items-center pb-2">
                        <div className='mx-3'>
                        <img className="h-56 object-contain mt-1 rounded-3xl " src={product.image} alt={product.title} />
                        </div>
                        <h1 className="text-xl font-semibold text-center mt-5 mx-3">{product.title}</h1>
                        <p className="text-gray-600 mt-3 text-[17px] text-center line-clamp-2 mx-4">{product.description}</p>

                        <div className='flex mt-5'>
                            <p className='ml-1.5 text-lg'>Price : ${product.price.toFixed(2)} </p>
                            {/* <p className='bg-gray-200 rounded-3xl px-2 py-1 text-orange-600 font-semibold'>50% OFF</p> */}
                            <span className='ml-1.5 text-gray-500 font-semibold'>Original Price : </span>
                            <span className='line-through text-gray-500 font-semibold text-lg'>${(product.price * 2).toFixed(2)}</span>
                        </div>

                        <div className="flex justify-around items-center mt-4">
                            <p className="font-semibold ml-2 ">⭐ {product.rating.rate}</p>
                            <p className="font-semibold ml-2 text-lg">( {product.rating.count} Reviews )</p>
                            <button onClick={() => addToCart(product)} className=' bg-red-600 font-semibold rounded-2xl px-2 py-1.5 mb-2 ml-1.5 text-white text-lg '>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default TodaysDeal
