import React, {useState, useEffect} from 'react';
import '../App.css'
import pic1 from '../pic.png'; // 이미지 읽기 

//function HookTest2(){
//  ...
//}

//export default HookTest2;
// 아래와 같이 적을 수도 있다.

//컴포넌트 정의 및 상태 관리
export default function HookTest2(){
    const [item, setItem] = useState(0);  // 동적 변수
    //useState(0): item이라는 상태 변수와 setItem이라는 상태를 업데이트하는 함수를 정의합니다. 초기값은 0입니다
    
    //이벤트 핸들러 함수
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    
    useEffect(() => {
        let a = 1;
        console.log(a);  // 변수 a 사용
    }, []);
    //useEffect: 컴포넌트가 처음 렌더링될 때 한 번 실행됩니다. 여기서는 a라는 변수를 정의하고 그 값을 콘솔에 출력합니다.
    // 빈 배열 []은 이 효과가 컴포넌트가 처음 마운트될 때만 실행됨을 의미합니다.
    
    let st = {color:'blue', textAlign:'center'};

    /* JSX 문법 적용 영역 */
    return(   
        <div className='App'>
            <div>
            number : {item}&nbsp; 
            <button onClick={incrementItem}>증가</button>&nbsp;
            <button onClick={decrementItem}>감소</button>
            </div>   

            {/* CSS style 적용 : style 속성 값은 {key:'value'} 안에 적음 */}
            <h1 className='blackbar'>리액트의 이해</h1>
            <h2 style={{color:'red'}}>ECMA에 대한 선행 학습 필요</h2>
            <h3 style={st}>CSS 적용 방식에 대한 이해</h3>

            {/* 이미지 적용 1 : src 폴더 내 파일 */}
            <div>
                <img src={pic1} alt="첫번째 이미지"></img>
            </div>

             {/* 이미지 적용 2 : css 파일의  background-image 사용 */}
             <div className='img_bg'></div>

              {/* 이미지 적용 3 : public 폴더에 있는 파일 */}
              <img src={`${process.env.PUBLIC_URL}/imgs/pic3.png`} alt='public 폴더 읽기' />
        </div>

    );
}//이 코드는 React 컴포넌트에서 상태 관리, 이벤트 처리, 그리고 CSS 스타일링을 어떻게 할 수 있는지 잘 보여주는 예제입니다.
