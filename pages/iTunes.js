// import Head from next to customize title and meta description
import Head from "next/head";
// image
import Image from "next/image";
// Link
import Link from "next/link";
// import project image
import itunes from "../public/assets/projects/itunes.png";
// react icons
import { RiRadioButtonFill } from "react-icons/ri";

// itunes project page
const iTunes = () => {
  return (
    <>
      <Head>
        <title>iTunes App Project</title>
        <meta name="description" content="itunes search api." />
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
            src={itunes}
            alt="/"
          />

          {/* overlay text */}
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">iTunes App</h2>
            <h3>React JS / iTunes Seatch Api</h3>
          </div>
        </div>

        {/* project description */}
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className="uppercase tracking-wider text-[#1A5276]">Project</p>
            <h2 className="py-2">Overview</h2>
            <br />
            <p>
              I built this application using the iTunes Search API and ReactJS.
              The user can search for whatever media type of content they want
              to search for, from music to podcast and even music videos of
              their faviourite artists. Users can also create their own favourite
              playlist on the app.
            </p>

            {/* links to github and live code */}
            <a
              href="https://github.com/willtech-1/iTunes"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://mighty-coast-92790.herokuapp.com/"
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
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> iTunes Search API
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

export default iTunes;
