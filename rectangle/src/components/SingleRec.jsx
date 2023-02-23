import React from 'react';

function SinglrRec({num}){
  return(
  <div className="main">
<div className="rec">
  {num>0 && <SinglrRec num={num-1} />}
</div>
  </div>)
}


export default SinglrRec;