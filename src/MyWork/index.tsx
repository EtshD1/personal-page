import images from "../images";
import Showcase from "./Showcase";

const MyWork = () => {
  return (<div id="my-work" className="container">
    <h1>My Work</h1>
    <Showcase />
    <div className="certificateLink">
      <button>View my Certificates <img src={images.Certificate} alt="" /></button>
    </div>
    <div className="nextSection">
      <svg width="72" height="23" viewBox="0 0 72 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999993 1L36 21L71 1" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  </div>);
}

export default MyWork;