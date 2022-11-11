
// link
import Link from "next/link";
// react icons
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// landing component with my details and  bio text
const Hero = () => {
    
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S SOLVE PROBLEMS TOGETHER
          </p>
          <p className="py-4 text-5xl text-gray-800">
            Hi, I&#39;m <span className="text-[#1A5276]">Aphile</span>
          </p>
          <p className="py-2 text-5xl text-gray-800">A Full Stack Developer</p>
          <p className="py-4 text-gray-700 sm:max-w-[70%] m-auto">
          I have a passion for solving problems using technology and creating different complex web applications. Some of my favourite resources for learning are HyperionDev, MDN Web Docs and freeCodeCamp.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/aphilentando/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/willtech-1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <MdEmail />
              </div>
            </Link>
            <a href="../static/assets/Aphile_CV.pdf" target="_blank" rel="noopener noreferrer" download>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

