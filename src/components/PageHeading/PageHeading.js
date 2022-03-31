import "./pageheading.css";

export default function PageHeading(props) {
  return <h2 className='text-5xl text-neutral-900 font-bold py-20 '>{props.title}</h2>;
}
