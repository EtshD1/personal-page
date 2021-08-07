import images from "../images";

const MyWork = () => {
  return (<div id="my-work" className="container">
    <h1>My Work</h1>
    <div className="showcase">
      <div><img src={images.Site.Site1} alt="" /></div>
      <div><img src={images.Site.Site2} alt="" /></div>
      <div><img src={images.Site.Site3} alt="" /></div>
      <div></div>
    </div>
  </div>);
}

export default MyWork;