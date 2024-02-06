// import './Game.css';
import { Component } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../../utils/Winner';
import { connect } from 'react-redux';
import { updateBoard, restartGame } from '../../actions';
import PropTypes from 'prop-types';

class Game extends Component {
  handleClick = (index) => {
    const { winner, board, updateBoard } = this.props;
    if (winner || board[index]) return;

    updateBoard(index);
  };

  getStatus = () => {
    const { winner, board, xIsNext } = this.props;
    if (winner) {
      return `Победитель: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'Ничья!';
    } else {
      return `Ходит: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  restart = () => {
    const { restartGame } = this.props;
    restartGame();
  };

  render() {
    return (
      <div className="min-h-screen w-full bg-gray flex justify-center items-center flex-col">
        <div className="status">{this.getStatus()}</div>
        <Board />
        <button className="w-200 h-35 mb-25 cursor-pointer text-black bg-ivory border border-black rounded-md" onClick={this.restart}>
          Начать заново
        </button>
      </div>
    );
  }
}

Game.propTypes = {
  board: PropTypes.array.isRequired,
  winner: PropTypes.string,
  xIsNext: PropTypes.bool,
  updateBoard: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  board: state.board,
  xIsNext: state.xIsNext,
  winner: calculateWinner(state.board),
});

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (index) => dispatch(updateBoard(index)),
  restartGame: () => dispatch(restartGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);