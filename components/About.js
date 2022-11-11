// import image
import Image from "next/image";
// import react scroll link
import { Link } from "react-scroll";
// import about svg
import aboutImg from "../public/assets/code.svg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-5xl tracking-widest text-[#1A5276]">
            About
          </p>
          <br />

          <p className="py-2 text-gray-600">
            I am Full-stack developer with experience in front-end development
            using technologies such as HTML, CSS, Bootstrap, Javascript and
            React. Backend technologies I have experience working with are
            NodeJS, ExpressJS and MongoDB. I enjoy designing and building
            different web applications from scratch using different web
            technologies.
          </p>
          <br />

          {/* Projects and CV buttons */}
          <Link to="projects" smooth={true} duration={1000}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Projects
            </button>
          </Link>

         
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={aboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
