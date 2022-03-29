import './project.css';
import Badge from '../Badge/Badge';

export default function Project(props) {
    const title = props.project.title;
    const description = props.project.description;
    const technicalDetails = props.project.technical_details;
    const image = props.project.image;
    const url = props.project.url;
    const tools = props.project.tools;
    return (
        <div
            className=' grid grid-cols-12  bg-white shadow-md rounded my-8 overflow-hidden text-lg w-full  max-w-4xl'
            key={title}
            id={title}
        >
            {/* Body */}
            <div className='p-10 col-span-8'>
                <h4 className='text-2xl font-semibold mb-4'>
                    <a href={`#${title}`}>{title}</a>
                </h4>
                <div key={`a${Date.now()}`}>
                    {description.map(p => (
                        <p key={p.slice(0, 12)}>{p}</p>
                    ))}
                </div>

                <details className='mt-4'>
                    <summary className=''>
                        <span className='font-semibold cursor-pointer underline underline-offset-2 text-rose-500 decoration-sky-400'>
                            Technical Details
                        </span>
                    </summary>
                    {/* Dropdown */}
                    <div key={`b${Date.now()}`}>
                        {technicalDetails.map(p => (
                            <p key={p.slice(0, 12)}>{p}</p>
                        ))}
                    </div>
                </details>

                {/* Badges */}
                <div className='text-sm mt-4 font-semibold' key={`c${Date.now()}`}>
                    {tools.map(tool => (
                        // <span className='mr-2 p-1 text-base' key={tool.slice(0, 12)}>
                        //     {tool}
                        // </span>
                        <Badge key={`${title}${tool}`} tool={tool} />
                    ))}
                </div>
            </div>
            {/* Image */}
            <div
                className=' min-h-80 bg-center bg-no-repeat bg-cover relative col-span-4'
                style={{ backgroundImage: `url("images/${image}")` }}
            >
                <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                    <a
                        className='p-3 bg-green-500 text-white rounded px-7 py-3 text-sm font-semibold'
                        href={`https://${url}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        VISIT WEBSITE
                    </a>
                </div>
            </div>
        </div>
    );
}
