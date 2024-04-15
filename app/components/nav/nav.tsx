import { ROUTES } from "@/app/const";
import Link from "next/link";
import React from "react";
import NavItem from "./nav-item/nav-item";
import "./nav.css";

const Navigation = () => {
  const routesEntries = Object.entries(ROUTES);
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link href="/" className="nav-list--logo"></Link>
        </li>
        <li className="nav-list--right">
          <Link href="tel:84958354711" className="nav-list--phone">
            + 7 495 835 47 11
          </Link>
          <ul className="nav-list--links-list">
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
