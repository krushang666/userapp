import React from "react";

const UserListData=(props)=>{
    return (
        <div className={`${props.class} text-white card mb-2`}>
            <div className="card-body">
                {props.name}
            </div>
        </div>
    )
}

export default UserListData;