import React from 'react';
import { Title } from './components/WeatherTitle';
import { Form } from './components/WeatherForm';
import { WeatherData } from './components/WeatherData';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
     <Title />
     <Form />
     <WeatherData/>
    </div>
  );
}

export default App;
