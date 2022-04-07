import React from 'react'
import { Link } from 'react-router-dom'

import img3 from '../../assets/img/listPicture.png'

const GoToTask = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>

        <div className='w-36 h-48  rounded-md'>
            <img className='object-fill h-full rounded-md' src={img3} alt=''/>
        </div>

        <div className='w-36 h-10 bg-black flex justify-center rounded-xl text-2xl '>
            <Link to="/List"><p className='text-white'>Ir a tareas</p></Link>
        </div>
    </div>
  )
}

export default GoToTask