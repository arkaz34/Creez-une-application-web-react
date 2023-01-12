import logo from '../../assets/LOGO.png';
import Nav from '../Nav/Nav'
import './header.css'

export default function Header(){
    return(
        <header className='header'>
            <div className='header-logo'>
                <img className="logo" src={logo} alt="logo de l'agence Kasa"/>
            </div>
            <Nav />
        </header>
    );
}

 