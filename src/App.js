import React from 'react';
import './App.css';
function App() {
  let flag=true;
  let gameOver=false;
  let moves=0;
  const wins=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
  ]
  function checkWin(index){
    for(let win in wins){
      if(wins[win].includes(index)){
        if(document.getElementById(wins[win][0]).childElementCount===1 && document.getElementById(wins[win][1]).childElementCount===1 && document.getElementById(wins[win][2]).childElementCount===1){
          let con1=document.getElementById(wins[win][0]+10).src;
          let con2=document.getElementById(wins[win][1]+10).src;
          let con3=document.getElementById(wins[win][2]+10).src;
          if(con1===con2 && con2===con3){
            gameOver=true;
            let result=document.getElementById('result');
            if(con1.includes("coin1.png")){
              result.innerHTML="player with blue coin won the game....!!!!";
              result.style.color="blue";
            }else{
              result.innerHTML="player with red coin won the game....!!!!"
              result.style.color="red";
            }
            return true;
          }
        }
      }
    }
    return false;
  }
  function clickFun(index){
    let container=document.getElementById(index);
    if(container.childElementCount===1 || gameOver){
      return;
    }
    moves+=1;
    let image=document.createElement('img');
    image.id=index+10;
    if(flag){
      image.src="images/coin1.png";
      console.log("coin1 path added to the image at container: "+index);
    }else{
      image.src="images/coin2.png";
      console.log("coin2 path added to the image at container: "+index);
    }
    container.appendChild(image);
    flag=flag?false:true;
    if(checkWin(index)){
      console.log("game completed...!!!");
    }else if(moves===9){
      document.getElementById('result').innerHTML="Game Draw...!!!";
    }
    console.log("flag updated to: "+flag);
  }
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="cell" onClick={()=>clickFun(1)} id="1"></div>
        <div className="cell" onClick={()=>clickFun(2)} id="2"></div>
        <div className="cell" onClick={()=>clickFun(3)} id="3"></div>
        <div className="cell" onClick={()=>clickFun(4)} id="4"></div>
        <div className="cell" onClick={()=>clickFun(5)} id="5"></div>
        <div className="cell" onClick={()=>clickFun(6)} id="6"></div>
        <div className="cell" onClick={()=>clickFun(7)} id="7"></div>
        <div className="cell" onClick={()=>clickFun(8)} id="8"></div>
        <div className="cell" onClick={()=>clickFun(9)} id="9"></div>
      </div>
      
      <p id="result"></p>
    </div>
  )
}

export default App;