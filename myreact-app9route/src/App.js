import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import MyTest from "./exam/Test";
import HiAbout from "./exam/About";
import Counter from "./exam/Counter";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2";
import Multidata from "./exam/Multidata";
import MyAjax from "./exam/MyAjax";
import BasicExample from "./exam/desgin";
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
      <MyTest />

      <hr/>
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a tag로 전환 : 요청명 개념으로 이해 */}
        <Link to="/">Test화면</Link> | 
        <Link to="/about">About보기</Link> |
        <Link to="/count">친구 추가 삭제</Link> |
        <Link to="/input1">자료입력1</Link> |
        <Link to="/input2">자료입력2</Link> |
        <Link to="/multi">배열 자료</Link> |
        <Link to="/ajax">Ajax 요청(과일)</Link> |
        <Link to="/ex">(카드 디자인)</Link> 
      </nav>

      <Routes>{/* </Router>를 해야지 웹페이지에 보이고 그 안에  <Routes> 안에<Route> 있음 */}
         {/* 컴포넌트에서 동적 라우팅을 구현 가능 */}
        <Route path="/" element={<MyTest/>}></Route>
        <Route path="/about" element={<HiAbout/>}></Route>
        <Route path="/count" element={<Counter/>}></Route>
        <Route path="/input1" element={<Input1/>}></Route>
        <Route path="/input2" element={<Input2/>}></Route>
        <Route path="/multi" element={<Multidata/>}></Route>
        <Route path="/ajax" element={<MyAjax/>}></Route>
        <Route path="/ex" element={<BasicExample/>}></Route>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
