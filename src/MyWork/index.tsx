import images from "../images";
import Showcase from "./Showcase";
import Certificates from "./Certificates";
import { useState, useRef } from "react";
import { goto } from "../scrollTo";

const MyWork = () => {
  const [certsIsOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const closeCerts = () => {
    container.current?.parentElement?.classList.remove("withModal");
    setIsOpen(false);
  }

  const openCerts = () => {
    if (!certsIsOpen) {
      container.current?.parentElement?.classList.add("withModal");
      setIsOpen(true);
    }
  }

  return (<div ref={container} id="my-work">
    <div className="container">
      <h1>My Work</h1>
      <Showcase />
      <div className="certificateLink">
        <button onClick={openCerts}>View my Certificates <img src={images.Certificate} alt="" /></button>
      </div>
      {certsIsOpen ? <Certificates close={closeCerts} /> : null}
      <div className="nextSection" onClick={() => goto('work-together')}>
        <svg width="72" height="23" viewBox="0 0 72 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999993 1L36 21L71 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  </div>);
}

export default MyWork;