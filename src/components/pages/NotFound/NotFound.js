import "./notfound.css";
import CSSClasses from "../../../css-classes";

export default function NotFound() {
  return (
    <main className={`${CSSClasses.main}`}>
      <section className={`${CSSClasses.box} `}>
        <h2 className={`${CSSClasses.headingColor} ${CSSClasses.h2Size}`}>
          PAGE NOT FOUND
        </h2>
        <p>The page you are looking for does not exist.</p>
      </section>
    </main>
  );
}
