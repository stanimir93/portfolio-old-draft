import './home.css';

export default function Home() {
    return (
        <main>
            <section className='w-full max-w-screen-lg '>
                
                <div className='bg-white rounded py-28 px-16 mt-24 shadow-md shadow-slate-300 '>

                 
                      <img className=' rounded  float-left md:float-right h-56 rounded' src='./images/profile.webp' alt='profile_photo'></img>
           
                <h1 className='text-5xl font-bold mb-12'>STANIMIR NIKOLOV</h1> 
                <h3 className='text-3xl font-semibold mb-4'>Web Developer</h3>
                <h6 className='text-lg'>JavaScript, CSS, HTML, React, Node, Express, SQL</h6>
                <div className='clear-both'></div>
                </div>
            </section>
            <section className='clear-both '>
                <div className='shadow-md shadow-slate-300 max-w-4xl bg-white p-12 mt-24 rounded' id='about-me'>
                    <h3 className='text-3xl font-semibold'>
                        <a href='#about-me'>About Me</a>
                    </h3>
                    <p className='my-4 text-lg'>
                        My background is in Sport and Exercise Science. In my early twenties, I was involved in coaching
                        jobs and research projects of various kinds. I worked for sport centres and assisted in
                        university laboratories. Then, after graduation, I had some other jobs, such as hospitality,
                        administration and management.
                    </p>
                    <p className='my-4 text-lg'>
                        However, I have always had interest in technology, and in my mid-twenties I thought that a job
                        in this field would be fun, well-paid and worth focusing on. Therefore, I decided to pursue a
                        new career.
                    </p>
                    <p className='my-4 text-lg'>
                        I started using my free time for reading articles and watching courses on programming. I got
                        mostly interested in web and app development. As a result, I decided to focus primarily on
                        JavaScript and its accompanying technologies. Over time I learnt to code websites using plain
                        code, and later pick libraries and frameworks.
                    </p>
                </div>
            </section>
        </main>
    );
}
