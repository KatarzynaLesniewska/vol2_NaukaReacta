import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = (props) => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src={props.heroImgURL} />
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    heroImgURL: PropTypes.text,
};

export default Hero;