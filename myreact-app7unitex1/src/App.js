import React, {useState} from "react";
import UnitConv from "./mydir/UnitConv";

function App() {

  const [unitA,setUnitA] = useState(1); // 숫자1
  const [unitB,setUnitB] = useState(100); // 숫자2

  const changeUnit = () =>{ // 계산식
    setUnitB(unitA * 100);
  }

  const changeNum = (e) =>{ // 숫자변경
    //setUnitA(unitA + 1);
    setUnitA(e.target.value);
   
  }

  return (
    <div className="App">
    <h3>단위 환산 계산기 - 연습문제</h3>
    <UnitConv num1={unitA} num2={unitB} />
      <form>
        {/*  <button onClick={changeNum}>미터 : 숫자변경</button>&nbsp;*/}
        <input onChange={changeNum} value={unitA} /> 
   </form>
      <button onClick={changeUnit}>확인</button>
    </div>
  );
}

export default App;
