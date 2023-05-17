import React from 'react'
import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: 'transparent' | 'solid'
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  background,
  type = 'button',
}) => {
  return (
    <button type={type} onClick={onClick} data-background={background}>
      {children}
    </button>
  )
}

export default Button
