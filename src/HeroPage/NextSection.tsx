import { goto } from "../scrollTo";

const NextSection = () => {
  return (<div className="nextSection" onClick={() => goto('vision')}>
    <svg width="72" height="23" viewBox="0 0 72 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999993 1L36 21L71 1" stroke="#2D0B0B" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>);
}

export default NextSection;