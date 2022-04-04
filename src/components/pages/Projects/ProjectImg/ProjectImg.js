import "./projectimg.css";

export default function ProjectImg(props) {
  return (
    <div
      className={`
    ${props.classes} 
    img-container 
    bg-center bg-no-repeat bg-cover
    relative 
    rounded-xl 
   
    `}
      style={{ backgroundImage: `url("images/${props.image}")` }}
    >
      <div
        className='
        view-site-container
        hide-link
        flex justify-center items-center
        absolute top-0 bottom-0 left-0 right-0 
        opacity-0
        hover:flex
        rounded-lg 
        hover:opacity-100'
        // Hide link if not hovered over the image.
        // This prevents accidental taps on the hidden button when clicking on mobile
        onMouseEnter={ev =>
          setTimeout(() => {
            ev.target.classList.remove("hide-link");
          }, 0)
        }
        onMouseLeave={ev => ev.target.classList.add("hide-link")}
      >
        <a
          className=' 
          px-3 md:px-6 
          py-3 
          rounded-xl  
          transition  
          active:opacity-80
          text-sm font-semibold 
          bg-gradient-to-r to-slate-900 from-slate-700 text-white '
          href={`https://${props.url}`}
          target='_blank'
          rel='noreferrer'
        >
          VISIT WEBSITE
        </a>
      </div>
    </div>
  );
}
