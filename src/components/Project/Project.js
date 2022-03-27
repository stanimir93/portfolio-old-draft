import './project.css';

export default function Project(props) {
    const title = props.project.title;
    const description = props.project.description;
    const technicalDetails = props.project.technical_details;
    const image = props.project.image;
    const url = props.project.url;
    const tools = props.project.tools;
    return (
        <div
            className=' grid grid-cols-3  bg-white shadow-md rounded my-8 overflow-hidden text-lg w-full  max-w-4xl'
            key={title}
        >
            {/* Body */}
            <div className='p-8 col-span-2'>
                <h4 className='text-2xl font-semibold'>{title}</h4>
                <div key={`a${Date.now()}`}>
                    {description.map(p => (
                        <p key={p.slice(0, 12)}>{p}</p>
                    ))}
                </div>

                <details>
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
                <div key={`c${Date.now()}`}>
                    {tools.map(tool => (
                        <span className='mx-2 p-1 text-base' key={tool.slice(0, 12)}>
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
            {/* Image */}
            <div
                className=' h-72 bg-center bg-no-repeat bg-cover relative'
                style={{ backgroundImage: `url("images/${image}")` }}
            >
                <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                    <a className='p-3 rounded' href={`https://${url}`} target='_blank' rel='noreferrer'>
                        OPEN
                    </a>
                </div>
            </div>
        </div>
    );
}
