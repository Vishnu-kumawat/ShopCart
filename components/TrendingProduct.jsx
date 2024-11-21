import React from 'react'

const TrendingProduct = () => {
    return (
        <div>
            <div className='my-10 mx-20'>
                <p className='text-3xl font-bold'>Trending Products For You!</p>

                <div className='flex'>

                    <div className=' h-80 w-[630px] rounded-2xl'>
                        <div className='bg-gray-100 rounded-2xl mb-10'>
                            <img className='mt-10 rounded-t-2xl' src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png" alt="" />
                            <div className='ml-10 mt-5'>
                                <p className='text-3xl font-semibold'>Furniture Village</p>
                                <p className='text-gray-700 text-lg'>Delivery with in 24 hours </p>
                                <button className='mb-5 bg-black text-white text-xl mt-5 px-7 py-3 rounded-3xl'> Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className=' h-80 w-[630px] rounded-2xl ml-10'>
                        <div className='bg-gray-100 rounded-2xl mb-10'>
                            <img className='mt-10 rounded-t-2xl' src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png" alt="" />
                            <div className='ml-10 mt-5'>
                                <p className='text-3xl font-semibold'>Fashion World</p>
                                <p className='text-gray-700 text-lg'>Delivery with in 24 hours </p>
                                <button className='mb-5 bg-black text-white text-xl mt-5 px-7 py-3 rounded-3xl'> Shop Now</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TrendingProduct
