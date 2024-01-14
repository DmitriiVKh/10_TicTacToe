import './Game.css';
import Board from '../Board/Board';
import { calculateWinner } from '../../utils/Winner'
import { useReduxState, useDispatch, ReduxRenderer } from '../../reduxManager';
import { updateBoard, restartGame } from '../../actions';
import store from '../../store'; 

const Game = () => {
  const state = useReduxState();
  const dispatch = useDispatch();
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    if (winner || state.board[index]) return;

    dispatch(updateBoard(index));
  };

  const getStatus = () => {
    if (winner) {
      return `Победитель: ${winner}`;
    } else if (state.board.every((square) => square !== null)) {
      return 'Ничья!';
    } else {
      return `Ходит: ${state.xIsNext ? 'X' : 'O'}`;
    }
  };

  const restart = () => {
    return (
      <button className='restart' onClick={() => dispatch(restartGame())}>
        Начать заново
      </button>
    );
  };

  return (
    <ReduxRenderer store={store}>
      <div className='conteiner'>
        <div className='status'>{getStatus()}</div>
        <Board squares={state.board} click={handleClick} />
        {restart()}
      </div>
    </ReduxRenderer>
  );
};

export default Game;