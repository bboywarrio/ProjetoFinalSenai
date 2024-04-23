import './Header.css'
import Logo from "../assets/img/logo.png"
function Header () 
{
    return(
        <>
        <header className='fix'>
          
            <div>
                <a href="/">
                    <img className='log' src={Logo} alt="" />
                </a>
            </div>
            <nav>
                <ul>
                    <a href="/">
                        <li>Home</li>
                    </a>
                    <a href="/Produtos">
                        <li>Produtos</li>
                    </a>
                    <a href="/Aplicativo">
                        <li>Aplicativo</li>
                    </a>
                    <a href="/contato">
                        <li>Contato</li>
                    </a>
                </ul>
            
            </nav>
        </header>

        </>
    )

}

export default Header