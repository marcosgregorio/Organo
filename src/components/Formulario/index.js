import './Formulario.css'
import InputSimple from '../InputSimple';
import Select from '../Select';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = (props) => {

    const classes = [
        'Mago',
        'Bárbaro',
        'Monge',
        'Guerreiro',
        'Paladino',
        'Clérigo',
        'Patrulheiro',
        'Feiticeiro',
    ]

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('http://github.com/marcosgregorio.png')
    const [classe, setClasse] = useState(classes[0])
    const [alinhamento, setAlinhamento] = useState(props.alinhamentos[0])

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Salvo', nome, classe, imagem, alinhamento);
        props.aoPersonagemCadastrado({
            nome, 
            classe,
            imagem,
            alinhamento
        })
        clearAll()
    }

    const clearAll = () => {
        setNome('')
        setImagem('http://github.com/')
        setNome('')
        setAlinhamento('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha a ficha de seu Personagem ;)</h2>
                <InputSimple
                    requerido={true}
                    placeholder='Digite o seu nome'
                    label="Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Select
                    valor={classe}
                    requerido={true}
                    label="Classe"
                    itens={classes}
                    aoAlterado={valor => setClasse(valor)}
                />
                <InputSimple
                    requerido={true}
                    placeholder='Coloque a sua imagem'
                    label="Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <Select
                    requerido={true}
                    label="Alinhamento"
                    itens={props.alinhamentos}
                    valor={alinhamento}
                    aoAlterado={valor => setAlinhamento(valor)}
                />
                <Botao > Criar Personagem </Botao>
            </form>
        </section>
    )
}

export default Formulario