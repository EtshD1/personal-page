import images from '../images'

const Techs = () => {
  return (<div className="techs">
    <h1 className="container">Technologies</h1>
    <div>
      <div className="tech">
        <img src={images.Angular} alt="" />
      </div>
      <div className="tech">
        <img src={images.Figma} alt="" />
      </div>
      <div className="tech">
        <img src={images.NodeJS} alt="" />
      </div>
      <div className="tech">
        <img src={images.Python} alt="" />
      </div>
      <div className="tech">
        <img src={images.React} alt="" />
      </div>
      <div className="tech">
        <img src={images.TypeScript} alt="" />
      </div>
      <div className="tech">
        <img src={images.XD} alt="" />
      </div>
    </div>
  </div>);
}

export default Techs;