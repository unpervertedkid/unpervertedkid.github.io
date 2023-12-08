export default function Header({Linkedin, Github, Resume}) {
    return(
        <>
        <div className="text-black text-xl whitespace-nowrap">
          <a href={Linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>
        <div className="text-black text-xl">
          <a href={Github} target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className="text-black text-xl whitespace-nowrap">
          <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        </>
    );
}