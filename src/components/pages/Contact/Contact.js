import './contact.css';
import PageHeading from '../../PageHeading/PageHeading';

export default function Contact() {
    return (
        <main>
            <PageHeading title='CONTACT ME' />
            <section className='shadow-md p-10 text-lg '>
                <p>If you would like us to work together or have any questions, please do contact me.</p>

                <address className='not-italic mt-8 font-semibold'>
                    <p className='align-middle my-4'>
                        <a
                            href='mailto:contact@stanimirnikolov.com'
                            target='_blank'
                            title='Send Email'
                            rel='noreferrer'
                        >
                            <i className='bi bi-envelope-fill text-2xl p-1 mr-2 relative top-0.5'></i>
                            <span>contact@stanimirnikolov.com </span>
                        </a>

                        <button
                            className='border px-2 pb-1 rounded text-sm mx-2 relative bottom-0.5'
                            onClick={() => navigator.clipboard.writeText('contact@stanimirnikolov.com')}
                        >
                            copy
                        </button>
                    </p>
                    <p className='align-middle my-4'>
                        <a href='https://github.com/stanimir93' target='_blank' title='Open GitHub' rel='noreferrer'>
                            <i className='bi bi-github text-2xl p-1 mr-2 relative top-0.5'></i>
                            <span>GitHub</span>
                        </a>
                    </p>
                    <p className='align-middle my-4'>
                        <span>
                            <a
                                href='https://www.linkedin.com/in/stanimir-nikolov/'
                                target='_blank'
                                title='Open LinkedIn'
                                rel='noreferrer'
                            >
                                <i className='bi bi-linkedin text-2xl p-1 mr-2 relative top-0.5'></i>
                                <span>LinkedIn</span>
                            </a>
                        </span>
                    </p>
                </address>
            </section>
        </main>
    );
}
