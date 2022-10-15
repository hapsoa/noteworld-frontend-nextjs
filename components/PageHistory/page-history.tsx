import React, { useEffect } from "react";
import styles from "./PageHistory.module.scss";
import { GiClover } from "react-icons/gi";
import { pageHistoryStore } from "../../stores/pageHistory.store";
import { observer } from "mobx-react-lite";

export const PageHistory = observer(() => {
  // useEffect(() => {
  //   console.log("pagehistory useeffect");
  //   pageHistoryStore.setPageName("안뇽");
  // }, []);

  return (
    <div style={{ display: "flex", marginLeft: "8px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <GiClover style={{ color: "green" }} />
        <div style={{ lineHeight: "40px" }}>{pageHistoryStore.pageName}</div>
      </div>
      <div style={{ margin: "0 4px", lineHeight: "40px" }}> / </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <GiClover style={{ color: "green" }} />
        <div style={{ lineHeight: "40px" }}>page name</div>
      </div>
    </div>
  );
});
