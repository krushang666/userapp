import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./componants/NavBar/NavBar";
import "./componants/bootstrap.min.css";
import "./componants/style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import RegistrationForm from "./componants/RegistrationForm/RegistrationForm";
import LoginForm from "./componants/LoginForm/LoginForm";
import UpdateForm from "./componants/UpdateForm/UpdateForm";
import Authcontext from "./componants/auth/Auth";
import Home from "./componants/Home/Home";

function App() {
  //Comman Variables!!

  const ctx = useContext(Authcontext);
  const [userList, setuserList] = useState([]);
  const [userData, setuserData] = useState([]);
  const BaseUrl = "http://localhost:3300/User/";

  // Registration Handler!!

  const SubmitHandler = async (data) => {
    axios
      .post(`${BaseUrl}addUser`, {
        User: data,
      })
      .then((success) => {
        console.log(success);
        alert(success.data);
        
        window.location.href="/";
      });
  };

  // UpdateSubmitHandler!!

  const UpdateSubmitHanlder = async (data) => {
    axios
      .post(`${BaseUrl}update`, {
        id: ctx.id,
        User: data,
      })
      .then((success) => {
        console.log(success);
        alert(success.data);
      });
  };

  // Login Handler!!

  const LoginHandler = (data) => {
    axios
      .post(`${BaseUrl}checkLogin`, {
        data: data,
      })
      .then((success) => {
        const data = success.data;
        if (data.status === 1) {
          ctx.onLogin(true, data.id, data.name);
        } else {
          alert("Please Enter A Valid Input!!!!");
        }
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch All Users!!

  const fetchUsers = async () => {
    await axios.get(`${BaseUrl}`).then((success) => {
      setuserList(success.data);
    });
  };

  // Update handler!!!!

  const updateHandler = async () => {
    console.log(ctx.id);
    await axios.get(`${BaseUrl}fetchUserFromId/${ctx.id}`).then((success) => {
      setuserData(success.data);
    });
  };

  // Delete Handler!!!

  const DeleteHandler=async ()=>{
    if(window.confirm("Are You Sure You Want To Delete Your Profile!!!!??")){
      await axios.get(`${BaseUrl}delete/${ctx.id}`).then((success) => {
        alert(success.data);
        ctx.onLogout();
        window.location.href="/";
      });
    }
  }
  return (
    <div>
      <Router>
        {ctx.isLoggedIn && <Navbar onUpdate={updateHandler} onDelete={DeleteHandler}></Navbar>}
        <Routes>
          {!ctx.isLoggedIn && (
            <Route
              path="/"
              element={<LoginForm onLogin={LoginHandler} />}
            ></Route>
          )}
          {ctx.isLoggedIn && (
            <Route path="/" element={<Home userList={userList}></Home>}></Route>
          )}

          {ctx.isLoggedIn && (
            <Route
              path="/update"
              element={
                <UpdateForm
                  data={userData}
                  onSubmit={UpdateSubmitHanlder}
                ></UpdateForm>
              }
            ></Route>
          )}
          {ctx.isLoggedIn && (
            <Route
              path="/delete"
            ></Route>
          )}
          <Route
            path="/reg"
            element={
              <RegistrationForm onSubmit={SubmitHandler}></RegistrationForm>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
