import "./badge.css";

export default function Badge(props) {
  const tools = {
    javascript: ["#FDE047", "#111827"],
    react: ["#222", "#00d8ff"],
    node: ["#90c53f", "#46483d"],
    express: ["#262626", "#F1F5F9"],
    html: ["#DC2626", "#fff"],
    css: ["#2563EB", "#fff"],
    sql: [null, null],
    sequelize: ["#f1f5f9", "#0284C7"],
    bootstrap: ["#9333EA", "#fff"],
    tailwind: ["#7DD3FC", null],
    sqlite: [, "#0C4A6E"],
    "adobe embed api": ["#b91c1c", "#fff"],
  };

  const item = props.tool.toLowerCase();

  const background = tools[item]?.[0] || "#CBD5E1";
  const text = tools[item]?.[1] || "#1e293b";
  // const border =

  return (
    <span
      className='
      badge
      h-fit
      py-2
      text-center
      rounded-xl 
      whitespace-nowrap
      transition 
      opacity-80 group-hover:opacity-90  group-hover:md:opacity-100 
      cursor-default '
      key={Date.now() + props.tool}
      style={{ backgroundColor: background, color: text }}
    >
      {props.tool}
    </span>
  );
}
