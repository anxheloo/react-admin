import React from "react";
import styles from "./menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div id="menu" className="flex flex-col gap-2 ">
      <div id="item" className="">
        <span
          id={styles.title}
          className="text-sm font-extralight text-softColor"
        >
          MAIN
        </span>

        <MenuItem
          linkTo={"/home"}
          logoSrc={"/home.svg"}
          text={"Home"}
        ></MenuItem>

        <MenuItem
          linkTo={"/profile"}
          logoSrc={"/profile.svg"}
          text={"Profile"}
        ></MenuItem>
      </div>

      <div id="item">
        <span
          id={styles.title}
          className="text-sm font-extralight text-softColor title"
        >
          Lists
        </span>

        <MenuItem
          linkTo={"/home/users"}
          logoSrc={"/user.svg"}
          text={"Users"}
        ></MenuItem>

        <MenuItem
          linkTo={"/products"}
          logoSrc={"/product.svg"}
          text={"Products"}
        ></MenuItem>

        <MenuItem
          linkTo={"/orders"}
          logoSrc={"/order.svg"}
          text={"Order"}
        ></MenuItem>

        <MenuItem
          linkTo={"/posts"}
          logoSrc={"/post.svg"}
          text={"Posts"}
        ></MenuItem>
      </div>

      <div id="item">
        <span
          id={styles.title}
          className="text-sm font-extralight text-softColor"
        >
          GENERAL
        </span>

        <MenuItem
          linkTo={"/elements"}
          logoSrc={"/element.svg"}
          text={"Elements"}
        ></MenuItem>

        <MenuItem
          linkTo={"/notes"}
          logoSrc={"/note.svg"}
          text={"Notes"}
        ></MenuItem>

        <MenuItem
          linkTo={"/forms"}
          logoSrc={"/form.svg"}
          text={"Forms"}
        ></MenuItem>

        <MenuItem
          linkTo={"/calendar"}
          logoSrc={"/calendar.svg"}
          text={"Calendar"}
        ></MenuItem>
      </div>

      <div id="item">
        <span
          id={styles.title}
          className="text-sm font-extralight text-softColor"
        >
          MAINTENANCE
        </span>

        <MenuItem
          linkTo={"/settings"}
          logoSrc={"/setting.svg"}
          text={"Settings"}
        ></MenuItem>

        <MenuItem
          linkTo={"/backups"}
          logoSrc={"/backup.svg"}
          text={"Backups"}
        ></MenuItem>
      </div>

      <div id="item">
        <span
          id={styles.title}
          className="text-sm font-extralight text-softColor"
        >
          ANALYTICS
        </span>

        <MenuItem
          linkTo={"/charts"}
          logoSrc={"/chart.svg"}
          text={"Charts"}
        ></MenuItem>

        <MenuItem
          linkTo={"/logs"}
          logoSrc={"/log.svg"}
          text={"Logs"}
        ></MenuItem>
      </div>
    </div>
  );
};

export default Menu;
