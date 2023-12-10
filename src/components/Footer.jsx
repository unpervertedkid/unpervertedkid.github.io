export default function Footer({ Linkedin, Github, Resume }) {
  return (
    <>
      <div className="items-stretch self-center flex justify-between gap-5 mt-20 pb-10 max-md:justify-center max-md:mt-10">
        <div className="text-black text-xl whitespace-nowrap">
          <a
            href={Linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown"
          >
            Linkedin
          </a>
        </div>
        <div className="text-black text-xl">
          <a
            href={Github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown"
          >
            Github
          </a>
        </div>
        <div className="text-black text-xl whitespace-nowrap">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
