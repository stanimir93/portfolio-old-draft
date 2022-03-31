import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='pb-12 pt-32  bg-slate-100 text-slate-600 font-mono'>
      {/* <hr className='w-96 m-auto mb-8  border-slate-200'/> */}
      <nav>
        <ul className='flex place-content-center text-lg mb-12 '>
          <li>
            <Link className='mx-3 py-1 px-3 transition hover:text-slate-800' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='mx-3 py-1 px-3 transition hover:text-slate-800' to='/projects'>
              Projects
            </Link>
          </li>
          <li>
            <Link className='mx-3 py-1 px-3 transition hover:text-slate-800' to='/cv'>
              CV
            </Link>
          </li>
          <li>
            <Link className='mx-3 py-1 px-3 transition hover:text-slate-800' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ul className='flex place-content-center text-2xl'>
        <li>
          <a className='mx-3 py-1 px-3' href='https://github.com/stanimir93' target='_blank' title='GitHub'>
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
      <p className='text-center mt-12'>@stanimirnikolov.com</p>
    </footer>
  );
}
