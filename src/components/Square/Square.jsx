import './Square.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Square extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
        <button
        className=" w-16 h-16 bg-darkorange border border-black cursor-pointer outline-none text-4xl square"
        onClick={onClick}
      >
        {value !== null ? value : ''}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default connect()(Square);