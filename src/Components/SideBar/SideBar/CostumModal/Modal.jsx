import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
export const Modal = forwardRef(function Modal({ children}, ref){
  const dialog =  useRef()
useImperativeHandle(ref, ()=>{
  return {
    open(){
      dialog.current.showModal()
    }
  }
})

  return createPortal(
    <dialog ref={dialog} open={false}  className='w-1/3 h-1/3 flex flex-col items-center p-4' >
      {children}

    </dialog>
 
      , document.getElementById('modal-root'))
})
