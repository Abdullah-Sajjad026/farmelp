import React from "react";
import styles from "./main-layout.module.scss";
import Header from "./components/header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["main"]}>
      <Header />
      <main className={styles["main__content"]}>{children}</main>
      {/* Main layout footer may go below */}
    </div>
  );
};
