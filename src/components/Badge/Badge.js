import './badge.css';

export default function Badge(props) {
    const tools = {
        javascript: ['#FDE047', '#111827'],
        react: ['#222', '#00d8ff'],
        node: ['#90c53f', '#46483d'],
        express: ['#F1F5F9', '#1C1917'],
        html: ['#DC2626', '#fff'],
        css: ['#2563EB', '#fff'],
        sql: [null, null],
        sequelize: ['#F1F5F9', '#0284C7'],
        bootstrap: ['#9333EA', '#fff'],
        tailwind: ['#7DD3FC', null],
        sqlite: ['#F1F5F9', '#0C4A6E'],
    };

    const item = props.tool.toLowerCase();

    const background = tools[item]?.[0] || '#CBD5E1';
    const text = tools[item]?.[1] || '#0F172A';
    // const border =

    return (
        <span
            className='px-3 py-2 mr-3 rounded-xl transition opacity-80 group-hover:opacity-100 cursor-default'
            key={Date.now() + props.tool}
            style={{ backgroundColor: background, color: text }}
        >
            {props.tool}
        </span>
    );
}
