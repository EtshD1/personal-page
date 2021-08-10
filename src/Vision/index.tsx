import { goto } from "../scrollTo";

const Vision = () => {
  return (<div id="vision">
    <div>
      <div className="container">
        <h1>Vision</h1>
        <div className="content">
          <p>In our age, data travels fast. Having <span className="emphasis">the right online presence can promote your business fast enough since everyone is online</span>.</p>
          <p>With today's technologies, having <span className="emphasis">the right online presence is only a website away</span>.</p>
          <p>As a <span className="highlight">UI/UX Designer</span>, I create designs for users to have a smooth and optimal experience, and as a <span className="highlight">Front-End Developer</span>, I build applications with modern web technologies.</p>
        </div>
        <div className="nextSection" onClick={() => goto('skills-tech')}>
          <svg width="72" height="23" viewBox="0 0 72 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.999993 1L36 21L71 1" stroke="#FDE7E8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
    <div className="clipedBG">
      <div></div>
    </div>
  </div>);
}

export default Vision;