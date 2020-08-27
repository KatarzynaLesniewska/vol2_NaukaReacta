import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} heroUrlIMG={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}>
          <p>Interesting things I want to check out!</p>
        </List>
      </main>
    )
  }
}

export default App;
