import './cv.css';
import CVHeading from '../../CVHeading/CVHeading.js.js';
import PDF from '../../PDF/PDF';

export default function CV() {
  return (
    <main className='px-2'>
      <CVHeading />
      <PDF />
    </main>
  );
}
