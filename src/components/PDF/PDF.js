import "./pdf.css";
import { useEffect } from "react";

export default function PDF(props) {
  // Check if AdobeDC id Ready
  function AdobeDCReady() {
    if (window.AdobeDC) return true;
    else return false;
  }

  // Display the PDF
  function initPdfViewer() {
    let adobeDCView = new window.AdobeDC.View({
      clientId: "a0ae972a3fa841b2b493e72ef9248935",
      divId: "adobe-dc-view",
    });
    // }

    adobeDCView.previewFile(
      {
        content: { location: { url: "cv.pdf" } },
        metaData: { fileName: "stanimir_nikolov_cv.pdf" },
      },
      { embedMode: "IN_LINE" }
    );
  }

  useEffect(() => {
    // If AdobeDC exists -> run the viewer
    // Else -> fetch it and wait for the object to be ready. Then run the view
    if (AdobeDCReady()) {
      initPdfViewer();
    } else {
      const script = document.createElement("script");
      script.crossOrigin = "anonymous";
      script.src = "https://documentcloud.adobe.com/view-sdk/main.js";
      document.head.insertAdjacentElement("beforeend", script);

      script.onload = () => {
        if (!AdobeDCReady()) {
          let interval = setInterval(() => {
            if (AdobeDCReady) {
              clearInterval(interval);
              initPdfViewer();
            }
          }, 250);
        }
      };
    }
  }, []);
  return (
    <div
      className='mx-12 shadow-lg  shadow-slate-300 rounded-lg overflow-hidden'
      id='adobe-dc-view'
    ></div>
  );
}
