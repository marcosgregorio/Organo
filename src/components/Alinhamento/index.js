import Aventureiro from '../Aventureiro';
import './Alinhamento.css'

const Alinhamento = (props) => {
    const corDeFundo = { backgroundColor: props.corSecundaria };
    const corDaBorda = { borderColor: props.corPrimaria }
    return (
        (props.aventureiros.length > 0) &&
            <section className='party' style={corDeFundo}>
                <h3 style={corDaBorda}> {props.nome} </h3>
                <div className='aventureiros'>
                    {
                        props.aventureiros.map(aventureiro => {
                            return <Aventureiro 
                                key={aventureiro.nome}
                                cor={props.corPrimaria}
                                nome={aventureiro.nome} 
                                classe={aventureiro.classe}
                                imagem={aventureiro.imagem}
                                alinhamento={aventureiro.alinhamento}
                            />
                        }
                    )}
                </div>
            </section>
    )
}

export default Alinhamento