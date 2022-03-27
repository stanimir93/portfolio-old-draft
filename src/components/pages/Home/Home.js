import './home.css';

export default function Home() {
    return (
        <main>
            <section className='w-full max-w-7xl p-20'>
                <img className='float-left md:float-right h-56' src='./images/profile.webp' alt='profile_photo'></img>
                <h1 className='text-5xl font-semibold mb-9'>STANIMIR NIKOLOV</h1>
                <h3 className='text-3xl font-semibold mb-3'>Web Developer</h3>
                <h6 className='text-xl'>JavaScript, CSS, HTML, React, Node, Express, SQL</h6>
            </section>
            <section className='clear-both max-w-4xl py-16'>
                <div>
                    <h3 className='text-2xl font-semibold'>About Me</h3>
                    <p className='py-2'>
                        My background is in Sport and Exercise Science. In my early twenties, I was involved in coaching
                        jobs and research projects of various kinds. I worked for sport centres and assisted in
                        university laboratories. Then, after graduation, I had some other jobs, such as hospitality,
                        administration and management.
                    </p>
                    <p className='py-2'>
                        However, I have always had interest in technology, and in my mid-twenties I thought that a job
                        in this field would be fun, well-paid and worth focusing on. Therefore, I decided to pursue a
                        new career.
                    </p>
                    <p className='py-2'>
                        I started using my free time to reading documentations and learn how to code. I got mostly
                        interested in web and app development. As a result, I focused primarily on JavaScript and its
                        accompanying technologies. Over time I learnt to code websites using plain code, and later pick
                        libraries and frameworks.
                    </p>
                </div>
            </section>
        </main>
    );
}
