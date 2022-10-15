import { makeAutoObservable } from "mobx";

class StoreContent {
  public content = "";

  constructor() {
    makeAutoObservable(this);
  }

  setContent() {
    this.content = "hahaha";
    console.log("this.content", this.content);
  }
}

export const contentStore = new StoreContent();
