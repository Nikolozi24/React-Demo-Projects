import React from 'react'

function Header({name}) {
  return (
    <menu className='mx-[auto] w-[90vw] rounded-3xl leading-[4] p-10  my-[4%] shadow-lg bg-violet-100 '>
    <li>
        <h1 className='text-3xl text-stone-700 font-bold '>Hi, {name}</h1>
    </li>
    <li>
        <h2 className='text-stone-500'>Welcome Back to your <span className='text-blue-500 font-bold '>Money Manager</span></h2>
    </li>
    </menu>
  )
}

export default Header