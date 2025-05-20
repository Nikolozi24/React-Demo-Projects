import React,{useRef } from 'react'
import Input from './Input'

 
import {useImperativeHandle} from 'react'

function AddTransition({ref , onAdd}) {


    /// this is a transaction component which have title input , amount input and  select input for stelect type
    /// i,m using references for get valuse only when add button is clicked 
    /// note: if you are using react version less than 19.0.0 
   // you must change this component for using ref porps with forwardref
 //like:
 /* 
 const AddTRansaction = forwardRef(function AddTransition({ronAdd}, ref) {
 
        ////same logic
 
 
 })
 
 
 
 */


  const titleRef = useRef()
  const AmountRef = useRef();
  const TypeRef = useRef()
  useImperativeHandle(ref,()=>{
    return {
        getValue(){
            return {
                id:Math.random(),
                title:titleRef.current.value,
                amount:Number(AmountRef.current.value),
                type: (TypeRef.current.value)
            }
        }
    }

  })
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();   
    }}  className='w-lg flex h-[70vh]  border-1 rounded-2xl bg-radial from-30%  from-blue-100 via-40% via-green-200 to-violet-300 border-stone-100  p-2 mt-20 shadow-2xl justify-center items-center flex-col gap-10'>
        <legend className='text-2xl text-left'>Add Transition</legend>

        <Input ref={titleRef} title="title"/>
        <Input ref={AmountRef} title="amount"/>
        <Input ref={TypeRef} select>
            <option value="income">Income</option>
            <option value="balance">balance</option>
            <option value="expences">expences</option>
        </Input>   
         
        <button onClick={onAdd} className='px-4 py-2 bg-blue-500 rounded-md text-white font-bold '>Add</button>
    </form>
)
}

export default AddTransition