import './Game.css';
import Board from '../Board/Board';
import { calculateWinner } from '../../utils/Winner';
import { useSelector, useDispatch } from 'react-redux';
import { updateBoard, restartGame } from '../../actions';

const Game = () => {
  const { board, xIsNext } = useSelector((state) => state);
  const dispatch = useDispatch();
  const winner = calculateWinner(board);
  
  const handleClick = (index) => {
    if (winner || board[index]) return;

    dispatch(updateBoard(index));
  };

  const getStatus = () => {
    if (winner) {
      return `Победитель: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'Ничья!';
    } else {
      return `Ходит: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  const restart = () => {
    dispatch(restartGame());
  };

  return (
      <div className='conteiner'>
        <div className='status'>{getStatus()}</div>
        <Board squares={board} click={handleClick} />
      <button className='restart' onClick={restart}>
          Начать заново
        </button>
      </div>
  );
};

export default Game;