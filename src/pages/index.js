import * as React from "react";

const Email = "brianelijahsilah@gmail.com";
const Linkedin = "https://www.linkedin.com/in/briansilah/";
const Github = "https://github.com/unpervertedkid";
const Resume = "https://docs.google.com/document/d/1zsrxP9fLozn-pqbv6muNRUILbcF1h36lApBIfJ_pGL0/edit?usp=sharing";

export default function Home(props) {
  return (
    <div className="bg-white flex flex-col pl-20 pr-16 pt-6 max-md:px-5">
      <div className="items-stretch flex justify-between gap-5 self-end max-md:justify-center">
        <div className="text-black text-xl whitespace-nowrap">
          <a href={Linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>
        <div className="text-black text-xl">
          <a href={Github} target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className="text-black text-xl whitespace-nowrap">
          <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      <div className="text-black text-7xl font-extrabold max-w-[523px] ml-40 mt-20 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Hey,
        <br />
        I’m Brian Silah
      </div>
      <div className="text-black text-opacity-70 text-5xl font-extrabold self-center max-w-[693px] ml-20 mt-7 max-md:max-w-full max-md:text-4xl">
        — a curious and passionate software engineer who thrives on finding
        solutions to complex and challenging problems with a collaborative
        mindset.
      </div>
      <img
        loading="lazy"
        src="/Image.png"
        className="aspect-[2.03] object-contain object-center w-full overflow-hidden self-center max-w-[1175px] mt-48 max-md:max-w-full max-md:mt-10"
      />
      <div className="text-black text-7xl font-extrabold max-w-[954px] ml-40 mt-40 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Here’s what you can expect from me....
      </div>
      <div className="items-end border self-center flex w-[954px] max-w-full flex-col mt-28 pl-16 pr-20 py-12 rounded-[40px] border-solid border-black border-opacity-40 max-md:mt-10 max-md:px-5">
        <div className="text-black text-opacity-80 text-4xl font-bold self-stretch max-w-[832px] pb-5 mr-5 max-md:max-w-full max-md:mr-2.5">
          Quick Learner
        </div>
        <div className="text-black text-3xl self-stretch max-w-[774px] mr-5 max-md:max-w-full max-md:mr-2.5">
          I bring a fresh perspective and a growth mindset, eager to learn new
          skills, technologies, and domains, and adapt to changing requirements
          and environments.
        </div>
        <img
          loading="lazy"
          src="/divider.svg"
          className="aspect-[261] object-contain object-center w-full stroke-[1px] stroke-black stroke-opacity-40 overflow-hidden self-stretch mr-5 mt-6 max-md:max-w-full max-md:mr-2.5"
        />
        <div className="text-black text-opacity-80 text-4xl font-bold self-stretch max-w-[832px] pb-5 mr-5 mt-6 max-md:max-w-full max-md:mr-2.5">
          Dot Connector
        </div>
        <div className="text-black text-3xl self-stretch max-w-[774px] mr-5 max-md:max-w-full max-md:mr-2.5">
          I join your team with conviction and openness, ready to listen to your
          needs, challenge your assumptions, and reconnect the dots to find new
          opportunities and solutions.
        </div>
        <img
          loading="lazy"
          src="/divider.svg"
          className="aspect-[261] object-contain object-center w-full stroke-[1px] stroke-black stroke-opacity-40 overflow-hidden self-stretch mr-5 mt-14 max-md:max-w-full max-md:mr-2.5 max-md:mt-10"
        />
        <div className="text-black text-opacity-80 text-4xl font-bold self-stretch max-w-[832px] pb-5 mr-5 mt-6 max-md:max-w-full max-md:mr-2.5">
          Detail and Perfomance Oriented
        </div>
        <div className="text-black text-3xl self-stretch max-w-[774px] mr-5 max-md:max-w-full max-md:mr-2.5">
          I ensure quality and efficiency in every aspect of my work, from
          design to implementation to testing, while balancing time and other
          constraints. I strive to optimize the performance of my code, systems,
          and products.
        </div>
        <img
          loading="lazy"
          src="/divider.svg"
          className="aspect-[261] object-contain object-center w-full stroke-[1px] stroke-black stroke-opacity-40 overflow-hidden self-stretch mr-5 mt-6 max-md:max-w-full max-md:mr-2.5"
        />
        <div className="text-black text-opacity-80 text-4xl font-bold max-w-[832px] pb-5 mt-6 self-start max-md:max-w-full">
          Complex Problem Solver
        </div>
        <div className="text-black text-3xl max-w-[774px] self-start max-md:max-w-full">
          I use creativity and logic to find optimal solutions to problems that
          require complex and challenging thinking. I enjoy exploring new
          possibilities and pushing the boundaries of what is possible.
        </div>
      </div>
      <div className="text-black text-center text-3xl self-center max-w-[466px] mt-32 max-md:max-w-full max-md:mt-10">
        Sounds interesting, 
        <a href={`mailto:${Email}`} className="underline">reach out</a> 
        and lets connect!
      </div>
      <div className="items-stretch self-center flex justify-between gap-5 mt-40 pb-10 max-md:justify-center max-md:mt-10">
        <div className="text-black text-xl whitespace-nowrap">
          <a href={Linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>
        <div className="text-black text-xl">
          <a href={Github} target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className="text-black text-xl whitespace-nowrap">
          <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </div>
  );
}


