import './notfound.css';
import CSSClasses from '../../../css-classes/css-classes';

export default function NotFound() {
  return (
    <main className='text-neutral-800 px-2'>
      <section className={`${CSSClasses.whiteBox}`}>
        <div className={`${CSSClasses.padeHeadingContainer}`}>
          <h2 className={`${CSSClasses.padeHeading}`}>MY PROJECTS</h2>
        </div>
        <p>The page you are looking for does not exist.</p>
      </section>
    </main>
  );
}
