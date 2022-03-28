import './badge.css';

export default function Badge(props) {
    const tools = {
        javascript: ['#FDE047', ''],
        react: ['#222;', '#00d8ff'],
        node: ['#90c53f', '#46483d'],
        express: ['', ''],
        html: ['#EA580C', '#fff'],
        css: ['#2563EB', '#fff'],
        sql: ['', ''],
        sequelize: ['', ''],
        bootstrap: ['#9333EA', '#fff'],
        tailwind: ['#7DD3FC', ''],
    };

    const item = props.title.toLowerCase();

    const background = tools[item][0];
    const text = tools[item][1];

    return <span>{props.title}</span>;
}
