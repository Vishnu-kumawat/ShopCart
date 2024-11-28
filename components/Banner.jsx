import React from 'react'

const Banner = () => {

    return (
        <div>
            <div className='relative mt-5 h-96 mr-32'>
                <div>
                    <img
                        className='object-cover w-full h-full xl:mr-10'
                        src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9b930e006824963189865_bg-stage.png"
                        alt="Background"
                    />
                </div>
                <div className='absolute ml-10 text-sm bottom-44 left-10 sm:text-2xl sm:left-10 sm:bottom-28 lg:left-36  lg:bottom-2 md:bottom-20 '>
                    <div className='text-green-900 text-xl sm:text-2xl md:text-4xl lg:6xl xl:text-7xl font-semibold '>
                        <h4>Shopping and</h4>
                        <h4 className='mt-2'>Department Store.</h4>
                    </div>
                    <div className='text-xs sm:mt-2 md:text-xl md:mt-2 text-gray-800 mt-1'>
                        <h5>Shopping is a bit of a relaxing hobby for me, which</h5>
                        <h5>is something troubling for the bank balance.</h5>
                    </div>
                    <button className='text-white bg-green-900 px-6 py-3 md:px-8 md:py-4 mt-9 text-md md:text-lg rounded-full'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;