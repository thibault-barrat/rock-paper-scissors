import React, {useState} from 'react';
import styles from './App.module.scss';
import Attribution from './components/Attribution';
import Heading from './components/Heading';
import Button from './components/Button';
import RulesModale from './components/RulesModale';

function App() {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  return (
    <div className={styles.app}>
      {showRules && <RulesModale closeModale={setShowRules} />}
      <Heading score={score} />
      <Button showModale={setShowRules} />
      <Attribution />
    </div>
  );
}

export default App;
