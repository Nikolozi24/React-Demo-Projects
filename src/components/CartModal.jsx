import { forwardRef, useImperativeHandle, useRef , useContext} from 'react';
import { createPortal } from 'react-dom';
import { CartContext } from '../store/shopContext'
import Cart from './Cart';

const CartModal = forwardRef(function Modal(
  {title, actions },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  const {items:cartItems , updateCartQuantity} = useContext(CartContext)

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={updateCartQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
