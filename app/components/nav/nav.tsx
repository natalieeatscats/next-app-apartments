import { ROUTES } from "@/app/const";
import Link from "next/link";
import React from "react";
import NavItem from "./nav-item/nav-item";
import styles from "./nav.module.css";
import Logo from "../logo/logo";
import Phone from "../phone/phone";
import UserNoAuth from "./nav-user/user-noauth";

const Navigation = () => {
  const routesEntries = Object.entries(ROUTES);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Logo />
        </li>
        <li className={styles.listRight}>
          <UserNoAuth />
          <Phone />
          <ul className={styles.listLinks}>
            {routesEntries.map(([key, value]) => (
              <NavItem key={key} to={value}>
                {key}
              </NavItem>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
