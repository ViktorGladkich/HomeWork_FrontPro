import React, { useEffect, useState } from "react";
import UsersContainer from "../../UsersContainer/UsersContainer";
import { Context } from "../../../requests/context";
import { getAllUsers } from "../../../requests/users";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  console.log(users);

  return (
    <div>
      <Context.Provider value={{ users }}>
        <UsersContainer />
      </Context.Provider>
    </div>
  );
}

export default UsersPage;
