import React, {useState} from 'react'
import {data} from '../data/data';
export const Food = () => {
    const [foods, setFoods] = useState(data);

    // Filter Type burger/pizza/etc
    const filterType = (category) => {
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    }
    // Filter by Price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item)=>{
                return item.price === price;
            })
        )
    }
  return (
    <div className='w-full max-w-[1640px] mx-auto px-4 py-6'>
        <h1 className='text-orange-500 text-center capitalize text-3xl sm:text-4xl md:text-4xl font-bold'>Top rated menu items</h1>
    
        {/* Filter Row */}
        <div  className='flex flex-col lg:flex-row justify-between'>
             {/* Filter Type */}
             <div>
                <p className='font-bold mb-2'>Filter Type</p>
                <div className='flex flex-wrap gap-1'>
                    <button onClick={()=> setFoods(data)} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>Alll</button>
                    <button onClick={()=> filterType('burger')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>Burgers</button>
                    <button onClick={()=> filterType('pizza')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>Pizza</button>
                    <button onClick={()=> filterType('salad')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>Salads</button>
                    <button onClick={()=> filterType('chicken')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>Chicken</button>
                </div>
             </div>
             {/* Filter Price */}
             <div>
                <p className='font-bold mb-2'>Filter Price</p>
                <div className='flex flex-wrap gap-1'>
                    <button onClick={()=> filterPrice('$')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>$</button>
                    <button onClick={()=> filterPrice('$$')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>$$</button>
                    <button onClick={()=> filterPrice('$$$')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>$$$</button>
                    <button onClick={()=> filterPrice('$$$$')} className='bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        {/* Filter Foods */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-4'>
            {foods.map((item, index)=> (
                <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}/>
                    <div className='text-center gap-2 flex flex-col sm:flex-row  items-center justify-between px-2 py-3'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='p-1 bg-orange-500 text-white rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
