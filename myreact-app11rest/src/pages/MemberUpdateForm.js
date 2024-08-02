import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm() {
  // "/members/:num/edit" : num 값 읽기
  const { num } = useParams();

  // 수정할 정보 state로 관리
  const [state, setState] = useState({
    num: 0,
    name: "",
    addr: "",
  });

  useEffect(() => {
    // Ajax 요청 (get방식) : 수정자료 읽기
    axios
      .get("/members/" + num)
      .then((res) => {
        // 서버로부터 응답된 데이터를 이용해서 state를 수정함
        // res.data는 {num:1, name:'신기해', addr:'서울시 강남구'}
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [num]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  //수정 버튼 클릭에 대한 이벤트 핸들러
  const handleSave = () => {
    // Ajax 요청 (PUT방식) 설정 : update
    axios
      .put("/members/" + num, state)
      .then((res) => {
        navigate("/members"); // 수정 후 목록보기 (이벤트로 넘어가는 거임)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>회원 정보 수정</h2>
      <div>
        <label>이름 : </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={state.name}
        />
      </div>
      <div>
        <label>주소 : </label>
        <input
          type="text"
          name="addr"
          onChange={handleChange}
          value={state.addr}
        />
      </div>
      <button onClick={handleSave}>수정 확인</button>
    </>
  );
}
