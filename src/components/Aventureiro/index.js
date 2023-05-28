import './Aventureiro.css'

const Aventureiro = ({cor, nome, classe, imagem, alinhamento }) => {
    const corCabecalho = {background: cor} 
    return (
        <div className='aventureiro'>
            <div className='cabecalho' style={corCabecalho}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>   
                <h5>{classe}</h5>
            </div>

        </div>
    )
}

export default Aventureiro