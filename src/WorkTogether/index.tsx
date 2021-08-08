import images from "../images";

const WorkTogether = () => {
  return (<div id="work-together">
    <div className="container">
      <h1>Work with me</h1>
      <h3>Contact me via</h3>
      <div className="contacts">
        <div>
          <img src={images.Upwork} alt="" />
        </div>
        <div>
          <img src={images.Fiverr} alt="" />
        </div>
        <div>
          <img src={images.Email} alt="" />
        </div>
      </div>
    </div>
    <footer className="container">
      <h3>Watch Me Grow</h3>
      <div>GitHub</div>
      <div>LinkedIn</div>
      <div>Dribbble</div>
    </footer>
  </div>);
}

export default WorkTogether