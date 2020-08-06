import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

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
        <Hero 
        titleText={this.props.title} 
        heroImgURL={this.props.heroUrlIMG}
        />
        <div className={styles.description}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default List;