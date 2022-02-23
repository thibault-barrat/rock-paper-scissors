import React, {useState} from 'react';
import styles from './App.module.scss';
import Attribution from './components/Attribution';
import Heading from './components/Heading';
import Button from './components/Button';
import RulesModale from './components/RulesModale';
import Game from './components/Game';
import Toggler from './components/Toggler';

function App() {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [isHard, setIsHard] = useState(false);
  return (
    <div className={styles.app}>
      {showRules && <RulesModale closeModale={setShowRules} />}
      <Heading score={score} />
      <Toggler isHard={isHard} setIsHard={setIsHard} />
      <Game setScore={setScore} score={score} />
      <Button onClick={() => setShowRules(true)} text="Rules" />
      <Attribution />
    </div>
  );
}

export default App;
