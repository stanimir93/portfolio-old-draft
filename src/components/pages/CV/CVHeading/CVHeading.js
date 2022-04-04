import "./cvheading.css";
import { useEffect } from "react";
import printJS from "print-js";
import UAParser from "ua-parser-js";
import CSSClasses from "../../../../css-classes";

export default function CVHeading() {
  // Add event listenner for buttons
  // Hide non-functional buttons depending on device and browser
  useEffect(() => {
    hideButtons();

    // print
    document.getElementById("print-cv").addEventListener("click", async () => {
      printJS("cv.pdf");
    });
    // download
    document.getElementById("download-cv").addEventListener("click", () => {
      let a = document.createElement("a");
      a.setAttribute("href", "cv.pdf");
      a.setAttribute("download", "cv.pdf");
      a.click();
    });
    // new window
    document.getElementById("open-cv").addEventListener("click", () => {
      let a = document.createElement("a");
      a.setAttribute("href", "http://localhost:3000/cv.pdf");
      a.setAttribute("target", "_blank");
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
    if (
      (ua.browser !== "Firefox" && ua.os === "Windows") ||
      ua.os === "Linux" ||
      ua.os === "Mac OS"
    )
      return;
    // If desktop and firefox -> hide print
    else if (
      (ua.browser === "Firefox" && ua.os === "Windows") ||
      ua.os === "Linux" ||
      ua.os === "Mac OS"
    ) {
      document.getElementById("print-cv").style.display = "none";
      document.getElementById("open-cv").style.display = "none";
    }
    // If not desktop -> hide print and open
    else if (ua.os !== "Windows" || ua.os !== "Linux" || ua.os !== "Mac OS") {
      document.getElementById("print-cv").style.display = "none";
      document.getElementById("open-cv").style.display = "none";
    }
  }
  return (
    <section
      className={`
      ${CSSClasses.boxColor}
      ${CSSClasses.headingBoxSize}
      max-w-7xl`}
    >
      <h2 className={`${CSSClasses.headingColor} ${CSSClasses.h2Size}`}>CV</h2>

      <div
        className='
        flex justify-center align-center
        w-full sm:w-fit
      text-white font-bold font-xl 
       '
        id='cv-buttons'
      >
        <button
          className=' py-2 w-32 rounded-lg mx-2  font-semibold bg-gradient-to-r  to-green-700 from-green-600 opacity-80 group-hover:opacity-100 active:opacity-80'
          type='button'
          id='download-cv'
        >
          DOWNLOAD
        </button>
        <button
          className=' py-2 w-32 rounded-lg mx-2 font-semibold bg-gradient-to-r to-sky-700 from-sky-600 opacity-80 group-hover:opacity-100 active:opacity-80'
          type='button'
          id='open-cv'
        >
          OPEN
        </button>
        <button
          className=' py-2 w-32 rounded-lg mx-2 font-semibold bg-gradient-to-r to-red-600 from-red-500 opacity-80 group-hover:opacity-100 active:opacity-80'
          type='button'
          id='print-cv'
        >
          PRINT
        </button>
      </div>
    </section>
  );
}
