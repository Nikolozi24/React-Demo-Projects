import React from 'react'

function MyButton({text, ...props}) {
  return (
    <li><button {...props} >{text}</button></li>
  )
}

export default MyButton