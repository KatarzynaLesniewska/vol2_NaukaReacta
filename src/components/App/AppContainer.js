import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
});

export default connect(mapStateToProps)(App);