import React from 'react'

export const Hero = () => {
  return (
    <div className='w-full'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='bg-black/40 absolute w-full h-full max-h-[500px] text-gray-200 flex flex-col justify-center'>
                <h1 className='capitalize text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 font-bold'>The <span className='text-orange-500'>best <br/> foods</span> delivered</h1>
            </div>
            <img className='w-full h-full object-cover max-h-[500px]' src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Banner'/>
        </div>
    </div>
  )
}
