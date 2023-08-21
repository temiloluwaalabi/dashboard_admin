import React from 'react'

const Button = ({ customFunc, bgColor,width,icon, color, size, text, borderRadius, bgHoverColor }) => {
  return (
    <button 
      type='button' 
      style={{backgroundColor: bgColor, color, borderRadius}} 
      className={`text-${size} w-${width} hover:bg-${bgHoverColor} p-3 hover:drop-shadow-xl`}
      onClick={() => customFunc()}
      >
      {icon} {text}
    </button>
  )
}

export default Button