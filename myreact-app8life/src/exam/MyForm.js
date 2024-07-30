import { useState } from "react";

function MyForm(){
    const [formData, setFormData] = useState({
        irum:'',
        nai:'',
        menu:'파전'
    })

    const dataChange = (e) => { // 이벤트핸들러
        const name = e.target.name; //form 태그 내의 name
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        }); // formDate를 사용해서 데이터를 수정할꺼야
    }

    const dataSubmit = (e) => {
        e.preventDefault();
        const {nai} = formData; // formData 객체에서 nai를 추출해서 nai이 변수에 치환

        if(!Number(nai) || isNaN(Number(nai))){ //나이 입력 자료 검사
            alert('나이는 숫자로 입력하시오');
        }else{
            alert('처리 성공');
        }
    }

    return(//onSubmit={} 이벤트가 발생하면 {}안에 있는 것을 부를꺼야
        <>
        <h3>
               결과 : {formData.irum},  넌 {formData.nai}살! 선택한 음식은 {formData.menu}
        </h3>
        <form onSubmit={dataSubmit}>
            이름 입력 : <input type="text" name="irum" onChange={dataChange} /><br/> {/* text, select 니까 onChange 해야되*/}
            나이 입력 : <input type="text" name="nai" onChange={dataChange} /><br/>
            야식 메뉴 : 
            <select name="menu" value={formData.menu} onChange={dataChange}>
                <option value="치킨">치킨</option>
                <option value="파전">파전</option>
                <option value="삼겹살">삼겹살</option>
            </select>
            <br/><br/>
            <button type="submit">전송</button> {/* 버튼에서 써밋하면 form 에 onSubmit을 만나서 dataSubmit 이벤트 핸들러로 감 */}

        </form>
        </>
    );
}

export default MyForm;