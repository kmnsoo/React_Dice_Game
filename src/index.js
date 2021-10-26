// 


// const WINS = {
//   rock: 'scissor',
//   sissor: 'paper',
//   paper: 'rock',
// };

//   function getResult(left, right){
//     if (WINS[left] === right) return '승리';
//     else if (left === WINS[right] )return '패배';
//     return '무승부';
//   }
//   function handlClick() {
//     console.log('가위 바위 보 !.');
//   }
//   const me = 'rock';
//   const other = 'scissor';

// ReactDOM.render(
//   <>
// <h1>
//   가위 바위 보
// </h1>
// <h2>{getResult(me, other)}</h2>
// <button >가위</button>
// <button >바위</button>
// <button >보</button>



//  </>,
//   document.getElementById('root')
// );



import ReactDOM from 'react-dom';
import App from './App'


ReactDOM.render (<App />, document.getElementById('root'));