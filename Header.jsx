import React from 'react';

let currentDate = new Date();
currentDate = currentDate.getHours();
let msg = '';
let msgcolor = {};
if (currentDate >= 1 && currentDate <12 ) {
  msg = "Good Morning";
msgcolor.color = 'green';
} 
else if(currentDate >= 12 && currentDate <19) {
  msg = "Good Afternoon";
  msgcolor.color = 'red' ;

}
else{
  msg = "Good Night";
  msgcolor.color = 'black' ;

}

const Header = ()=>{
    return(
        <div className='div_h1'>
      <h1>Hello sir,<spam style={msgcolor}> {msg} </spam></h1>
    </div>
    );
}
export default Header;