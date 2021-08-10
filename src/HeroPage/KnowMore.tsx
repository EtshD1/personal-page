import { goto } from "../scrollTo";

const KnowMore = () => {
  return (<div>
    <button onClick={() => goto('vision')}>Know More</button>
  </div>);
}

export default KnowMore;