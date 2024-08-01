import React from "react";

// Member 컴포넌트
const Member = ({memberData}) => {
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.junhwa}</td>
        </tr>

    );
}

// 메인 컴포넌트
const Multidata = () => {
    const members = [
        {irum:'관우', junhwa:'111-1111'},
        {irum:'장비', junhwa:'123-1111'},
        {irum:'유비', junhwa:'111-4567'},
    ]

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th> <th>전화</th>
                </tr>
            </thead>
            <tbody>
                {/* 배열 렌더링 시 각 요소에 key를 추가 */}
                {members.map((mem, index) => (
                    <Member key={index} memberData={mem} />
                ))}
            </tbody>
        </table>
    );
}

export default Multidata;