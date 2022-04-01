import './projects.css';
import { useState, useEffect } from 'react';

import PageHeading from '../../PageHeading/PageHeading';
import Project from '../../Project/Project';

export default function Projects() {
    const [projectsData, setProjectsData] = useState(window.fetchedDataForProjectCards || null);
    window.fetchedDataForProjectCards = window.fetchedDataForProjectCards || null;

    // fetch data and update state
    useEffect(() => {
        if (!window.fetchedDataForProjectCards) {
            fetch('projects.json', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    window.fetchedDataForProjectCards = data;
                    setProjectsData(window.fetchedDataForProjectCards);
                })
                .catch(console.log);
        }
    }, []);

    return (
        <main className='text-neutral-800'>
            <PageHeading title='MY PROJECTS' />
            <section className='w-full flex flex-col items-center'>
                {projectsData
                    ? Object.keys(projectsData).map(project => (
                          <Project key={project} project={projectsData[project]} />
                      ))
                    : null}
            </section>
        </main>
    );
}
