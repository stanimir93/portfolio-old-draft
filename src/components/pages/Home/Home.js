import "./home.css";
import CSSClasses from "../../../css-classes/css-classes";

export default function Home() {
  return (
    <main className={`${CSSClasses.main}`} id='homepage'>
      <section className='w-full max-w-7xl '>
        <div
          className={`${CSSClasses.whiteBox}
          grid grid-cols-12 
          gap-x-6 gap-y-10 xl:gap-y-6`}
        >
          {/* h1 */}
          <div
            className='
            col-span-12 sm:col-span-8 
            sm:mb-8 lg:mb-10
            h-min
            overflow-hidden
            bg-gradient-to-r from-slate-700 to-slate-900 
            text-center'
          >
            <h1
              className='
              font-bold 
              bg-white 
              mix-blend-lighten '
            >
              STANIMIR NIKOLOV
            </h1>
          </div>

          {/* img */}
          <img
            className='
            col-span-5 sm:col-span-4
            sm:row-span-2
            lg:justify-self-end
     
            rounded-xl'
            src='./images/profile.webp'
            alt='profile_photo'
            id='passport-photo'
          ></img>

          {/* h3 */}
          <div
            className='
          col-span-7
           sm:col-span-8 
          w-fit'
          >
            <h3
              className='
            text-2xl sm:text-3xl font-bold 
            rounded-lg 
             text-slate-800'
            >
              WEB&nbsp;DEVELOPER
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
      <section className='text-lg '>
        <div className={`${CSSClasses.whiteBox} max-w-4xl `} id='about-me'>
          <h3
            className='
          text-3xl 
          mb-6 
          font-extrabold 
          text-neutral-900'
          >
            <a href='#about-me'>ABOUT ME</a>
          </h3>
          <p className='my-4 '>
            My background is in Sport and Exercise Science. In my early
            twenties, I was involved in coaching jobs and research projects of
            various kinds. I worked for sport centres and assisted in university
            laboratories. Then, after graduation, I had some other jobs, such as
            hospitality, administration and management.
          </p>
          <p className='my-4 '>
            However, I have always had interest in technology, and in my
            mid-twenties I thought that a job in this field would be fun,
            well-paid and worth focusing on. Therefore, I decided to pursue a
            new career.
          </p>
          <p className='my-4 '>
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
