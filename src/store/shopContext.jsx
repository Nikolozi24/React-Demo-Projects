import {createContext, useContext, useState, useReducer }from 'react'
import shoppingCartReducer from './ShopingReducer';
import {ADD_ITEM,UPDATE_ITEM} from './ActionTypes.jsx'
export const CartContext = createContext({
    items:[],
    addItemToCart:()=>{},
    updateCartQuantity:()=>{}
});

export const useMyStore = ()=> useContext(CartContext);
const InitialState = {
  items: [],
}


export default function CartContextProvider({children}){
   const [shopingCartState,shopingDispatch]= useReducer(shoppingCartReducer, InitialState);

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });
    
      function handleAddItemToCart(id) {
        shopingDispatch({type:ADD_ITEM, payload:id})
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
       shopingDispatch({type:UPDATE_ITEM, payload:{id:productId, amount:amount}})
      }
      const cxValue={
        items: shopingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateCartQuantity:handleUpdateCartItemQuantity
      }
    

    return <CartContext.Provider value={cxValue}>{children}</CartContext.Provider>

}
