const Skills = () => {
  return (<div className="skills container">
    <h1>Skills</h1>
    <div>
      <div className="skill">
        <div>Front-End Development</div>
        <svg height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="barContainer" x="0.5" y="0.5" height="11" rx="5.5" stroke="#867A7A" />
          <rect className="barBg" x="4" y="4" height="4" rx="2" fill="#2D0B0B" fillOpacity="0.25" />
          <rect width="87.5%" className="bar" x="4" y="4" height="4" rx="2" fill="#F15152" />
        </svg>
      </div>
      <div className="skill">
        <div>UI/UX Design</div>
        <svg height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="barContainer" x="0.5" y="0.5" height="11" rx="5.5" stroke="#867A7A" />
          <rect className="barBg" x="4" y="4" height="4" rx="2" fill="#2D0B0B" fillOpacity="0.25" />
          <rect width="82.5%" className="bar" x="4" y="4" height="4" rx="2" fill="#F15152" />
        </svg>
      </div>
      <div className="skill">
        <div>Back-End Development</div>
        <svg height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="barContainer" x="0.5" y="0.5" height="11" rx="5.5" stroke="#867A7A" />
          <rect className="barBg" x="4" y="4" height="4" rx="2" fill="#2D0B0B" fillOpacity="0.25" />
          <rect width="75%" className="bar" x="4" y="4" height="4" rx="2" fill="#F15152" />
        </svg>
      </div>
    </div>
  </div>);
}

export default Skills;