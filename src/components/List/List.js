import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore'; 
import ReactHtmlParser from 'react-html-parser';
//import Column from '../Column/Column.js';
//import Creator from '../Creator/Creator.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }
  
  static defaultProps = {
    description: settings.defaultListDescription,
    image: <p>Img got lost somewhere :( </p>,
  }

  render() {
    const {title, image, description} = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} heroImgURL={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        {/*
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default List;