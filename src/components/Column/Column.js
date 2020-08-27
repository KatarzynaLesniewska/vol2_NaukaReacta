import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }

    static propTypes = {
        title: PropTypes.PropTypes.text,
    }

    addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
                cards: []
              }
            ]
          }
        ));
      }

  render() {
    return (
        <section className={styles.component}>
            <h3 className={styles.title}>
                {this.props.title}
            </h3>
        </section>
    )
  }
}

export default Column;
