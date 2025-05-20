import {useState, createContext, useContext} from 'react';

const MyStore = createContext({Transactions:[], handleAddTransaction:()=>{}, handleUserTransaction:()=>{},
handleDeleteTransaction:()=>{} , User: {
      id:1,
      name:"Richard",
      balance:1500,
      income:200,
      expenses:100
  }})

export const useStore =()=> useContext(MyStore);

export default function StoreProvider({children}){
    const [transaction,setTransaction] = useState([])
    const [userData, setUserData] = useState(      {
          id:1,
          name:"Richard",
          balance:1500,
          income:200,
          expenses:100
      })
    function handleAddTransaction(item){
            setTransaction(prev=>{
                  const newTrans = [item, ...prev.map(item=>({...item}))];
                  return newTrans; 
            })
            console.log(transaction)
      console.log(transaction)
    }
 function handleDeleteTransaction(index){
      
      setTransaction(prev=>{
            const id = transaction[index]?.id;
            const newTransaction = transaction.filter((item)=>item.id!==id);   
            
          return newTransaction
      });  
      
 }

 function handleUserTransaction(type , value){
      if(type==="income"){
            setUserData(prev=>({...prev, income:prev.income-value}))
      }
      else if(type==="balance"){
            setUserData(prev=>({...prev, balance:prev.balance-value}))
      }
     else if(type==="expences"){
            setUserData(prev=>({...prev, expenses:prev.expenses-value}))
      }
 }

   return <MyStore.Provider value={{Transactions:transaction,
       handleAddTransaction:handleAddTransaction
        , handleDeleteTransaction:handleDeleteTransaction,
        handleUserTransaction:handleUserTransaction,
            User:userData
      }}>{children}</MyStore.Provider>

}
