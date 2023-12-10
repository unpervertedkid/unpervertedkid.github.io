import * as React from "react";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Image from "@/components/Image";
import Skills from "@/components/Skills";
import ConnectInvite from "@/components/ConnectInvite";
import Footer from "@/components/Footer";

const Email = "brianelijahsilah@gmail.com";
const Linkedin = "https://www.linkedin.com/in/briansilah/";
const Github = "https://github.com/unpervertedkid";
const Resume = "https://docs.google.com/document/d/1zsrxP9fLozn-pqbv6muNRUILbcF1h36lApBIfJ_pGL0/edit?usp=sharing";

export default function Home(props) {
  return (
    <div className="bg-white flex flex-col pt-6 max-md:px-5">
      <div className="items-stretch self-center flex justify-between gap-5 mt-0 max-md:justify-center max-md:mt-10">
        <Header
          Linkedin={Linkedin}
          Github={Github}
          Resume={Resume}
        />
      </div>
      <Introduction />
      <Image
        src="/Image.png"
        alt={"Brian Silah"}
      />
      <Skills />
      <ConnectInvite
        Email={Email}
      />
      <Footer
        Linkedin={Linkedin}
        Github={Github}
        Resume={Resume}
      />
    </div>
  );
}


