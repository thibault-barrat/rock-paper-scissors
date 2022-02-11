import React, {useState} from 'react';
import styles from './App.module.scss';
import Attribution from './components/Attribution';
import Heading from './components/Heading';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className={styles.app}>
      <Heading score={score} />
      <Attribution />
    </div>
  );
}

export default App;
