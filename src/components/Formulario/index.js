import './Formulario.css'
import InputSimple from '../InputSimple';
import Select from '../Select';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = () => {

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

    const alinhamentos = [
        'Bom e leal',
        'Bom e neutro',
        'Bom e caótico',
        'Neutro e leal',
        'Neutro',
        'Neutro e caótico',
        'Mal e leal',
        'Mal e neutro',
        'Mal e caótico',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Salvo');
    }

    const [nome, setNome] = useState('')
    const [nome, setNome] = useState('')
    const [nome, setNome] = useState('')

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha a ficha de seu Personagem ;)</h2>
                <InputSimple requerido={true} placeholder='Digite o seu nome' label="Nome" />
                <Select requerido={true} label="Classe" itens={classes} />
                <InputSimple requerido={true} placeholder='Coloque a sua imagem' label="Imagem" />
                <Select requerido={true} label="Alinhamento" itens={alinhamentos} />
                <Botao > Criar Personagem </Botao>
            </form>
        </section>
    )
}

export default Formulario