import Header from "./Components/Header.jsx";
import {useState} from 'react'
import CoreConcept from "./Components/CoreConcept.jsx";
import  CORE_CONCEPTS, {EXAMPLES} from "./data.js";
import TabButton from "./Components/TabButton/TabButton.jsx";

function App() {
  const [selectedContent, setSelectedContent] =  useState('Please Click the button');

  //arrow function

  const handleClick=(contentType)=>{
  //contenttype=> 'component' , 'jsx' ,'props' , 'state'
      setSelectedContent(prev=>contentType);
      console.log(selectedContent)
  }

 
  return (
    <div>
      <Header></Header>
        <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((item)=>(
           <CoreConcept key={item?.title}  {...item}/>
         ))}  
        </ul>
        </ section>
        <section id="examples" >
          <h2>examples</h2>
          <menu >
               <TabButton
                isSelected={selectedContent==="components"}
               onClick={()=>handleClick("components")}
               >              
               Components
               
               </TabButton>
              
               <TabButton 
               isSelected={selectedContent==="jsx"}
               onClick={()=>handleClick("jsx")}
               >
                JSX</TabButton>
               <TabButton
               isSelected={selectedContent==="props"}
               onClick={()=>handleClick("props")} >Props</TabButton>
               <TabButton 
               isSelected={selectedContent==="state"}
               onClick={()=>handleClick("state")} >State</TabButton>

          </menu>
          <div id="tab-content">
           <h3>{EXAMPLES[selectedContent]?.title || selectedContent}  </h3>
           <p>{EXAMPLES[selectedContent]?.description || "To show you the"}</p>
           <pre>
            <code>
            {EXAMPLES[selectedContent]?.code|| "Code: <example>\n \t code\n     </example>"}
            </code>
           </pre>  
            
          </div>      
       </section>
        
      </main>
    </div>
  );
}

export default App;
 