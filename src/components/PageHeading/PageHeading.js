import "./pageheading.css";

export default function PageHeading(props) {
  return (
    <div className='my-16 p-0.5  w-fit bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg lift-up'>
      <h2 className='text-5xl w-fit text-white  font-extrabold  select-none erounded-lg px-3 py-4'>
        {props.title}
      </h2>
    </div>
  );
}
