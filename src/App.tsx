import './index.scss';

import Hero from './Hero-Page';
import Vision from './Vision';
import SkillsTech from './SkillsTech';
import MyWork from './MyWork';

export const App = () => {
  return (<main id="App">
    <Hero />
    <Vision />
    <SkillsTech />
    <MyWork />
  </main>);
}

export default App;