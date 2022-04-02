import "./cv.css";
import CVHeading from "../../CVHeading/CVHeading.js.js";
import PDF from "../../PDF/PDF";
import CSSClasses from "../../../css-classes/css-classes";

export default function CV() {
  return (
    <main className={`${CSSClasses.main}`}>
      <CVHeading />
      <PDF />
    </main>
  );
}
