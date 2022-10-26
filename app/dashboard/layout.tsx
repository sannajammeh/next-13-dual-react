import React from "react";
import classes from "./dashboard.module.scss";

type Props = {
  children: React.ReactNode;
};

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/dashboard/users">Users</a>
        </li>
      </ul>
    </aside>
  );
};

const layout = ({ children }: Props) => {
  return (
    <div className={classes.dashboard}>
      <header className={classes.header}>Header</header>
      <Sidebar />
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>Footer</footer>
    </div>
  );
};

export default layout;
