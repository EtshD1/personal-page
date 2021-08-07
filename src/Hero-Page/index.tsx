export const Hero = () => {
  return (<div id="hero">
    <header className="container">
      <div className="logo">
        &lt;devetsh&gt;
      </div>
    </header>
    <div className="content container">
      <h1>Hi, my name is</h1>
      <h1 className="name">Etsh</h1>
      <h2>I develop and design user interfaces for the web.</h2>
    </div>
    <div>
      <button>Know More</button>
    </div>
    <div className="nextSection">
      <svg width="72" height="23" viewBox="0 0 72 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999993 1L36 21L71 1" stroke="#2D0B0B" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  </div>);
}

export default Hero;