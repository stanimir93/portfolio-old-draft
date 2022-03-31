import "./project.css";
import Badge from "../Badge/Badge";
import { useEffect } from "react";

export default function Project(props) {
  const title = props.project.title;
  const description = props.project.description;
  const technicalDetails = props.project.technical_details;
  const image = props.project.image;
  const url = props.project.url;
  const tools = props.project.tools;
  let cardBodyWidth = 0;

  // calculate size of card body - used to give same size as min height and smoothen animation of details dropdown
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (cardBodyWidth !== entry.contentRect.width) {
        cardBodyWidth = entry.contentRect.width;
        document.querySelectorAll(".card-body").forEach(elem => {
          let height = elem.clientHeight;
          elem.style.minHeight = height + "px";
        });
      }
    }
  });
  useEffect(() => resizeObserver.observe(document.querySelector(".project-card")), []);

  return (
    <div
      className=' project-card px-10 py-12 grid grid-cols-12 group bg-white shadow-md rounded-xl my-8 overflow-hidden  w-full  max-w-5xl'
      key={title}
      id={title}
    >
      {/* Body */}
      <div className='card-body col-span-8 text-lg pr-10 '>
        <h4 className='text-3xl font-bold mb-8 text-neutral-900'>
          <a href={`#${title}`}>{title}</a>
        </h4>
        <div className='leading-normal' key={`a${Date.now()}`}>
          {description.map(item => (
            <p key={item.slice(0, 12)}>{item}</p>
          ))}
        </div>

        {/* Details */}

        <div className='dropdown-container dropdown-hidden py-10 overflow-hidden'>
          <button
            className='font-bold  text-lg font-mono pr-4 py-2 text-neutral-900 bg-blend-normal cursor-pointer '
            onClick={ev => {
              const container = ev.target.closest(".dropdown-container");
              if (container.classList.contains("dropdown-hidden")) {
                container.classList.remove("dropdown-hidden");
              } else {
                container.classList.add("dropdown-hiding");
                setTimeout(() => {
                  container.classList.remove("dropdown-hiding");
                  container.classList.add("dropdown-hidden");
                }, 450);
              }
            }}
          >
            TECHNICAL DETAILS
          </button>

          <ul
            className='bg-slate-100 px-10 pb-12 pt-10 mb-4 text-neutral-900 rounded-xl transition leading-normal'
            key={`b${Date.now()}`}
          >
            {technicalDetails.map(item => (
              <li className='list-disc list-inside mt-6 ' key={item.slice(0, 12)}>
                <span className='ml-1 text-neutral-600'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image */}
      <div
        className=' bg-center bg-no-repeat bg-cover relative col-span-4 row-span-2  rounded-xl'
        style={{ backgroundImage: `url("images/${image}")` }}
      >
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
          <a
            className='p-3 bg-green-500 text-white rounded-xl px-7 py-3 text-sm font-semibold'
            href={`https://${url}`}
            target='_blank'
            rel='noreferrer'
          >
            VISIT WEBSITE
          </a>
        </div>
      </div>
      {/* Badges */}
      <div className='col-span-8 text-sm mt-4 font-bold font-mono' key={`c${Date.now()}`}>
        {tools.map(tool => (
          // <span className='mr-2 p-1 text-base' key={tool.slice(0, 12)}>
          //     {tool}
          // </span>
          <Badge key={`${title}${tool}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}
