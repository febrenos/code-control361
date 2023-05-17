import React from 'react'
import './style.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type: string
  scale?: string
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isFocus: boolean
}

const Input: React.FC<InputProps> = ({ label, type, scale, ...rest }) => {
  return (
    <div className="content">
      <label className="label" htmlFor={label} {...(rest as LabelProps)}>
        {label}
      </label>
      <input
        className="input"
        required
        data-scale={scale}
        type={type}
        id={label}
        name={label}
        autoComplete="off"
        placeholder="Digite algo..."
        {...rest}
      />
    </div>
  )
}

export default Input
