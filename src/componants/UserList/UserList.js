import React from "react";
import UserListData from "../UserListData/UserListData";

const UserList = (props) => {
    const classname=["bg-success","bg-primary","bg-danger","bg-warning","bg-dark","bg-dark_blue","bg-info"];
    const users=props.users;
  return (
    <div className="card user_card">
      <div className="card-body p-5">
          {
            (users.length!==0)?
              users.map((item)=>{
                return <UserListData class={classname[Math.floor(Math.random()*classname.length)]} key={item._id} name={item.name}></UserListData>
              }):
              <h1>No Users Found!!!!</h1>
          }
        
      </div>
    </div>
  );
};

export default UserList;
