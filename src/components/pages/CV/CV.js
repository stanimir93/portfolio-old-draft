import './cv.css';
import PageHeading from '../../PageHeading/PageHeading';
import PDF from '../../PDF/PDF';

import { useEffect } from 'react';
import printJS from 'print-js';
import UAParser from 'ua-parser-js';

export default function CV() {
    // Add event listenner for buttons
    // Hide non-functional buttons depending on device and browser
    useEffect(() => {
        hideButtons();

        // print
        document.getElementById('print-cv').addEventListener('click', async () => {
            printJS('cv.pdf');
        });
        // download
        document.getElementById('download-cv').addEventListener('click', () => {
            let a = document.createElement('a');
            a.setAttribute('href', 'cv.pdf');
            a.setAttribute('download', 'cv.pdf');
            a.click();
        });
        // new window
        document.getElementById('open-cv').addEventListener('click', () => {
            let a = document.createElement('a');
            a.setAttribute('href', 'http://localhost:3000/cv.pdf');
            a.setAttribute('target', '_blank');
            a.click();
        });
    }, []);

    // Identify user agent and OS
    function uaParse() {
        const parser = new UAParser();
        parser.setUA(navigator.userAgent);
        const result = parser.getResult();

        return { browser: result.browser.name, os: result.os.name };
    }
    const ua = uaParse();

    // Hide non-functional buttons depending on device and browser
    function hideButtons() {
        // If desktop and not firefox -> return
        if ((ua.browser !== 'Firefox' && ua.os === 'Windows') || ua.os === 'Linux' || ua.os === 'Mac OS') return;
        // If desktop and firefox -> hide print
        else if ((ua.browser === 'Firefox' && ua.os === 'Windows') || ua.os === 'Linux' || ua.os === 'Mac OS') {
            document.getElementById('print-cv').style.display = 'none';
            document.getElementById('open-cv').style.display = 'none';
        }
        // If not desktop -> hide print and open
        else if (ua.os !== 'Windows' || ua.os !== 'Linux' || ua.os !== 'Mac OS') {
            document.getElementById('print-cv').style.display = 'none';
            document.getElementById('open-cv').style.display = 'none';
        }
    }

    return (
        <main>
            <PageHeading title='MY CV' />
            <div className='pb-20'>
                <button
                    className='border-solid border-2 p-3 w-40 rounded mx-2 font-semibold'
                    type='button'
                    id='download-cv'
                >
                    DOWNLOAD
                </button>
                <button
                    className='border-solid border-2 p-3 w-40 rounded mx-2 font-semibold'
                    type='button'
                    id='open-cv'
                >
                    OPEN
                </button>
                <button
                    className='border-solid border-2 p-3 w-40 rounded mx-2 font-semibold'
                    type='button'
                    id='print-cv'
                >
                    PRINT
                </button>
            </div>
            <section className='w-full max-w-screen-lg'>
                <PDF />
            </section>
        </main>
    );
}
