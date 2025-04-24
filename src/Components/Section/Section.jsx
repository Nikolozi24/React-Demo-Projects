import React from 'react'

export default function Section(props) {
  const {id , title , children ,...others} = props
  
  return (
    <section id={id} {...others} >
            <h2>{title}</h2>
             {children}
    </section>
  )
}

