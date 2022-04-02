import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  return (
    <footer
      className='
      pt-14 px-4 
    pb-12 

    bg-slate-100 text-slate-600 
    font-mono'
    >
      {/* <hr className='w-96 m-auto mb-8  border-slate-200'/> */}
      <nav className='flex justify-center'>
        <ul className='flex justify-evenly max-w-xl w-full text-lg mb-12 select-none'>
          <li>
            <Link
              className='py-1 px-2 transition hover:text-slate-800'
              to='/'
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='py-1 px-2 transition hover:text-slate-800'
              to='/projects'
              onClick={scrollToTop}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className='py-1 px-2 transition hover:text-slate-800'
              to='/cv'
              onClick={scrollToTop}
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              className='py-1 px-2 transition hover:text-slate-800'
              to='/contact'
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ul className='flex place-content-center text-2xl'>
        <li>
          <a
            className='mx-3 py-1 px-3'
            href='https://github.com/stanimir93'
            target='_blank'
            title='GitHub'
          >
            <i className='bi bi-github transition opacity-75 hover:opacity-100 transition-color text-purple-800'></i>
          </a>
        </li>
        <li>
          <a
            className='mx-3 py-1 px-3'
            href='https://www.linkedin.com/in/stanimir-nikolov/'
            target='_blank'
            title='LinkedIn'
          >
            <i className='bi bi-linkedin transition opacity-75 hover:opacity-100 text-sky-600'></i>
          </a>
        </li>
        <li>
          <a
            className='mx-3 py-1 px-3'
            href='mailto:contact@stanimirnikolov.com'
            target='_blank'
            title='contact@stanimirnikolov.com'
          >
            <i className='bi bi-envelope-fill transition opacity-75 hover:opacity-100 text-red-800'></i>
          </a>
        </li>
      </ul>
      <p className='text-center mt-12 select-none'>@stanimirnikolov.com</p>
    </footer>
  );
}
