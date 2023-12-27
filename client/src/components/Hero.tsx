import React from 'react'
import { IoRocketSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import shapes from '../assets/shapes.png'
import avatar from '../assets/avatar.png';
import tile from '../assets/tile.png'
import mech from '../assets/Mech.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="bg-herobg w-[100%] h-[750px] bg-cover">
        <div className='flex space-x-36 h-[80%] w-[80%] mx-auto items-center'>
            <div className='h-[280px] w-[530px] bg-[#FFFFFF80] rounded-lg p-6 space-y-6'>
                <h1 className='press text-[20px] text-[#FF3D00]'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className='press text-[12px]'>Lorem ipsum dolor sit amet consectetur. Volutpat semper congue egestas risus orci vulputate sit eget. Adipiscing ullamcorper sollicitudin nulla rhoncus cras.</p>
            
                <div className='flex space-x-4 w-[70%] mx-auto'>
                <div className='flex space-x-1 w-[120px] border border-[#FF3D00] h-[30px] text-center rounded-lg items-center p-2 '>
                 <h1 className='press text-[10px] mx-auto text-center text-[#FF3D00]'>Join</h1>
                </div>
                <Link to={'/app'}>
                <div className='flex space-x-1 bg-[#FF3D00] w-[140px] h-[30px] border border-[#000000] rounded-lg items-center p-2'>
                 <IoRocketSharp className='text-[#FFFFFF]'/>
                <h1 className='press text-[10px] text-[#FFFFFF]' >Launch App</h1>
                 </div>
                </Link>           
                </div>
            </div>

            <div className=' mt-14 space-y-4'>
               <div>
                  <img src={mech} alt='mech' height='500px' width='320px'/>
               </div>
            </div>
        </div>
          <div className='w-[75%] h-[100px] rounded-3xl mx-auto bg-[#FFFFFF] flex justify-between p-8 nova text-[16px]'>
                <div className='flex space-x-4 w-[250px] items-center item-divider'>
                  <img src={shapes} alt='shape' height='70px' width='70px'/>
                  <p>Fully Onchain games arena</p>
                </div>

                <div className='flex space-x-4 w-[250px] items-center item-divider'>
                  <img src={avatar} alt='shape' height='70px' width='70px'/>
                  <p>Multiplayer features on games</p>
                </div>

                <div className='flex space-x-4 w-[250px] items-center'>
                  <img src={tile} alt='shape' height='70px' width='70px'/>
                  <p>Play for free from anywhere in the world</p>
                </div>
          </div>
    </div>
  )
}

export default Hero


