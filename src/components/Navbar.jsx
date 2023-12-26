import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { TbFilterStar } from "react-icons/tb";


function Navbar() {
  const [filterPop, setFilterPop] = useState(false);
  const [profilePop, setProfilePop] = useState(false);
  return (
    <>
    {
      filterPop &&
      <div className='bg-[#000000]/60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center'>
        <div className='w-[200px] h-[300px] bg-[#f2d0a4] rounded-3xl flex flex-col items-center justify-center border-2 border-slate-600'>
          <h1 className='cursor-pointer underline hover:text-red-500 flex py-0 px-3' onClick={() => setFilterPop(false)}>Close</h1>
        <div className='flex flex-col items-center'>
        <label className='text-[#d84242] font-bold'>Location</label>
        <select name="location" placeholder="Location" >
        <option value="">Select Location</option>
          <option value="">Banglore</option>
          <option value="">Chennai</option>
          <option value="">Coimbatore</option>
          <option value="">Dindigul</option>
          <option value="">Salem</option>
          <option value="">Pondicherry</option>
          <option value="">Trichy</option>
          <option value="">Madurai</option>
        </select>
        </div>
        
        <div className='flex flex-col'>
        <label className='text-[#d84242] font-bold'>Meal type</label>
          <div><input type="checkbox" name="meal" value="Veg" />
          <label for="Veg">Veg</label></div>
          <div><input type="checkbox" name="meal" value="NonVeg" />
          <label for="NonVeg">Non-Veg</label></div>
        </div>
        <button type='submit' className='flex items-center justify-center bg-orange-400 hover:bg-orange-900 text-white py-2 px-4 rounded h-8 w-[100px]'>
          Submit
        </button>
        </div>
        
      </div>
    }

    
    <div className='mx-auto flex justify-between items-center p-4 bg-white '>

      <div className='flex items-center'>
      <AiOutlineMenu size={20} />
        <Link to='/' className='text-3xl px-10'>
            Eat <span className='font-bold text-orange-500'>Best Foods</span>
        </Link>
        <div className='flex items-center bg-white rounded-2xl'>
            <Link to='/dining' className='p-2 text-white-300 bg-white rounded-2xl font-bold'>Dining</Link>
            <Link to='/delivery' className='p-2 rounded-2xl font-bold bg-orange-500 text-white'>Delivery</Link>
        </div>
      </div>
  
      <div className='flex w-[350px] justify-evenly'>
        <div onClick={() => setFilterPop(true)}><TbFilterStar size={30}/></div>
        <input type='text' placeholder='Enter food' className='bg-gray-100 rounded-xl drop-shadow-md px-2'></input>
        <AiOutlineSearch size={30} className='justify-center'/>
        <CgProfile onClick={() => setProfilePop(true)} size={30}/>
        {
      profilePop &&
      <div className='bg-[#000000]/50 absolute right-1 mt-8 h-[150px] w-[100px] rounded-xl'>
        <div className='flex flex-col items-center justify-center h-full'>
        <button type='click' className='flex items-center justify-center bg-orange-400 hover:bg-orange-900 text-white py-2 px-4 rounded h-8 w-[60px]'>Login</button>
        <p className='font-bold text-slate-100'>OR</p>
        <button type='submit' className='flex items-center justify-center bg-orange-400 hover:bg-orange-900 text-white py-2 px-4 rounded h-8 w-[60px]'>Signup</button>
        </div>
      </div>
    }
       </div>
    </div>
    
    </>
  )
}

export default Navbar