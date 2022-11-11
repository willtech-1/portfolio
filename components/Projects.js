// import image projects
import autoSetters from "../public/assets/projects/auto-setters.png";
import itunes from "../public/assets/projects/itunes.png";
import memoryGame from "../public/assets/projects/memory-game.png";
import credit from "../public/assets/projects/creditScore.png";
//import project item component
import ProjectItem from "./ProjectItem";

// List of my projects so far
const Projects = () => {
  return (
    <div id="projects" className="w-full pt-24">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-5xl tracking-widest text-[#1A5276]">
          Projects
        </p>
        <br />
        
        <p className="py-4 text-xl tracking-widest uppercase text-[#1A5276]">FEATURED PROJECTS</p>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Car Dealership"
            backgroundImg={autoSetters}
            projectUrl="/carDealership"
            tech="React JS / Contentful CMS"
          />

          <ProjectItem
            title="iTunes App"
            backgroundImg={itunes}
            projectUrl="/iTunes"
            tech="React JS / iTunes API"
          />
        
          <ProjectItem
            title="Memory Game"
            backgroundImg={memoryGame}
            projectUrl="/game"
            tech="React JS"
          />
          <ProjectItem
            title="Credit Score"
            backgroundImg={credit}
            projectUrl="/creditScore"
            tech="React JS"
          />
        </div>

      </div>
    </div>
  );
};

export default Projects;
