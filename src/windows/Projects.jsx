import React, { use } from 'react'
import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '@components/WindowControls';
import { EXPLORER_PROJECTS } from '@constants';
import { useEffect, useState } from 'react';
import useWindowStore from '@store/window';

const Projects = () => {
  const focusedWindowKey = useWindowStore((state) => state.focusedWindowKey);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const switchProject = (e) => {
      if (focusedWindowKey !== "explorer") return;
      const maxLength = EXPLORER_PROJECTS.length - 1;
      switch (e.key.toLowerCase()) {
        case "arrowright":
        case "d":
        case "l":
          setIndex((prev) => prev === maxLength ? 0 : prev + 1);
          break;
        case "arrowleft":
        case "a":
        case "j":
          setIndex((prev) => prev === 0 ? maxLength : prev - 1);
          break;
      }
    };
    window.addEventListener("keydown", switchProject);
    return () => window.removeEventListener("keydown", switchProject);
  }, [focusedWindowKey]);
  const project = EXPLORER_PROJECTS[index];
  return (
    <>
        <div className="window-header">
            <WindowControls target="explorer" />
            <h2>Projects</h2>
        </div>
        <div className="content">
            <div className="search font-l text-xs text-white">Address: <div>@ https://www.therealsam.com/{project.id}</div></div>
            <p className="font-l-bold text-2xl mt-2 underline"><a href={project.url}>{project.name}</a></p>
            <p className="font-l text-base mb-2">{project.description}</p>
            <img src={`/images/${project.id}.avif`} alt={project.name} />
        </div>
    </>
  )
}

const ProjectsWindow = WindowWrapper(Projects, 'explorer');

export default ProjectsWindow;