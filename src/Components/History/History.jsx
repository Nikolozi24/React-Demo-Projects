import React from 'react'
import { useStore } from '../store/StoreProvider';
function History() {

   /*
   
   this component just render history of transactions
   */ 
 const titles = ["title", "Amount", "Type", 'Delete']
   const {Transactions, handleDeleteTransaction} = useStore() 
   
  return (
    <div className=' bg-green-300 bg-linear-60 from-lime-200 to-sky-300 mt-20 p-10 rounded-2xl shadow-2xl '>
    <h1>History</h1>
    <table className='shadow-2xl p-4 border-1 ' border={1}  cellPadding={1} cellSpacing={2}>
    
    <tr className='srounded-2xl border-b-1 shadow-stone-800'>
        {titles.map(item=>{
            return<th className='p-6' key={item}>{item}</th>
        })}
    </tr>
        
        {Transactions.map((item,index)=>{
            const {id, title, amount, type} = item;
            const classNameForTd = "p-4 "
                return    index<9 &&   <tr className='text-center text-lime-900  gap-6' key={id}>
                        <td className={classNameForTd}>{title}</td>
                        <td>{amount}</td>
                        <td>{type} </td>
                        <td><button onClick={()=>handleDeleteTransaction(index)} className='cursor-pointer'>X</button></td>
                    </tr>
                }
                

        )}
    
    </table>
    </div>
  )
}

export default History