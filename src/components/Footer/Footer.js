import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='p-8 mt-20 '>
            <nav>
                <ul className='flex place-content-center text-base mb-6'>
                    <li>
                        <Link className='mx-1 p-1' to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='mx-1 p-1' to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className='mx-1 p-1' to='/cv'>
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link className='mx-1 p-1' to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul className='flex place-content-center text-xl'>
                <li>
                    <a className='mx-2 p-1' href='https://github.com/stanimir93' target='_blank' title='GitHub'>
                        <i className='bi bi-github'></i>
                    </a>
                </li>
                <li>
                    <a
                        className='mx-2 p-1'
                        href='https://www.linkedin.com/in/stanimir-nikolov/'
                        target='_blank'
                        title='LinkedIn'
                    >
                        <i className='bi bi-linkedin'></i>
                    </a>
                </li>
                <li>
                    <a
                        className='mx-2 p-1'
                        href='mailto:contact@stanimirnikolov.com'
                        target='_blank'
                        title='contact@stanimirnikolov.com'
                    >
                        <i className='bi bi-envelope-fill'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
