import "./projects.css";
import { useState, useEffect } from "react";
import Project from "./Project/Project";
import CSSClasses from "../../../css-classes";

export default function Projects() {
  const [projectsData, setProjectsData] = useState(
    window.fetchedDataForProjectCards || null
  );
  window.fetchedDataForProjectCards = window.fetchedDataForProjectCards || null;

  // fetch data and update state
  useEffect(() => {
    if (!window.fetchedDataForProjectCards) {
      fetch("projects.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
    <main className={`${CSSClasses.main}`}>
      <section
        className={`
                ${CSSClasses.boxColor} 
                ${CSSClasses.headingBoxSize} 
                max-w-7xl `}
      >
        <h2 className={`${CSSClasses.headingColor} ${CSSClasses.h2Size}`}>
          PROJECTS
        </h2>
      </section>

      <section
        className='
      w-full 
      grid 
      gap-y-6
      '
      >
        {projectsData
          ? Object.keys(projectsData).map(project => (
              <Project key={project} project={projectsData[project]} />
            ))
          : null}
      </section>
    </main>
  );
}
