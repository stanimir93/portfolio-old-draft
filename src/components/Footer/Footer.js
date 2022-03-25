import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/cv'>CV</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <ul>
                <li>
                    <a href='https://github.com/stanimir93' target='_blank' title='GitHub'>
                        <i className='bi bi-github'></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/stanimir-nikolov/' target='_blank' title='LinkedIn'>
                        <i className='bi bi-linkedin'></i>
                    </a>
                </li>
                <li>
                    <a href='mailto:contact@stanimirnikolov.com' target='_blank' title='contact@stanimirnikolov.com'>
                        <i className='bi bi-envelope-fill'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
