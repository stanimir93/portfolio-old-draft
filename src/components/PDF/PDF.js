import './pdf.css';
import { useEffect } from 'react';

export default function PDF(props) {
    function initPdfViewer() {
        let adobeDCView = new window.AdobeDC.View({
            clientId: 'a0ae972a3fa841b2b493e72ef9248935',
            divId: 'adobe-dc-view',
        });
        // }

        adobeDCView.previewFile(
            {
                content: { location: { url: 'cv.pdf' } },
                metaData: { fileName: 'stanimir_nikolov_cv.pdf' },
            },
            { embedMode: 'IN_LINE' }
        );
    }

    useEffect(() => {
        initPdfViewer();
    }, []);
    return <div id='adobe-dc-view'></div>;
}
