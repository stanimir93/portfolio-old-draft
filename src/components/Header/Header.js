import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <a href='https://stanimirnikolov.com' id='logo-text'>
                S.Nikolov
            </a>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            <i className='bi bi-house'></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects'>
                            <i className='bi bi-code-square'></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/cv'>
                            <i className='bi bi-file-person'></i>
                            <span>CV</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            <i className='bi bi-envelope'></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
