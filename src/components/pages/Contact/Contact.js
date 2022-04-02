import './contact.css';
import CSSClasses from '../../../css-classes/css-classes';

export default function Contact() {
  return (
    <main className='text-neutral-800 px-2'>
      <section className={`${CSSClasses.whiteBox} max-w-3xl `}>
        <div className={`${CSSClasses.padeHeadingContainer}`}>
          <h2 className={`${CSSClasses.padeHeading}`}>CONTACT</h2>
        </div>

        <p className='text-lg'>
          If you would like us to work together or have any questions, please do
          contact me.
        </p>

        <address className='not-italic mt-10 font-semibold font-mono'>
          <p className='align-middle my-6'>
            <a
              className='group  p-3 px-1 '
              href='mailto:contact@stanimirnikolov.com'
              target='_blank'
              title='Send Email'
              rel='noreferrer'
            >
              <i className='bi bi-envelope-fill text-3xl mr-4 relative top-1 opacity-80 transition text-slate-800 group-hover:opacity-100 '></i>
              <span className='group-hover:text-neutral-800 transition'>
                contact@stanimirnikolov.com{' '}
              </span>
            </a>

            <button
              className='border border-slate-700 px-2 py-1 rounded text-xs mx-2 opacity-80 active:opacity-100 text-slate-700 active:bg-gradient-to-r from-slate-700 to-slate-900 active:text-white select-none'
              onClick={() =>
                navigator.clipboard.writeText('contact@stanimirnikolov.com')
              }
            >
              copy email
            </button>
          </p>
          <p className='align-middle my-6 select-none'>
            <a
              className='group  p-3 px-1 '
              href='https://github.com/stanimir93'
              target='_blank'
              title='Open GitHub'
              rel='noreferrer'
            >
              <i className='bi bi-github text-3xl mr-4 relative top-1 transition opacity-80 group-hover:opacity-100 transition-color text-purple-800'></i>
              <span className='group-hover:text-neutral-800 transition'>
                GitHub
              </span>
            </a>
          </p>
          <p className='align-middle my-6 select-none '>
            <span>
              <a
                className='group p-3 px-1'
                href='https://www.linkedin.com/in/stanimir-nikolov/'
                target='_blank'
                title='Open LinkedIn'
                rel='noreferrer'
              >
                <i className='bi bi-linkedin text-3xl mr-4 relative top-1 transition opacity-80 group-hover:opacity-100 text-sky-600'></i>
                <span className='group-hover:text-neutral-800 transition'>
                  LinkedIn
                </span>
              </a>
            </span>
          </p>
        </address>
      </section>
    </main>
  );
}
