import Link from "next/link";
import React from "react";
import "./nav-item.css";

type Props = {
  children: React.ReactNode;
  to: string;
};

const NavItem = ({ children, to }: Props) => {
  return (
    <li className="nav-item">
      <Link href={to} className="nav-item--link">
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
