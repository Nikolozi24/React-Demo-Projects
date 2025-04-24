import React from 'react'
import CORE_CONCEPTS from '../../data.js'
import CoreConcept from '../CoreConcept.jsx'
export default function CoreCocepts (){
  return (
   <section id="core-concepts">
           <h2>Core Concepts</h2>
           <ul>
           {CORE_CONCEPTS.map((item)=>(
              <CoreConcept key={Math.random()}  {...item}/>
            ))}  
           </ul>
           </ section>
  )
}

