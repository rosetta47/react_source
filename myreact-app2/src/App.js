
// import React, { useState } from 'react';
// import HookTest from './mydir/HookTest';
// import HookTest2 from './mydir/HookTest2';

// class App extends Component { ... render() { ... return(JSX)}}
// function App() {... return(JSX)}
// const App = () => { render() {}}

// class App extends Component {
//   state = {
//     count:0
//   };

//   countUpdate(n) {
//     this.setState({count:n});
//   }

//   render() {
//     const {count} = this.state;  // const 나 let으로 변수 설정
//     return(
//       <div>
//         <h3>class 컴포넌트 사용</h3>
//         number : {count} &nbsp;
//         <button onClick={() => {
//           this.countUpdate(count + 1);
//         }}>증가 1</button>
//         <hr/>
//         <h3>function 컴포넌트 사용</h3>
//         <HookTest />
//         <hr/>
//         <h3>function 컴포넌트 사용 2</h3>
//         <HookTest2 />
//       </div>
//     );
//   }
// }
import React, { useState } from 'react';
import HookTest from './mydir/HookTest';
import HookTest2 from './mydir/HookTest2';

//상태 관리 및 이벤트 핸들러
const App = () => {
  const [count, setCount] = useState(0);
  //useState(0): count라는 상태 변수와 setCount라는 상태를 업데이트하는 함수를 정의합니다. 초기값은 0입니다.

  const countUpdate = (n) => { // 이벤트 핸들러 함수(이벤트 처리)
    setCount(n);
  };
  //countUpdate: count 상태를 업데이트하는 함수입니다. 매개변수로 받은 값 n을 setCount 함수를 통해 count 상태로 설정합니다.

  return (
    <div>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </div>
  );
};

export default App;
//이 App 컴포넌트는 React의 상태 관리와 이벤트 처리 방법을 보여주는 간단한 예제입니다. 버튼을 클릭하면 count 상태가 1씩 증가하며, 두 개의 다른 컴포넌트를 포함하고 있습니다.
