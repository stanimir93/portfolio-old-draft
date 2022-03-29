import './badge.css';

export default function Badge(props) {
    const tools = {
        javascript: ['#FDE047', '#111827'],
        react: ['#222', '#00d8ff'],
        node: ['#90c53f', '#46483d'],
        express: ['#F8FAFC', '#1C1917'],
        html: ['#EA580C', '#fff'],
        css: ['#2563EB', '#fff'],
        sql: [null, null],
        sequelize: ['#F8FAFC', '#0284C7'],
        bootstrap: ['#9333EA', '#fff'],
        tailwind: ['#7DD3FC', null],
        sqlite: ['#F8FAFC', '#0C4A6E'],
    };

    const item = props.tool.toLowerCase();

    const background = tools[item]?.[0] || '#D1D5DB';
    const text = tools[item]?.[1] || '#334155';
    // const border =

    return (
        <span
            className='px-3 pt-1 pb-1.5 mr-3 rounded-full opacity-90'
            key={Date.now() + props.tool}
            style={{ backgroundColor: background, color: text }}
        >
            {props.tool}
        </span>
    );
}
