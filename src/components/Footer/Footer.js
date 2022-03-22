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
                    <i class='bi bi-linkedin'></i>
                </li>
                <li>
                    <i class='bi bi-github'></i>
                </li>
            </ul>
        </footer>
    );
}
