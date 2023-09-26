import React from "react";

import { TiShoppingCart, TiChevronRight } from "react-icons/ti";

import styles from "./header.module.scss";

const sectionOneTitles = [
  { isHeader: true, title: "Reeco", redirect: "/" },
  { title: "Stores", redirect: "/stores" },
  { title: "Orders", redirect: "/orders" },
  { title: "Analytics", redirect: "/analytics" },
];

function Header() {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__sectionone}>
        {sectionOneTitles.map((title) => (
          <a href={title.redirect}>
            {title.isHeader ? <h1>{title.title}</h1> : <p>{title.title}</p>}
          </a>
        ))}
      </div>
      <div className={styles.header__sectiontwo}>
        <div style={{ transform: "rotateY(180deg)", position: "relative" }}>
          <div className={styles.cart__container}>
            <span style={{ fontSize: "0.6rem", color: "#fff" }}>12</span>
          </div>
          <TiShoppingCart color="#fff" size={"2.4rem"} />
        </div>
        <div className="flex center">
          <p>Hello, James</p>
          <TiChevronRight
            color="#fff"
            size={"2rem"}
            style={{
              transform: "rotate(90deg)",
              fontWeight: "400",
              marginLeft: "1rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
