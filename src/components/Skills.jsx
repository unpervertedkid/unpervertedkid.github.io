export default function Skills(props) {
  return (
<div className="bg-stone-900 self-stretch flex w-full flex-col justify-center items-center mt-36 px-16 py-12 rounded-[40px] lg:rounded-[250px_0px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1125px] flex-col mt-28 mb-48 max-md:max-w-full max-md:my-10">
        <div className="text-white text-7xl font-extrabold self-center max-w-[745px] max-md:max-w-full max-md:text-4xl">
          Here’s what you can expect from me....
        </div>
        <div className="self-stretch mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/Illustration1.svg"
                className="aspect-[1.01] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 hidden sm:block"
              />
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-3 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-opacity-80 text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                  Quick Learner
                </div>
                <div className="text-white text-3xl mt-10 max-md:max-w-full">
                  I bring a fresh perspective and a growth mindset, eager to
                  learn new skills, technologies, and domains, and adapt to
                  changing requirements and environments.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-3 max-md:mt-10">
                <div className="text-white text-opacity-80 text-6xl font-bold max-md:text-4xl">
                  Dot Connector
                </div>
                <div className="text-white text-3xl mt-7">
                  I join your team with conviction and openness, ready to listen
                  to your needs, challenge your assumptions, and reconnect the
                  dots to find new opportunities and solutions.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/Illustration2.svg"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 hidden sm:block"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/Illustration3.svg"
                className="aspect-[1.01] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 hidden sm:block"
              />
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-3 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-opacity-80 text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                  Detail and Perfomance Oriented
                </div>
                <div className="text-white text-3xl mt-10 max-md:max-w-full">
                  I ensure quality and efficiency in every aspect of my work,
                  from design to implementation to testing, while balancing time
                  and other constraints. I strive to optimize the performance of
                  my code, systems, and products.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-3 max-md:mt-10">
                <div className="text-white text-opacity-80 text-6xl font-bold max-md:text-4xl">
                  Complex Problem Solver
                </div>
                <div className="text-white text-3xl mt-7">
                  I use creativity and logic to find optimal solutions to
                  problems that require complex and challenging thinking. I
                  enjoy exploring new possibilities and pushing the boundaries
                  of what is possible.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/Illustration4.svg"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 hidden sm:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}