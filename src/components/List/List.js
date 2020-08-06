import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    heroUrlIMG: PropTypes.text,
  }
  
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    heroUrlIMG: <p>Img got lost somewhere :( </p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroImgURL={this.props.heroUrlIMG} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={'Animals'}></Column>
          <Column title={'Plants'}></Column>
          <Column title={'Minerals'}></Column>
        </div>
      </section>
    )
  }
}

export default List;