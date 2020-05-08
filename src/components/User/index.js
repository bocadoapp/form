import React from 'react'

import Points from './Points'
import Avatar from './Avatar'

const User = ({ name }) => {
  return (
    <>
      <span className='mr-3'>
        <Avatar />
      </span>
      <div className="flex w-full justify-between">
        <span className='hidden md:inline'>
          {name}
        </span>
        <Points />
      </div>   
    </> 
  )
}

export default User