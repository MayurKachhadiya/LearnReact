import React from 'react';

const SlotM = ()=>{
    let x = '😄';
    let y = '😄';
    let z = '😄';
        if ((x===y)&&(y===z)) {
            return (
                <>
                <h1>{' '}{x}{y}{z}{' '}</h1>
                <h1>This is Matchine</h1>
                <hr/>
                </>
            );
        } else {
                return (
                <>    
                <h1>{' '}{x}{y}{z}{' '}</h1>
                <h1>This is not Matchine</h1>
                <hr/>
                </>
            );
        }
}

const App = () =>{
    <>
        <h1 className='heading_style'>🎰 Welcome to <span style={{fontweidth: 'bold'} }>Slot Matchine Game</span> 🎰</h1>
        <SlotM/>
    </>
}
export default App;