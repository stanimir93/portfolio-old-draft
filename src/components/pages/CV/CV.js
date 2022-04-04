import "./cv.css";
import CVHeading from "./CVHeading/CVHeading";
import PDF from "./PDF/PDF";
import CSSClasses from "../../../css-classes";

export default function CV() {
  return (
    <main className={`${CSSClasses.main}`}>
      <CVHeading />
      <PDF />
    </main>
  );
}
