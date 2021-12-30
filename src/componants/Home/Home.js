import React, { useContext, useState } from "react";
import Authcontext from "../auth/Auth";
import UserList from "../UserList/UserList";

const Home = (props) => {
  const [status, setstatus] = useState(false);
  const [userList, setuserList] = useState({});
  const ctx = useContext(Authcontext);
  const SearchHandler = (e) => {
    if (e.target.value === "") {
      setstatus(false);
      return;
    }
    setstatus(true);
    const filteredList = props.userList.filter(
      (item) => item.name.includes(e.target.value) === true
    );
    setuserList(filteredList);
  };
  return (
    <div className="container">
      <div className="p-4">
        <h1>Welcome,</h1>
        <h3 className="offset-2 text-success">{ctx.name.toUpperCase()}</h3>
      </div>
      <br />
      <h2 className="text-center">Want To Find Some Friends?</h2>
      <div className="row  mt-3">
        <div className="offset-3 col-6">
          <input
            className="form-control custom_input"
            placeholder="Search Your Friends Here"
            onChange={SearchHandler}
          ></input>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="offset-2 col-8">
          {status && <UserList users={userList}></UserList>}
        </div>
      </div>
    </div>
  );
};

export default Home;
