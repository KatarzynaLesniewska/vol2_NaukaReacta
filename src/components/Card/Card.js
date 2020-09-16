import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.PropTypes.string,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultCardIcon,
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
      </section>
    );
  }
}


export default Card;