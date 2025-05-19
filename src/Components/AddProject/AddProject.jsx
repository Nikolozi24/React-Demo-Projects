import React,{useImperativeHandle, useRef} from 'react'
import {Modal} from '../SideBar/SideBar/CostumModal/Modal.jsx'
import Input from './Input'
import MyButton from './MyButton'
function AddProject({values, handleValues, modalRef}) {
 
   const title = useRef();
   const description = useRef()
   const date = useRef();

   useImperativeHandle(values, ()=>{
      return{
          getValues(){
              return {
                title: title.current.value,
                description: description.current.value,
                date: date.current.value,
                id:Math.floor(Math.random()*10000)
              }
          }
      }


   })
  return (
    <>
    <Modal ref={modalRef}/>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <MyButton text={"Cancel"} className={"text-stone-800 hover:text-stone-950"}/>
            <MyButton text={"Save"} onClick={handleValues} className={" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "}/>
        </menu>
        <div>
            <Input ref={title} label={"Title"}/>
            <Input ref={description} textarea  label={"Description"}/>
            <Input  ref={date} label={"Due Date"} type={"date"}/>
        </div>
      </div>
      </>
  )
}

export default AddProject