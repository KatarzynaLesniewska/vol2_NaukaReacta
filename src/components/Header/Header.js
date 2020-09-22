import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss'; 
import Container from '../Container/Container';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Header extends React.Component { 
  static propTypes = {
    iconHeader: PropTypes.string,
  }

  static defaultProps = {
    iconHeader: settings.iconForHeader,
  }

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon iconHeader />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;
