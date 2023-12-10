export default function Header({Linkedin, Github, Resume}) {
  return (
    <div className="justify-center items-center bg-stone-950 self-center flex w-[479px] max-w-full flex-col px-16 py-5 rounded-[59px] max-md:px-5">
      <div className="flex items-stretch justify-between gap-5 max-md:justify-center">
        <div className="text-white text-xl">
          <a href={Linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brown">Linkedin</a>
        </div>
        <div className="text-white text-xl">
          <a href={Github} target="_blank" rel="noopener noreferrer" className="hover:text-brown">Github</a>
        </div>
        <div className="text-white text-xl whitespace-nowrap">
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="hover:text-brown">Resume</a>
        </div>
      </div>
    </div>
  );
}