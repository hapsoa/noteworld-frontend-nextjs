import React from "react";
import { PageHistory } from "../PageHistory/page-history";
import styles from "./NavigationBar.module.scss";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className={styles.NavigationBar}>
        <PageHistory />
        <div style={{ flex: 1 }}></div>
        <div style={{ lineHeight: "40px", margin: "0 8px", fontSize: "16px" }}>
          Favorite
        </div>
      </div>
    );
  }
}

export default NavigationBar;
