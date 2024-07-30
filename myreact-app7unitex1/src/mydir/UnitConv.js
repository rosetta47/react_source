import React from "react";

const boxstyle={border:'1px solid blue', padding:'20px'}

function UnitConv({num1, num2}) {
    return(
        <div style={boxstyle}>
            <p>{num1}미터</p>
            <p>=</p>
            <p>{num2}센티미터</p>
        </div>

    );
}

export default UnitConv;