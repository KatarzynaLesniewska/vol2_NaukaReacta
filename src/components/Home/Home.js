import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import List from './../List/ListContainer.js';
import Search from './../Search/SearchContainer.js';
//import List from '../../List/ListContainer.js';
//import List from './components/List/ListContainer.js';
// import {pageContents, listData} from '../../data/dataStore';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search/>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
