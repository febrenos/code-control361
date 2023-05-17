import React from 'react'
import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: 'transparent' | 'solid'
}

const Button: React.FC<ButtonProps> = ({ onClick, children, background }) => {
  return (
    <button onClick={onClick} data-background={background}>
      {children}
    </button>
  )
}

export default Button
