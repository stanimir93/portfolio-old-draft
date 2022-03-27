import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='flex justify-between p-8'>
            <a className='text-2xl hidden md:inline' href='https://stanimirnikolov.com' id='logo-text'>
                S.Nikolov
            </a>
            <nav>
                <ul className='flex space-x-16 text-xl'>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/'>
                            <i className='bi bi-house md:pr-3'></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/projects'>
                            <i className='bi bi-code-square md:pr-3'></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/cv'>
                            <i className='bi bi-file-person md:pr-3'></i>
                            <span>CV</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/contact'>
                            <i className='bi bi-envelope md:pr-3'></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
