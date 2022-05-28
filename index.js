import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Netflix from './Netfix';
// import Amazon from './Amazon';
// import App from './App';
// import Counter from './Counter';
// import Time from './Time';
// import Color from './Color';
import Form from './Form';

// const screen = 'Amazon';
// const Abc = ()=>{
//   if (screen === 'Netflix') {
//     return(
//      <Netflix/>
//     );
//   } else {
//     return(
//       <Amazon/>
//     );
//   }
// };

// const SlotM = ()=>{
//   let x = '😄';
//   let y = '😄';
//   let z = '🎅';
//       if ((x===y)&&(y===z)) {
//           return (
//               <>
//               <h1 style={{align: 'center'}}>{' '}{x}{y}{z}{' '}</h1>
//               <h1 style={{color:'darkgreen'}}>This is Matchine</h1>
//               <hr/>
//               </>
//           );
//       } else {
//               return (
//               <>    
//               <h1 style={{align:'center'}}>{' '}{x}{y}{z}{' '}</h1>
//               <h1 style={{color:'darkgreen'}}>This is not Matchine</h1>
//               <hr/>
//               </>
//           );
//       }
// }


ReactDOM.render(
    <>
   {/* <h1 className='heading_style'>🎰 Welcome to <span style={{fontweidth: 'bold'} }>Slot Matchine Game</span> 🎰</h1>
        <SlotM/>
        <SlotM/>
        <SlotM/> */}
        {/* <Counter/> */}
        {/* <Time/> */}
        {/* <Color/> */}
        <Form/>
    </>,document.getElementById('root')
);