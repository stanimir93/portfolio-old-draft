import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='drop-shadow-sm shadow-slate-200 shadow-lg p-0 y-0 font-mono'>
      <div className='flex items-baseline justify-center md:justify-between py-6 sm:p-8'>
        <a
          className='text-2xl hidden md:inline font-bold text-slate-600'
          href='https://stanimirnikolov.com'
          id='logo-text'
        >
          S.NIKOLOV
        </a>
        <nav className='w-full md:w-fit'>
          <ul className='flex items-baseline w-full justify-around md:space-x-16 text-lg sm:text-xl font-bold'>
            <li className='group'>
              <NavLink className='flex flex-col md:flex-row items-center md:items-end' to='/'>
                <i className='bi bi-house sm:text-2xl md:pr-4 text-slate-600 group-hover:text-slate-600 transition-colors'></i>
                <span className='text-slate-600 group-hover:text-slate-800 transition-colors'>Home</span>
              </NavLink>
            </li>
            <li className='group'>
              <NavLink className='flex flex-col md:flex-row items-center md:items-end' to='/projects'>
                <i className='bi bi-code-square sm:text-2xl md:pr-4 text-slate-600 group-hover:text-slate-600 transition-colors'></i>
                <span className='text-slate-600 group-hover:text-slate-800 transition-colors'>Projects</span>
              </NavLink>
            </li>
            <li className='group'>
              <NavLink className='flex flex-col md:flex-row items-center md:items-end' to='/cv'>
                <i className='bi bi-file-person sm:text-2xl md:pr-4 text-slate-600 group-hover:text-slate-600 transition-colors'></i>
                <span className='text-slate-600 group-hover:text-slate-800 transition-colors'>CV</span>
              </NavLink>
            </li>
            <li className='group'>
              <NavLink className='flex flex-col md:flex-row items-center md:items-end' to='/contact'>
                <i className='bi bi-envelope sm:text-2xl md:pr-4 text-slate-600 group-hover:text-slate-600 transition-colors'></i>
                <span className='text-slate-600 group-hover:text-slate-800 transition-colors'>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>{" "}
      </div>
    </header>
  );
}
