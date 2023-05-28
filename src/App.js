import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Alinhamento from './components/Alinhamento';
import Rodape from './components/Rodape';

function App() {

	const [personagens, setPersonagens] = useState([])
	const alinhamentos = [
		{
			nome: 'Bom',
			corPrimaria: '#82CFFA',
			corSecundaria: '#E8F8FF'
		},
		{
			nome: 'Neutro',
			corPrimaria: '#A6D157',
			corSecundaria: '#F0F8E2'
		},
		{
			nome: 'Mal',
			corPrimaria: '#E06B69',
			corSecundaria: '#FDE7E8'
		}
	]
	
	const alinhamentosNomes = alinhamentos.map((alinhamento) => {
		return alinhamento.nome
	})

	const criaCard = (personagem) => {
		setPersonagens([...personagens, personagem])
	}

	return (
		<div className="App">
			<Banner />
			<Formulario
				alinhamentos={alinhamentosNomes}
				aoPersonagemCadastrado={personagem => criaCard(personagem)}
			/>
			{
				alinhamentos.map((alinhamento) => {
					return <Alinhamento
						key={alinhamento.nome}
						nome={alinhamento.nome}
						corPrimaria={alinhamento.corPrimaria}
						corSecundaria={alinhamento.corSecundaria}
						aventureiros={personagens.filter(personagem => personagem.alinhamento == alinhamento.nome)}
					/>
				})
			}
			<Rodape />
		</div>
	);
}

export default App;