import './Select.css'
const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select required={props.requerido}>
                {props.itens.map(item => {
                    return <option key={item}> { item } </option>
                })}
            </select>
        </div>
    )
}

export default Select