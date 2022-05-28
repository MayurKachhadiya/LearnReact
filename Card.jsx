import React from 'react';

function Card(pro) {
    console.log(pro);
    return(
        <>
  <div class="container">
    <div class="card">
      <div class="box">
        <div class="content">
        <img src={pro.imgsrc} alt='myPic' className='card_image'/>
        <span>{pro.title}</span>
          <h3>{pro.name}</h3>
          <a href={pro.linksrc}>WATCH NOW</a>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="box">
        <div class="content">
        <img src={pro.imgsrc} alt='myPic' className='card_image'/>
        <span>{pro.title}</span>
          <h3>{pro.name}</h3>
          <a href={pro.linksrc}>WATCH NOW</a>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="box">
        <div class="content">
        <img src={pro.imgsrc} alt='myPic' className='card_image'/>
        <span>{pro.title}</span>
          <h3>{pro.name}</h3>
          <a href={pro.linksrc}>WATCH NOW</a>
        </div>
      </div>
    </div>
  </div>
</>
    );
  }

  export default Card;
  // creativemultimedia