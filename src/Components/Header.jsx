import reactImg from '../assets/react-core-concepts.png'
import { description } from "../data.js";
import "./Header.css"

function Header (){ 
 return(
   <header>
     <img src={reactImg} alt="Stylized atom" />  
     <h1>React Essentials</h1>
     <p>
     { 
       description
     } React concepts you will need for almost any app you are
     going to build!
     </p>
   </header>
   );
   
}
export default Header
