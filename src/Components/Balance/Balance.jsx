import React from 'react'

function Balance({imgSrc, layer, balance , color="green"}) {
  return (
        <li className={`flex p-5 shadow-md w-1/5 gap-10 rounded-lg  border-2 border-${color}-700 bg-${color}-50`}>
          <span className={`rounded-full bg-${color}-300`}> <img className={`p-5 w-full `} src={imgSrc}/></span>
            <ul className='flex flex-col gap-2 align-middle justify-center'>
                <li ><span>{layer}</span></li>
                <li><span className='font-bold text-xl'>Rs {balance}</span></li>
            </ul>
        </li>
  )
}

export default Balance