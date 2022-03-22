import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <span id='logo-text'>S.Nikolov</span>
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
                            <i class='bi bi-code-square'></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/cv'>
                            <i class='bi bi-file-person'></i>
                            <span>CV</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            <i class='bi bi-envelope'></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
