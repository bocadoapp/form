import React from 'react'
import { useStore } from '../hooks/useStore'

const Avatar = () => {
  const { user } = useStore()
  
  if (!user) {
    return null
  }

  const initials = user.name.split(' ').map(w => w.slice(0, 1)).join('').slice(0, 2)  

  return (
    <div className='w-10 h-10 rounded-full overflow-hidden shadow-lg'>
      {user.pic
        ? (
          <img src={user.pic} alt='profile pic' />
        )
        : (
          <svg viewBox='0 0 100 100'>
            <defs>
                <linearGradient id="Gradient1">
                  <stop className="stop1" offset="0%"/>
                  <stop className="stop3" offset="100%"/>
                </linearGradient>
                <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f4783c"/>
                  <stop offset="100%" stopColor="#e41c53"/>
                </linearGradient>
            </defs>            
            <circle id='avatar' cx='50' cy='50' r='50' />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor='middle' fontSize='3rem' fill="white">{initials}</text>
          </svg>
        )
      }
    </div>
  )
}

export default Avatar
