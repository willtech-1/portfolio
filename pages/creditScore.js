// import Head from next to customize title and meta description
import Head from "next/head";
// import image
import Image from "next/image";
// nextjs routing link
import Link from "next/link";
// project image
import score from "../public/assets/projects/creditScore.png";
import { RiRadioButtonFill } from "react-icons/ri";

const creditScore = () => {
  return (
    <>
      <Head>
        <title>Check Credit Score Project</title>
        <meta name="description" content="credit score" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full overflow-hidden">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />

          {/* project background image */}
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={score}
            alt="/"
          />

          {/* overlay text */}
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Credit Score App</h2>
            <h3>ReactJS / JavaScript / CSS / HTML</h3>
          </div>
        </div>

        {/* project description */}
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className="uppercase tracking-wider text-[#1A5276]">Project</p>
            <h2 className="py-2">Overview</h2>

            <br />
            <p>
            I developed this application using mock data. Users need enter a valid South African ID number in order to log into the app and the mock data I used is manipulated using the user&apos;s last name.
            Users can check for their credit score, they can go to their profile, check where do they rank in their area, what loans do they qualify for and affordability calculator to determine how much you could afford to save monthly.
            </p>

            {/* links to github and live code */}
            <a
              href="https://github.com/willtech-1/check-credit"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://willtech-check-credit.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>

          {/* project tech stack */}
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> HTML
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> ReactJS
                </p>
              </div>
            </div>
          </div>

          {/* Back button */}
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default creditScore;
