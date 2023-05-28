import './Select.css'
const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                value={props.valor}
                required={props.requerido}
            >
                {props.itens.map(item => {
                    return <option key={item}> { item } </option>
                })}
            </select>
        </div>
    )
}

export default Select