import React, {useState} from 'react';
import {FaBars,FaSearch} from 'react-icons/fa';
import {BsCartPlusFill,BsTruck,BsHeart,BsWallet2,BsDownload} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';
import {FiHelpCircle,FiUsers} from 'react-icons/fi';
import {AiOutlineTag} from 'react-icons/ai';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='mx-w-[1640px] mx-auto flex justify-between items-center p-4'>
     {/* Leftside */} 
     <div className='flex items-center'>
        <div className='cursor-pointer' onClick={() => setNavbar(!navbar)}>
          <FaBars size={20}/>
        </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14]'>
            <p className='text-white bg-black rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
          </div>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <FaSearch className='text-gray-500' size={15}/>
          <input className='bg-transparent w-full focus:outline-none p-2' type="text" placeholder='Search foods'/>
      </div>

      {/* Cart Button */}
      <button className='bg-black text-white items-center py-2 border border-black rounded-full px-5 hidden lg:flex'>
        <BsCartPlusFill className='mr-2'/>
        <span>Cart</span>
      </button>

      {/* Mobile Menu */}
       {/* Overlay*/}
       {navbar ?  <div onClick={() => setNavbar(!navbar)} className='bg-black/60 h-screen w-full fixed top-0 left-0 z-10'> </div> : ''}
     
        {/* Side Drawer Menu */}
        <div className={ navbar ? 'w-[300px] bg-white h-screen text-black fixed top-0 left-0 z-10 duration-300' : 'w-[300px] bg-white h-screen text-black fixed left-[-100%] top-0 z-10 duration-300'}>
            <GrClose onClick={() => setNavbar(!navbar)} className='absolute top-3 right-3 cursor-pointer hover:opacity-50'/>
            <h2 className='text-xl lg:text-2xl px-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col text-gray-800 p-4'>
                    <li className='flex items-center text-md font-medium py-2'><BsTruck className='mr-2'/> Orders</li>
                    <li className='flex items-center text-md font-medium py-2'><BsHeart className='mr-2'/> Favorites</li>
                    <li className='flex items-center text-md font-medium py-2'><BsWallet2 className='mr-2'/> Wallet</li>
                    <li className='flex items-center text-md font-medium py-2'><FiHelpCircle className='mr-2'/> Help</li>
                    <li className='flex items-center text-md font-medium py-2'><AiOutlineTag className='mr-2'/> Promotions</li>
                    <li className='flex items-center text-md font-medium py-2'><BsDownload className='mr-2'/> Best One</li>
                    <li className='flex items-center text-md font-medium py-2'><FiUsers className='mr-2'/> Invite Friends</li>
                </ul>
            </nav>
            
        </div>
    </div>
  )
}
export default Navbar;