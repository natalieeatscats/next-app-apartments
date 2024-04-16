import Link from "next/link";
import React from "react";
import styles from "./nav-item.module.css";

type Props = {
  children: React.ReactNode;
  to: string;
};

const NavItem = ({ children, to }: Props) => {
  return (
    <li className={styles.item}>
      <Link href={to} className={styles.itemLink}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
