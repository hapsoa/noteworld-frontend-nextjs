import { makeAutoObservable } from "mobx";

class StorePageHistory {
  pageName: string = "basic-page-name";

  constructor() {
    makeAutoObservable(this);
  }

  setPageName(pageName: string) {
    this.pageName = pageName;
  }
}

export const pageHistoryStore = new StorePageHistory();
