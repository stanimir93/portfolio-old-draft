import "./home.css";

export default function Home() {
  return (
    <main className='text-neutral-800'>
      <section className='w-full max-w-screen-xl '>
        <div
          className='
          grid grid-cols-12 
          gap-x-12
          gap-y-6
          py-24 
          px-12 lg:px-16 xl:px-20 
          mt-20 mx-16 lg:mx-20 
          rounded-xl 
          shadow-md 
          shadow-slate-300 bg-white lift-up'
        >
          {/* h1 */}
          <div
            className='
            col-span-8 
            h-fit w-min xl:w-fit
            p-0.5 
            mb-8 lg:mb-12
            rounded-lg 
            bg-gradient-to-r from-slate-700 to-slate-900 '
          >
            <h1
              className='
              text-5xl lg:text-6xl  
              px-3 py-4
              font-extrabold 
              rounded-lg 
              bg-white mix-blend-lighten '
            >
              STANIMIR NIKOLOV
            </h1>
          </div>

          {/* img */}
          <img
            className='
            col-span-4
            row-span-3
            lg:justify-self-end
            h-64
            rounded-xl'
            src='./images/profile.webp'
            alt='profile_photo'
          ></img>

          {/* h3 */}
          <div className='col-span-8 w-fit'>
            <h3
              className='
            px-4 py-0.5
            text-2xl font-bold select-none
            rounded-lg 
            bg-gradient-to-r to-slate-900 from-slate-700 text-slate-100'
            >
              WEB&nbsp;DEVELOPER
            </h3>
          </div>

          {/* h6 */}
          <div
            className='
            col-span-8  
            w-fit'
          >
            <h6 className='text-lg text-slate-800'>
              JavaScript, CSS, HTML, React, Node, Express, SQL
            </h6>
          </div>
        </div>
      </section>

      {/* About me */}
      <section className='clear-both text-lg '>
        <div
          className='
          max-w-4xl rounded-xl 
          py-14 px-12 
          mt-24 mx-16 
        
          shadow-md Íshadow-slate-300 bg-white 
          lift-up'
          id='about-me'
        >
          <h3
            className='
          text-3xl 
          font-extrabold mb-8 
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
