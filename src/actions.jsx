export const updateBoard = (index, value) => ({
    type: 'UPDATE_BOARD',
    payload: { index, value },
  });
  
  export const restartGame = () => ({
    type: 'RESTART_GAME',
  });