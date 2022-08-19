import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='w-full max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
             {/* Overlay */}
             <div className='absolute bg-black/40 w-full h-full text-white rounded-xl'>
                <p className='text-2xl px-2 pt-4 font-bold'>Sun's Out, BOGOS Out</p>
                <p className='p-2'>Through 8/24</p>
                <button className='mx-2 absolute bottom-4 text-black font-bold capitalize py-1 px-4 rounded-md bg-white hover:bg-orange-500 '>Order Now</button>
            </div>
            <img className='w-full h-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl' src='https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Banner'/>
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
             {/* Overlay */}
             <div className='absolute bg-black/40 w-full h-full text-white rounded-xl'>
                <p className='text-2xl px-2 pt-4 font-bold'>New Rastaurants</p>
                <p className='p-2'>Daily added</p>
                <button className='mx-2 absolute bottom-4 text-black font-bold capitalize py-1 px-4 rounded-md bg-white hover:bg-orange-500 '>Order Now</button>
            </div>
            <img className='w-full h-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl' src='https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Banner'/>
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
             {/* Overlay */}
             <div className='absolute bg-black/40 w-full h-full text-white rounded-xl'>
                <p className='text-2xl px-2 pt-4 font-bold'>We Deliver Desserts Too </p>
                <p className='p-2'>Tasty Treats</p>
                <button className='mx-2 absolute bottom-4 text-black font-bold capitalize py-1 px-4 rounded-md bg-white hover:bg-orange-500 '>Order Now</button>
            </div>
            <img className='w-full h-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl' src='https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Banner'/>
        </div>
    </div>
  )
}
