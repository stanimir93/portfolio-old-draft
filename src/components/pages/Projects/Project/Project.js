import "./project.css";
import Badge from "../Badge/Badge";
import Details from "../Details/Details";
import ProjectImg from "../ProjectImg/ProjectImg";
import { useEffect } from "react";
import CSSClasses from "../../../../css-classes";

export default function Project(props) {
  const title = props.project.title;
  const description = props.project.description;
  const technicalDetails = props.project.technical_details;
  const image = props.project.image;
  const url = props.project.url;
  const tools = props.project.tools;
  let cardBodyWidth = 0;

  // calculate size of card body - used to give same size as min height and smoothen animation of details collapse
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (cardBodyWidth !== entry.contentRect.width) {
        cardBodyWidth = entry.contentRect.width;
        document.querySelectorAll(".card-body").forEach(elem => {
          let height = elem.clientHeight;
          if (!elem.querySelector(".collapse-showing")) {
            elem.style.minHeight = height + "px}";
          }
        });
      }
    }
  });
  useEffect(
    () => resizeObserver.observe(document.querySelector(".project-card")),
    []
  );

  return (
    <div
      className=' 
      align-self-center
      justify-self-center
      text-base
      project-card 
      grid grid-cols-12 
      p-8  
      w-full max-w-4xl 
      group 
      overflow-hidden
      rounded-xl shadow-md 
      bg-white '
      key={title}
      id={title}
    >
      {/* Body - heading, description details */}
      <div
        className='
      card-body 
      md:col-span-8 
      md:pr-10 
      col-span-12
      bg-white'
      >
        {/* Heading */}
        <h4
          className={`
        text-slate-700
        text-2xl font-bold 
        mb-6 md:mb-6
        text-center
        `}
        >
          <a href={`#${title}`}>{title}</a>
        </h4>

        {/* Description */}
        <div
          className='
        leading-normal  
        bg-white
        '
          key={`a${Date.now()}`}
        >
          {description.map(item => (
            <p key={item.slice(0, 12)}>{item}</p>
          ))}
        </div>

        {/* Details */}
        <Details technicalDetails={technicalDetails} />
      </div>
      {/* <hr
        className={`
            
            mt-10
            mb-4
            bg-slate-200
            
            border-0
            h-0.5
            col-span-12
            rounded-lg 
      
        `}
      /> */}
      {/* Image */}
      <ProjectImg
        classes={`
        col-span-6 sm:col-span-7
        md:col-span-4 
        md:row-span-2 
        row-start-2
        col-start-7 sm:col-start-6
        shadow shadow-slate-300
        `}
        image={image}
        technicalDetails={technicalDetails}
      />

      {/* Badges */}
      <div
        className='
        col-span-6 sm:col-span-5
        row-start-2
        md:col-span-8 
        grid
        content-start sm:content-center
        gap-2
        mr-4
        text-xs 
        font-bold 
        font-mono 
        select-none '
        key={`c${Date.now()}`}
      >
        {tools.map(tool => (
          <Badge key={`${title}${tool}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}
