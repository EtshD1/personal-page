import './index.scss';

import Hero from './Hero-Page';
import Vision from './Vision';
import SkillsTech from './SkillsTech';
import MyWork from './MyWork';
import WorkTogether from './WorkTogether';

export const App = () => {
  return (<main id="App">
    <Hero />
    <Vision />
    <SkillsTech />
    <MyWork />
    <WorkTogether />
  </main>);
}

export default App;