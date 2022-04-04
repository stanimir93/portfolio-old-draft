import "./details.css";
import CSSClasses from "../../../../css-classes";

export default function Details(props) {
  const technicalDetails = props.technicalDetails;
  return (
    <div className='collapse-container collapse-hidden text-text'>
      <button
        className={`
          ${CSSClasses.headingColor}
          font-bold font-mono text-base   
          cursor-pointer
          `}
        // Animate drop collapse box
        onClick={ev => {
          const container = ev.target.closest(".collapse-container");
          const cardBody = ev.target.closest(".card-body");
          if (container.classList.contains("collapse-hidden")) {
            container.dataset.height = Number(cardBody.clientHeight) + 55;

            container.classList.add("collapse-shown");
            container.classList.remove("collapse-hidden");
            setTimeout(() => {
              cardBody.style.minHeight = container.dataset.height + "px";
            }, 200);
          } else {
            container.classList.add("collapse-hiding");
            container.classList.remove("collapse-shown");
            container.dataset.height = Number(container.dataset.height) - 55;
            cardBody.style.minHeight = container.dataset.height + "px";

            setTimeout(() => {
              container.classList.add("collapse-hidden");
              container.classList.remove("collapse-hiding");
            }, 400);
          }
        }}
      >
        <i class='bi bi-info-square-fill mr-2'></i>
        Technical Details
      </button>

      <ul
        className='
          tech-details 
          z-10 
          px-8 pb-6 pt-20
          bg-slate-100  
        
          shadow shadow-slate-300
          rounded-xl 
          transition 
          leading-normal'
        key={`b${Date.now()}`}
      >
        {technicalDetails.map(item => (
          <li className='list-none list-inside mb-4' key={item.slice(0, 12)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
