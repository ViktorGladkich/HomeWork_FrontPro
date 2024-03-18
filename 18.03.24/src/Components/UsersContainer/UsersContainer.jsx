import React, { useContext } from "react";
import { Context } from "../../requests/context";
import UsersCard from "../UsersCard/UsersCard";
import styles from "./UsersContainer.module.scss"

function UsersContainer() {
  const { users } = useContext(Context);
  return (
    <div className={styles.container}>{users && users.map((el) => <UsersCard key={el.id} {...el} />)}</div>
  );
}

export default UsersContainer;
