import './home.css';

export default function Home() {
    return (
        <main>
            <section>
                <h1>STANIMIR NIKOLOV</h1>
                <h5>Web Developer</h5>
                <h6>JavaScript, CSS, HTML, React, Node, Express, SQL</h6>
                <img src='./images/profile.webp' alt='profile_photo' width='100px'></img>
            </section>
            <section>
                <div>
                    <h3>About Me</h3>
                    <p>
                        My background is in Sport and Exercise Science. In my early twenties, I was involved in coaching
                        jobs and research projects of various kinds. I worked for sport centres and assisted in
                        university laboratories. Then, after graduation, I had some other jobs, such as hospitality,
                        administration and management.
                    </p>
                    <p>
                        However, I have always had interest in technology, and in my mid-twenties I thought that a job
                        in this field would be fun, well-paid and worth focusing on. Therefore, I decided to pursue a
                        new career.
                    </p>
                    <p>
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
