import React from 'react'
import frame from '../assets/Frame202.png'
import '../index.css';
import { IoRocketSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDojo } from "../DojoContext";
import { Link } from 'react-router-dom';


const Header = () => {
  const {
    setup: {
      systemCalls: { initiate, spawnavatar, registerPlayer, restart },
      components : {Moves,Board,Game,Gate,Players,Fixed},
    },
    account: { create, list, select, account, isDeploying, clear},
  } = useDojo();
  return (
    <div className='w-[100%] h-[80px] absolute border border-b-[#000000]'>

        <div className='flex flex-row justify-between items-center w-[85%] mx-auto'>
        
        <Link to={'/'}>
        <div className='flex w-[200px] my-[10px] mr-96'>
            <img src={frame} alt='logo'/>
        </div>
        </Link>

        <h1 className='press text-[12px]'>About us</h1>
        <Link to={'/app'}>
        <div className='flex space-x-1 bg-[#FF3D00] w-[160px] h-[40px] border border-[#000000] rounded-lg items-center p-2'>
            <IoRocketSharp className='text-[#FFFFFF]'/>
            <h1 className='press text-[10px] text-[#FFFFFF]' >Launch App</h1>
        </div>
        </Link>
            <div className='flex space-x-1 w-[110px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2'onClick={create}>
            <h1 className='press text-[10px] text-[#FF3D00]'> {isDeploying ? "deploying burner" : 
              <select onChange={(e) => select(e.target.value)}>
              {list().map((account, index) => {
                  console.log(account.address)
                return (
                  <option value={account.address} key={index}>
                    {(account.address).slice(0, 6)}
                  </option>
                );
              })}
              i
            </select>
            }</h1>
            <RiArrowDropDownLine className='text-[#FF3D00]' />
            </div>
            <button onClick={clear}>clear burners</button>
        </div>




    </div>
  )
}

export default Header

// onClick={create}