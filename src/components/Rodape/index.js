import './Rodape.css'
const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='footer__redes'>
                <img className='footer__rede' src='/assets/fb.png' alt='Redes sociais'/>
                <img className='footer__rede' src='/assets/tw.png' alt='Redes sociais'/>
                <img className='footer__rede' src='/assets/ig.png' alt='Redes sociais'/>
            </div>
            <div className='footer__logo'>
                <img src='/assets/logo.png' />
            </div>
            <div className='desenvolvedor'>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape