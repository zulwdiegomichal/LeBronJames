import './App.css'

function App() {
  const komp=2;
  let w1,w2,w3,w4,w5,w6,w7,w8,w9,w10;
  w1=komp*1
  w2=komp*2
  w3=komp*3
  w4=komp*4
  w5=komp*5
  w6=komp*6
  w7=komp*7
  w8=komp*8
  w9=komp*9
  w10=komp*10
  
const x=2;
const y=3;
  let m1,m2,m3,m4,m5
  m1=komp*komp*komp+1-komp*y;
  m2=2*x+komp*komp-4*Math.pow(y,2);
  m3=3*Math.pow(y,2)-komp*komp*y-7*y;
  m4=2*x*y+komp*x*y;
  m5=3*Math.pow(x,2)+komp*y+2;



  return ( 
  <>
  <div className='nazwa'>
  <p> Moj komputer ma numer {komp} </p>
  </div>
<div className='wszystkie'>
  <div className='mnozenie'> 
  <p> Tablica mnozenia</p>
<p> {komp}*1={w1} </p>  
<p> {komp}*2={w2} </p>  
<p> {komp}*3={w3} </p>  
<p> {komp}*4={w4} </p>  
<p> {komp}*5={w5} </p>  
<p> {komp}*6={w6} </p>
<p> {komp}*7={w7} </p>  
<p> {komp}*8={w8} </p>  
<p> {komp}*9={w9} </p>  
<p> {komp}*10={w10} </p>  
  </div>

  <div className='rownania'>
    <p>Równania</p>
<p>{komp}x<sup>3</sup>+1-{komp}y={m1}</p>
<p>2x+3{komp}-4y <sup>2</sup>={m2}</p>
<p>3y <sup>2</sup>-{komp}x <sup>2</sup>y-7y={m3}</p>
<p>2xy+{komp}xy={m4}</p>
<p>3x <sup>2</sup>+{komp}y+2={m5}</p>
  </div>
</div>  
  </>


  ) 
}

export default App
