import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHTML() {
    return `<h1>Hello World</h1>
       
        `;
  }
}
