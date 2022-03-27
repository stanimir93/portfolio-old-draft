import './home.css';

export default function Home() {
    return (
        <main>
            <section className='w-full max-w-screen-xl p-20'>
                <img className='float-left md:float-right h-56' src='./images/profile.webp' alt='profile_photo'></img>
                <h1 className='text-5xl font-bold mb-12'>STANIMIR NIKOLOV</h1>
                <h3 className='text-3xl font-semibold mb-4'>Web Developer</h3>
                <h6 className='text-lg'>JavaScript, CSS, HTML, React, Node, Express, SQL</h6>
            </section>
            <section className='clear-both p-16 pb-0'>
                <div className='shadow-md max-w-4xl bg-white p-10'>
                    <h3 className='text-3xl font-semibold'>About Me</h3>
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
