import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

const Counter = () => {
    const [member,setMember] = useState(0);

    const increase = () => {
        setMember(member + 1); // member + 1 의미
    }
    const decrease = () => {
        setMember(member - 1);// member - 1 의미
    }

    return(
        <div>
            <br/><br/>
            <Button variant="primary" onClick={increase}>친구 추가</Button>
            &nbsp;&nbsp;
            <button onClick={decrease}>친구 삭제</button>
            <p>친구 수는 {member}</p>
        </div>
    );
}

export default Counter;