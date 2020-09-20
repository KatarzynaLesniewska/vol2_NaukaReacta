import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore'; 
import ReactHtmlParser from 'react-html-parser';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';
//import Column from '../../Column/ColumnContainer.js';
//import Column from './components/Column/ColumnContainer.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  }
  
  static defaultProps = {
    description: settings.defaultListDescription,
    image: <p>Img got lost somewhere :( </p>,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} heroImgURL={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </section>
      </Container>
    );
  }
}

export default List;