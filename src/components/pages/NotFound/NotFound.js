import "./notfound.css";
import PageHeading from "../../PageHeading/PageHeading";

export default function NotFound() {
  return (
    <main className='text-neutral-800'>
      <PageHeading title='PAGE NOT FOUND' />
      <section
        className='
                py-14 px-12 
                rounded-lg shadow 
                text-lg font-mono 
                bg-white 
                lift-up'
      >
        <p>The page you are looking for does not exist.</p>
      </section>
    </main>
  );
}
