import Link from "next/link";
import React from "react";
import styles from "./user-noauth.module.css";

const UserNoAuth = () => {
  return (
    <Link href="/login" className={styles.login}>
      Войти в аккаунт
    </Link>
  );
};

export default UserNoAuth;
