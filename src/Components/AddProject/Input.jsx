import React from 'react'
 
function Input({textarea, label, ...otherProps}) {
  const TailWindClasses ='w-full p-1 boder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
 
    return (
        <p className='flex flex-col gap-1 my-4'>
            <label className='text-sm font-bold uppercase text-stone-500 '>{label}</label>
            {textarea? <textarea className={TailWindClasses} {...otherProps}/> :  <input className={TailWindClasses} {...otherProps} />}
        </p>
    
           
  )
}

export default Input