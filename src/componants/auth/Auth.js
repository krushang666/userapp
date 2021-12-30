import React, { useEffect, useState } from "react";
const Authcontext = React.createContext({
  isLoggedIn: false,
  id: "",
  name: "",
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [status, setstatus] = useState(false);
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  useEffect(() => {
    const status = localStorage.getItem("status");
    if (status === "1") {
      const id=localStorage.getItem("id");
      const name=localStorage.getItem("name");
      setId(id);
      setName(name);
      setstatus(true);
    }
  }, []);
  const onLoginHandler = (confirm, id, name) => {
    if (confirm) {
      setId(id);
      setName(name);
      localStorage.setItem("status", "1");
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      setstatus(true);
    }
  };

  const onLogoutHandler = () => {
    localStorage.removeItem("status");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    setstatus(false);
  };
  return (
    <Authcontext.Provider
      value={{
        isLoggedIn: status,
        id: id,
        name: Name,
        onLogin: onLoginHandler,
        onLogout: onLogoutHandler,
      }}
    >
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;
