import React from 'react'

const Form = ({ type, nombre,value,onSubmit  }) => {
    return (
        <>
            <input type={type} placeholder={nombre} name={nombre} value={value} onChange={onSubmit} />
        </>
    )
}

export default Form