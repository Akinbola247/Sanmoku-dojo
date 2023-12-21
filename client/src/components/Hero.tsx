import React from 'react'
import { IoRocketSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";


const Hero = () => {
  return (
    <div className="bg-herobg w-[100%] h-[750px] bg-cover">
        <div className='flex space-x-28 h-[80%] w-[80%] mx-auto items-center'>
            <div className='h-[280px] w-[530px] bg-[#FFFFFF80] rounded-lg p-6 space-y-6'>
                <h1 className='press text-[20px] text-[#FF3D00]'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className='press text-[12px]'>Lorem ipsum dolor sit amet consectetur. Volutpat semper congue egestas risus orci vulputate sit eget. Adipiscing ullamcorper sollicitudin nulla rhoncus cras.</p>
            
                <div className='flex space-x-4 w-[70%] mx-auto'>
                <div className='flex space-x-1 w-[120px] border border-[#FF3D00] h-[30px]  rounded-lg items-center p-2'>
                 <h1 className='press text-[10px] text-[#FF3D00]'>Connect</h1>
                <RiArrowDropDownLine className='text-[#FF3D00]' />
                </div>
                <div className='flex space-x-1 bg-[#FF3D00] w-[140px] h-[30px] border border-[#000000] rounded-lg items-center p-2'>
                 <IoRocketSharp className='text-[#FFFFFF]'/>
                <h1 className='press text-[10px] text-[#FFFFFF]' >Launch App</h1>
                 </div>
                </div>
            </div>

            <div>
                <h1 className='press text-[20px] text-center text-[#FF3D00]' >Hall of Fame</h1>
            <div className='h-[317px] w-[410px] bg-[#FF3D0080] rounded-lg'>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Hero


