import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import { settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
//import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  render() {
    const {title, icon} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        {/*
        <div className={styles.cards}>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
        */}
      </section>
    );
  }
}

export default Column;
