import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'

const Howtoplay = () => {
  return (
    <div className='h-[320px] bg-[#FF3D00]'>
            <div className=' text-center w-[600px] mx-auto pt-5'>
                <h1 className='nova text-[25px] text-[#FFFFFF] border-b-[#FFFFFF] border-b-[4px] w-[30%] mx-auto'>How to Play</h1>
                <p className='text-[#FFFFFF] mt-2 nova'>Lorem ipsum dolor sit amet consectetur. Penatibus euismod at vitae vitae. Eros etiam magna pharetra ut habitant aliquet enim ultrices nullam.</p>
            </div>
            <div className='flex justify-between px-10 py-6'>
            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={one} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP ONE</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur. Cras pharetra mauris eget dictum et faucibus.</p>
            </div>
            
            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={two} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP TW0</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur. Cras pharetra mauris eget dictum et faucibus.</p>
            </div>

            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={three} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP THREE</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur. Cras pharetra mauris eget dictum et faucibus.</p>
            </div>

            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={four} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP FOUR</h1>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur. Cras pharetra mauris eget dictum et faucibus.</p>
            </div>
            </div>
    </div>
  )
}

export default Howtoplay