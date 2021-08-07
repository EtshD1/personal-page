import './index.scss';

import Hero from './Hero-Page';
import Vision from './Vision';
import SkillsTech from './SkillsTech';

export const App = () => {
  return (<main id="App">
    <Hero />
    <Vision />
    <SkillsTech />
  </main>);
}

export default App;