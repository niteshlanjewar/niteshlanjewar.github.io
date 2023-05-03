import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div >

      <div  className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
          />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          
          title="Quora Clone"
          des="This project is the clone of quora.com which is a social question-and-answer website"
          src={projectOne}
          git={'https://github.com/Monks09/Quora'}
          deploy={'https://heartfelt-llama-580bb7.netlify.app/login/'}
          tackstack={ 'HTML, CSS, Node.js, Express, MongoDB, React, Redux, Material UI, and JavaScript'}
          />
        <ProjectsCard
          
          title="Nykaa Clone"
          des=" This project is the clone of Nykaa.com which is an Indian e-commerce company"
          src={projectTwo}
          git={'https://github.com/almightycoder4/nykaa-clone'}
          deploy={'https://nyka.netlify.app/'}
          tackstack={ 'HTML, CSS, React, Redux, Material UI, and JavaScript, JSON SERVER'}
          />
        <ProjectsCard
          
          title="GreenHouse Clone"
          des=" This project is the clone of greenhouse.com which provides a recruiting software as a service"
          src={projectThree}
          git={'https://github.com/Ni3deshwal/GreenHouseClone'}
          deploy={'https://greenhouseclone.netlify.app/'}
          tackstack={ 'HTML, CSS, JavaScript'}
          />
          
          <ProjectsCard
          
          title="CALCULATOR"
          des="calculator with all functionality with use react js css"
          src={projectFive}
          git={'https://github.com/niteshlanjewar/Calculator'}
          deploy={'https://calculator1621.netlify.app/'}
          tackstack={ 'React, CSS, JavaScript'}
          />
      </div>
          </div>
    </section>
  );
}

export default Projects