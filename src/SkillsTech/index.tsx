import { goto } from "../scrollTo";
import Skills from "./Skills"
import Techs from "./Techs";

const SkillsTech = () => {
  return (<div id="skills-tech">
    <div>
      <Skills />
      <Techs />
    </div>
    <div className="nextSection" onClick={() => goto('my-work')}>
      <svg width="72" height="23" viewBox="0 0 72 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L36 21L71 1" stroke="#2D0B0B" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  </div>)
}

export default SkillsTech;