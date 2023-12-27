import React from 'react'
import welcomeframe from '../assets/welcomeframe.png'

const Welcome = () => {
  return (
    <div className='w-[100%] h-[310px] bg-[#100502] rounded-lg flex p-3 space-x-4'>
        <div className='w-[70%] h-[100%]'>
        <img src={welcomeframe} alt='welcom' className='h-full w-full object-cover rounded-lg' />
        </div>
        <div className='h-[100%] w-[30%] bg-[#353D44] rounded-lg p-4'>hall</div>

    </div>
  )
}

export default Welcome