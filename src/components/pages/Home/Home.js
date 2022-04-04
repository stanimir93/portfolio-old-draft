import "./home.css";
import CSSClasses from "../../../css-classes";

export default function Home() {
  return (
    <main className={`${CSSClasses.main}`} id='homepage'>
      <section className='w-full max-w-7xl '>
        <div
          className={`
          ${CSSClasses.boxColor}
          ${CSSClasses.headingBoxSize}
          grid grid-cols-12
          gap-x-4 gap-y-8 xl:gap-y-6`}
        >
          {/* h1 */}

          <h1
            className={`
              ${CSSClasses.headingColor}
              col-span-8 sm:col-span-8 
              text-4xl xs-heading
              font-bold
             
         `}
          >
            STANIMIR NIKOLOV
          </h1>

          {/* img */}
          <img
            className='
            col-span-4 sm:col-span-4
            lg:justify-self-end
     
            rounded-xl'
            src='./images/profile.webp'
            alt='profile_photo'
            id='passport-photo'
          ></img>

          <div
            className='
                col-span-12 sm:col-span-8 
                '
          >
            {/* h3 */}
            <h3
              className={`
            ${CSSClasses.headingColor}
            text-2xl sm:text-3xl
            mb-3 lg:mb-10
            font-bold
            
            `}
            >
              Web Developer
            </h3>
            {/* h6 */}
            <h6
              className='
              text-base sm:text-lg 
              text-slate-800'
            >
              JavaScript, CSS, HTML, React, Node, Express, SQL
            </h6>
          </div>
        </div>
      </section>

      {/* About me */}

      <section>
        <div
          className={`
          ${CSSClasses.boxColor} 
          ${CSSClasses.basicBoxSize} 
          max-w-4xl `}
          id='about-me'
        >
          <h3 className={`${CSSClasses.headingColor} ${CSSClasses.h3Size} `}>
            <a href='#about-me'>ABOUT ME</a>
          </h3>
          <p className='mt-4 '>
            My background is in Sport and Exercise Science. In my early
            twenties, I was involved in coaching jobs and research projects of
            various kinds. I worked for sport centres and assisted in university
            laboratories. Then, after graduation, I had some other jobs, such as
            hospitality, administration and management.
          </p>
          <p className='mt-4 '>
            However, I have always had interest in technology, and in my
            mid-twenties I thought that a job in this field would be fun,
            well-paid and worth focusing on. Therefore, I decided to pursue a
            new career.
          </p>
          <p className='mt-4 '>
            I started using my free time for reading articles and watching
            courses on programming. I got mostly interested in web and app
            development. As a result, I decided to focus primarily on JavaScript
            and its accompanying technologies. Over time I learnt to code
            websites using plain code, and later picked libraries and
            frameworks.
          </p>
        </div>
      </section>
    </main>
  );
}
