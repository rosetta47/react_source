import React from "react";
import pic4 from "../pic4.png";

function TodoListItem({todo}){
    const {id, text, checked } = todo;
    return(
        <li className="TodoListItem">
            <div className={('checkbox', { checked })}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
             </div>
             <div className="edit">
                 <MdModeEditOutline />
             </div>
             <div className="remove">
                 <MdRemoveCircleOutline />
             </div>
        </li>

    );
}

export default TodoListItem;