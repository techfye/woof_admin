import React from 'react'
import './Image.css'
const ImageField = (props) => {
    const {label, type, onChange, name} = props;
    return (
        <>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">{label}</label>
                <input className="form-control drop-area" name={name} type={type}  onChange={onChange} accept="image/*"  multiple />
            </div>
        </>
    )
}

export default ImageField