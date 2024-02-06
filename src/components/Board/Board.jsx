// import './Board.css';
import Square from '../Square/Square';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBoard } from '../../actions';
import { Component } from 'react';


class Board extends Component {
    render() {
        const { squares, click} = this.props;
     
    return (
        <div className="grid grid-cols-3 w-300 h-300 bg-darkorange">
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => click(i)}/>
            ))
        }
        </div>
    );
  }
}

Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    click: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    squares: state.board,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    click: (index) => dispatch(updateBoard(index)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Board);
