import React from 'react'

const TopCategory = () => {
    return (
        <div className='mt-80 mx-20'>
            <p className='text-2xl font-semibold'>Shop our Top Categories</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                <div className='relative mt-2'>
                    <img className='h-56 w-72  object-cover rounded-3xl' src="https://img.freepik.com/free-photo/young-attractive-girl-electronics-store-stands-desk-tests-phone_78826-3427.jpg?t=st=1727016547~exp=1727020147~hmac=a9d7185b991b9287f6790f3e8a4a7c40e5e015d740766cbf92b73dac585ab0e5&w=1060" alt="" />
                    <div>
                        <p className='text-2xl font-serif text-white absolute font-semibold left-32 bottom-40'>Electronics</p>
                    </div>
                </div>

                <div className='relative mt-2'>
                    <img className='h-56 w-72 object-cover rounded-3xl' src="https://img.freepik.com/free-photo/bearded-man-staying-nature_23-2148378553.jpg?t=st=1727013009~exp=1727016609~hmac=532321f1a29c6ae4568fc50a0f071c28d7769bf0a6ed5a8eb0041491dff4a403&w=1060" alt="" />
                    <div>
                        <p className='text-2xl text-white absolute font-semibold left-8 bottom-40'>Men's</p>
                    </div>
                </div>

                <div className='relative mt-2'>
                    <img className='h-56 w-72 object-cover rounded-3xl' src="https://img.freepik.com/free-photo/beautiful-young-woman-looking-camera-against-blue-background_23-2148204719.jpg?t=st=1727013175~exp=1727016775~hmac=f3672cba837ccf7d1611a47a033e32663ea0c6d2d95fa88989631e26342c9f25&w=1060" alt="" />
                    <div>
                        <p className='text-2xl text-white absolute font-semibold left-32 bottom-40'>Women's</p>
                    </div>

                </div>
                <div className='relative mt-2'>
                    <img className='h-56 w-72 object-cover rounded-3xl' src="https://img.freepik.com/free-photo/word-diamond-is-ring_1340-43018.jpg?t=st=1727013365~exp=1727016965~hmac=0ee70579110a42618bb4a71c99c2a1f0d9ebcec1e74fe23b8d8df510d08f1fba&w=1060" alt="" />
                    <div>
                        <p className='text-2xl text-white absolute font-semibold left-32 bottom-40'>Jewellary</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopCategory
