import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='flex items-baseline justify-center md:justify-between py-6 sm:p-8'>
            <a className='text-2xl hidden md:inline font-bold' href='https://stanimirnikolov.com' id='logo-text'>
                S.Nikolov
            </a>
            <nav className='w-full md:w-fit'>
                <ul className='flex items-baseline w-full justify-around md:space-x-16 text-lg sm:text-xl font-semibold'>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/'>
                            <i className='bi bi-house sm:text-2xl md:pr-2'></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/projects'>
                            <i className='bi bi-code-square sm:text-2xl md:pr-2'></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/cv'>
                            <i className='bi bi-file-person sm:text-2xl md:pr-2'></i>
                            <span>CV</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex flex-col md:flex-row items-center md:items-end' to='/contact'>
                            <i className='bi bi-envelope sm:text-2xl md:pr-2'></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
