const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_BOARD':
        var newBoard = [...state.board];
        newBoard[action.payload.index] = state.xIsNext ? 'X' : 'O';
        return {
          ...state,
          board: newBoard,
          xIsNext: !state.xIsNext,
        };
  
      case 'RESTART_GAME':
        return {
          ...initialState,
        };
  
      default:
        return state;
    }
  };
  
  export default gameReducer;