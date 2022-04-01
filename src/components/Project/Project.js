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
      project-card 
      grid grid-cols-12 
      p-10 my-5  
      w-full max-w-4xl 
      group 
      overflow-hidden
      rounded-xl shadow-md 
      bg-white  '
      key={title}
      id={title}
    >
      {/* Body */}
      <div className='card-body col-span-8 text-lg pr-10 bg-white'>
        <h4 className='text-2xl font-extrabold mb-6 text-neutral-900'>
          <a href={`#${title}`}>{title}</a>
        </h4>
        <div className='leading-normal  bg-white' key={`a${Date.now()}`}>
          {description.map(item => (
            <p key={item.slice(0, 12)}>{item}</p>
          ))}
        </div>

        {/* Details */}

        <div className='collapse-container collapse-hidden  '>
          <button
            className='
            font-bold text-base font-mono underline 
            text-neutral-900 bg-blend-normal 
            cursor-pointer'
            onClick={ev => {
              const container = ev.target.closest(".collapse-container");
              const cardBody = ev.target.closest(".card-body");
              if (container.classList.contains("collapse-hidden")) {
                container.dataset.height = Number(cardBody.clientHeight) + 48;

                container.classList.add("collapse-shown");
                container.classList.remove("collapse-hidden");
                setTimeout(() => {
                  cardBody.style.minHeight = container.dataset.height + "px";
                }, 200);
              } else {
                container.classList.add("collapse-hiding");
                container.classList.remove("collapse-shown");
                container.dataset.height =
                  Number(container.dataset.height) - 48;
                cardBody.style.minHeight = container.dataset.height + "px";

                setTimeout(() => {
                  container.classList.add("collapse-hidden");
                  container.classList.remove("collapse-hiding");
                }, 400);
              }
            }}
          >
            Technical Details
          </button>

          <ul
            className='
            tech-details 
            z-10 
            px-10 pb-8 pt-16
            bg-slate-100 text-neutral-900 
            rounded-xl 
            transition 
            leading-normal'
            key={`b${Date.now()}`}
          >
            {technicalDetails.map(item => (
              <li
                className='list-disc list-inside mb-4'
                key={item.slice(0, 12)}
              >
                <span className='ml-1 '>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image */}
      <div
        className='
        img-container 
        col-span-4 row-span-2 
        bg-center bg-no-repeat bg-cover
        relative 
        rounded-xl 
        shadow shadow-slate-300'
        style={{ backgroundImage: `url("images/${image}")` }}
      >
        <div
          className='
          flex justify-center items-center
          absolute top-0 bottom-0 left-0 right-0 opacity-0 
          rounded-lg 
          hover:opacity-100 bg-slate-100ß'
        >
          <a
            className='
            p-3 px-6 py-3 
            rounded-xl  
            transition  
            active:opacity-80
            text-sm font-semibold 
            bg-gradient-to-r to-slate-900 from-slate-700 text-white '
            href={`https://${url}`}
            target='_blank'
            rel='noreferrer'
          >
            VISIT WEBSITE
          </a>
        </div>
      </div>
      {/* Badges */}
      <div
        className='col-span-8 text-sm mt-4 font-bold font-mono select-none '
        key={`c${Date.now()}`}
      >
        {tools.map(tool => (
          <Badge key={`${title}${tool}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}
