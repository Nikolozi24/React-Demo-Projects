import Header from "./Components/Header/Header"
import Balance from "./Components/Balance/Balance"
import WalletImg from './assets/wallet.png'
import AddTransition from "./Components/AddTransition/AddTransition.jsx"
import { useRef } from "react"
import {useStore} from './Components/store/StoreProvider.jsx'
import History from "./Components/History/History.jsx"
function App() {

  const {handleAddTransaction, User:data, handleUserTransaction} = useStore()
   const dataRef = useRef()
   function handlegetData (){
   const values =  dataRef.current.getValue()

    handleAddTransaction(values);
    handleUserTransaction(values.type , values.amount)
   }
  
  return (
    <div className="bg-linear-60 from-teal-200  from-45% to-25% to-slate-500 w-full absolute">
    <Header name={ data?.name}/>
    <ul className=" flex justify-evenly gap-20 align-middle ">
    <Balance balance={data?.balance} layer={"Your balance"} imgSrc={WalletImg} />
    <Balance balance={data?.income} layer={"Your income"} imgSrc={WalletImg} color="blue" />
   
    <Balance balance={data?.expenses} layer={"Your expences"} imgSrc={WalletImg} color="violet" />
   
    </ul>
    <div className="flex justify-evenly w-full mt-10 ">
      <AddTransition ref={dataRef} onAdd={handlegetData} />
      <History  />
    </div>
</div>

  )
}

export default App
