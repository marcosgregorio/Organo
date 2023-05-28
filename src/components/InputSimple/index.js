import { useState } from 'react'
import './InputSimple.css'
const InputSimple = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="input-simple">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                required={props.requerido} 
                placeholder={props.placeholder + '...'} 
            />
        </div>
    )
}
export default InputSimple