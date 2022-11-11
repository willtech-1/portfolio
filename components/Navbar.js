// hooks
import { useState, useEffect, use } from "react";
// import react scroll link
import { Link } from "react-scroll";
// react icon for mobile view
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import useRouter from next router
import { useRouter } from "next/router";

const Navbar = () => {
  // toggle mobile nav state
  const [openNav, setOpenNav] = useState(false);
  // nav shadow state
  const [navShadow, setNavShadow] = useState(false);
  // dynamically navbar background style
  const [navBcg, setNavBcg] = useState("#F4F6F6");
  const [linkColour, setLinkColour] = useState("#1f2837");
  const router = useRouter();

  // useEffect that will run everytime the route changes
  useEffect(() => {
    if (
      router.asPath === "/iTunes" ||
      router.asPath === "/shoppingCart" ||
      router.asPath === "/memoryGame" ||
      router.asPath === "/carDealership"
    ) {
      setNavBcg("transparent");
      setLinkColour("#F4F6F6");
    } else {
      setNavBcg("#F4F6F6");
      setLinkColour("#1f2937");
    }
  }, [router]);

  // toggle nav function
  const handleMenu = () => setOpenNav(!openNav);

  // nav shadow logic
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    //add event listener
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${navBcg}` }}
        className={
          navShadow
            ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-24">

          {/* portfolio nav logo */}
          <Link to="home" smooth={true} duration={1000}>
            <div className="nav-logo">
              <span className="span1">Web</span>
              <span className="span2">Dev</span>
            </div>
          </Link>

          {/* Navbar links with react script smooth scroll */}
          <div>
            <ul className="hidden md:flex">
              <Link to="home" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link to="about" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link to="skills" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link to="projects" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>

            {/* mobile navbar */}
            <div
              style={{ color: `${linkColour}` }}
              onClick={handleMenu}
              className="md:hidden"
            >
              <AiOutlineMenu size={25} />
            </div>
            
          </div>
        </div>


            {/* slide menu for mobile devices */}
            {/* overlay style */}
            <div
              className={
                openNav
                  ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                  : ""
              }
            >

              {/* mobile device menu style slider half way mobile conditional logic*/}
              <div
                className={
                  openNav
                    ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }
              >
                {/* portfolio logo on mobile devices */}
                <div>
                  <div className="flex w-full items-center justify-between">
                    <Link to="home" smooth={true} duration={1000}>
                      <div className="nav-logo">
                        <span className="span1">Web</span>
                        <span className="span2">Dev</span>
                      </div>
                    </Link>

                    {/* close mobile menu button */}
                    <div
                      onClick={handleMenu}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>

                  {/* text */}
                  <div className="border-b border-gray-300 my-4">
                    <p className="w-[85%] md:w-[90%] py-4">
                     Let&apos;s build together.
                    </p>
                  </div>
                </div>

                {/* mobile device links */}
                <div className="py-4 flex flex-col">
                  <ul className="uppercase">
                    <Link to="home" smooth={true} duration={1000}>
                      <li
                        onClick={() => setOpenNav(false)}
                        className="py-4 text-sm"
                      >
                        Home
                      </li>
                    </Link>
                    <Link to="about" smooth={true} duration={1000}>
                      <li
                        onClick={() => setOpenNav(false)}
                        className="py-4 text-sm"
                      >
                        About
                      </li>
                    </Link>
                    <Link to="skills" smooth={true} duration={1000}>
                      <li
                        onClick={() => setOpenNav(false)}
                        className="py-4 text-sm"
                      >
                        Skills
                      </li>
                    </Link>
                    <Link to="projects" smooth={true} duration={1000}>
                      <li
                        onClick={() => setOpenNav(false)}
                        className="py-4 text-sm"
                      >
                        Projects
                      </li>
                    </Link>
                    <Link to="contact" smooth={true} duration={1000}>
                      <li
                        onClick={() => setOpenNav(false)}
                        className="py-4 text-sm"
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>

                  {/* mobile device icons */}
                  <div className="pt-40">
                    <p className="uppercase tracking-widest text-[#5651e5]">
                      Let&#39;s Connect
                    </p>

                    {/* Social Media Icons */}

                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>

                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <MdEmail />
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
       
     

      {/* jsx styling  */}
      <style jsx>
        {`
          .nav-logo {
            justify-self: flex-start;
            font-size: 2rem;
            display: flex;
            align-items: center;
            text-shadow: 2px 2px 2px;
            font-weight: 510;
            cursor: pointer;
          }
          .span1 {
            color: #1f494c;
          }
          .span2 {
            color: #35bfbf;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
