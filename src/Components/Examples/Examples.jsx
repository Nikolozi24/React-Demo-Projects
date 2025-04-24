import React , {useState} from 'react'
import Section from '../Section/Section.jsx';
import TabButton from '../TabButton/TabButton'
import { EXAMPLES } from '../../data.js'
import Tabs from '../Tabs/Tabs.jsx';


export default function Examples(){
    const [selectedContent, setSelectedContent] =  useState('Please Click the button');
 const Buttons =  <>
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

 </>

    //arrow function
  
    const handleClick=(contentType)=>{
    //contenttype=> 'component' , 'jsx' ,'props' , 'state'
        setSelectedContent(prev=>contentType);
        console.log(selectedContent)
    }
  return (
    <Section id={"examples"} title={"Examples"}  >
      <Tabs
      buttonsContainer="menu"
      buttons ={Buttons}
     >
      <div id="tab-content">
     <h3>{EXAMPLES[selectedContent]?.title || selectedContent}  </h3>
     <p>{EXAMPLES[selectedContent]?.description || "To show you the"}</p>
     <pre>
      <code>
      {EXAMPLES[selectedContent]?.code|| "Code: <example>\n \t code\n     </example>"}
      </code>
     </pre>  
      
    </div>  
      </Tabs>
    <menu >
     
    </menu>
        
    </Section>

  )
}
