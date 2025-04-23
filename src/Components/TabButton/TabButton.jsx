import React from 'react'
export  default function TabButton({children,onClick, isSelected}){
   return (
    <li key={Math.random()} >
      <button className={isSelected? 'active':undefined} onClick={onClick}>
        {children}
      </button>
    </li>
   )
}

