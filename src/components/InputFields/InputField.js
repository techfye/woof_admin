import React from 'react'

const InputField = (props) => {
  const { label, name, value, onChange, required, type, placeholder } = props;

  return (
    <>
      <label className={required === true ? 'form-label required' : 'form-label' } >{label}</label>
      <input type={type} className="form-control" value={value} required={required} onChange={onChange} name={name} placeholder={placeholder} />
    </>
  )
}

export default InputField