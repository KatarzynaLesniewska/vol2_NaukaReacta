import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
//import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore'; 
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    heroUrlIMG: PropTypes.string,
  }
  
  static defaultProps = {
    description: settings.defaultListDescription,
    heroUrlIMG: <p>Img got lost somewhere :( </p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroImgURL={this.props.heroUrlIMG} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
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