import './contact.css';
import PageHeading from '../../PageHeading/PageHeading';

export default function Contact() {
    return (
        <main>
            <PageHeading title='Contact Me' />
            <section>
                <div>
                    <p>If you would like us to work together or have any questions, please do contact me.</p>
                </div>
                <div>
                    <p>
                        <a
                            href='mailto:contact@stanimirnikolov.com'
                            target='_blank'
                            title='Send Email'
                            rel='noreferrer'
                        >
                            <i className='bi bi-envelope-fill'></i>
                            <span>contact@stanimirnikolov.com </span>
                        </a>

                        <button onClick={() => navigator.clipboard.writeText('contact@stanimirnikolov.com')}>
                            copy
                        </button>
                    </p>
                    <p>
                        <a href='https://github.com/stanimir93' target='_blank' title='Open GitHub' rel='noreferrer'>
                            <i className='bi bi-github'></i>
                            <span>GitHub</span>
                        </a>
                    </p>
                    <p>
                        <span>
                            <a
                                href='https://www.linkedin.com/in/stanimir-nikolov/'
                                target='_blank'
                                title='Open LinkedIn'
                                rel='noreferrer'
                            >
                                <i className='bi bi-linkedin'></i>
                                <span>LinkedIn</span>
                            </a>
                        </span>
                    </p>
                </div>
            </section>
        </main>
    );
}
