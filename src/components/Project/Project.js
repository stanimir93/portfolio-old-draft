import './project.css';

export default function Project(props) {
    const title = props.project.title;
    const description = props.project.description;
    const technicalDetails = props.project.technical_details;
    const image = props.project.image;
    const url = props.project.url;
    const tools = props.project.tools;
    return (
        <div key={title}>
            {/* Body */}
            <h4>{title}</h4>
            <div key={`a${Date.now()}`}>
                {description.map(p => (
                    <p key={p.slice(0, 12)}>{p}</p>
                ))}
            </div>
            <button>Technical Details</button>

            {/* Dropdown */}
            <div key={`b${Date.now()}`}>
                {technicalDetails.map(p => (
                    <p key={p.slice(0, 12)}>{p}</p>
                ))}
            </div>

            {/* Badges */}
            <div key={`c${Date.now()}`}>
                {tools.map(tool => (
                    <span key={tool.slice(0, 12)}>{tool}</span>
                ))}
            </div>

            {/* Image */}
            <img src={`rc={./image/${image}`} alt='project'></img>
            <a href={url}>Open Website</a>
        </div>
    );
}
