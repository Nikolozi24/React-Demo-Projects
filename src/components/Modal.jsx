import {useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open,children, onClose}) {
  const dialog = useRef();
  useEffect(()=>{
    open ? dialog.current.showModal():dialog.current.close();
  },[open])


  return createPortal(
    <dialog className="modal" onClose={onClose} ref={dialog} >
      {open ? children:null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
