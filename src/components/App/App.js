import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
// import List from '../List/List.js';
// import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }

  render() {
    const {title, subtitle} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/*
        <List {...listData} />
        */}
      </main>
    );
  }
}

export default App;
