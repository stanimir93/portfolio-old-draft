import './pageheading.css';

export default function PageHeading(props) {
    return <h2 className='text-4xl font-bold py-20 '>{props.title}</h2>;
}
