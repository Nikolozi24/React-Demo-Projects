
import React from 'react'

function Input({children, title, select, ...props}) {
    const PSTyles = 'flex flex-col gap-3'
    const InputType = ' w-sm bg-slate-100 border-1 border-stone-200 px-3 py-2 w-full rounded-sm outline-0'
    function renderInput(){
            return <p className={PSTyles} > 
            <label  className='uppercase'>{title}</label>
            <input  {...props}
            className={InputType} 
             type='text'/>
        </p>
    }
    function renderSelect(){
        return   <p className={PSTyles} >
        <label>TYPE</label>
        <select {...props} className='w-sm bg-stone-200 py-2 px-3 rounded-sm'>
           {children}
        </select>
    </p>
    }

    return select? renderSelect(): renderInput()
}

export default Input