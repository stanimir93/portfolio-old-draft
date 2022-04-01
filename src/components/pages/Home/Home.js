import './home.css';

export default function Home() {
    return (
        <main className='text-neutral-800'>
            <section className='w-full max-w-screen-xl '>
                <div className='bg-white rounded-xl pt-24 px-16 lg:px-20 mt-20 mx-16 lg:mx-20 shadow-md shadow-slate-300 '>
                    {/* <div className='border-4 border-orange-500'> */}
                    <img
                        className=' rounded-xl  float-left md:float-right mb-24 ml-10 h-60'
                        src='./images/profile.webp'
                        alt='profile_photo'
                    ></img>
                    {/* </div> */}

                    <div className='mb-16 w-fit '>
                        <h1 className='text-6xl  font-extrabold rounded-lg px-3 py-4'>STANIMIR NIKOLOV</h1>
                    </div>
                    <div className=' w-fit'>
                        <h6 className='text-3xl text-slate-100 font-bold mb-6 bg-gradient-to-r to-slate-900 from-slate-700 rounded-lg px-4 py-0.5'>
                            WEB&nbsp;DEVELOPER
                        </h6>
                    </div>
                    <div className='mb-6  pb-24 w-fit'>
                        <h6 className='text-lg text-neutral-600'>JavaScript, CSS, HTML, React, Node, Express, SQL</h6>
                    </div>
                    <div className='clear-both'></div>
                </div>
            </section>
            <section className='clear-both text-lg '>
                <div
                    className='shadow-md shadow-slate-300 max-w-4xl bg-white py-14 px-12 mt-24 mx-16 rounded-xl'
                    id='about-me'
                >
                    <h3 className='text-3xl font-extrabold mb-8 text-neutral-900'>
                        <a href='#about-me'>ABOUT ME</a>
                    </h3>
                    <p className='my-4 '>
                        My background is in Sport and Exercise Science. In my early twenties, I was involved in coaching
                        jobs and research projects of various kinds. I worked for sport centres and assisted in
                        university laboratories. Then, after graduation, I had some other jobs, such as hospitality,
                        administration and management.
                    </p>
                    <p className='my-4 '>
                        However, I have always had interest in technology, and in my mid-twenties I thought that a job
                        in this field would be fun, well-paid and worth focusing on. Therefore, I decided to pursue a
                        new career.
                    </p>
                    <p className='my-4 '>
                        I started using my free time for reading articles and watching courses on programming. I got
                        mostly interested in web and app development. As a result, I decided to focus primarily on
                        JavaScript and its accompanying technologies. Over time I learnt to code websites using plain
                        code, and later picked libraries and frameworks.
                    </p>
                </div>
            </section>
        </main>
    );
}
