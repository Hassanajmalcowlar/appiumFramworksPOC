const { $ } = require("@wdio/globals");
const Page = require("./page");

// class to get the alerts an popups in on different pages or other commom page related elements
class PageSecureElements extends Page {
  /**
   * define selectors using getter methods
   */
  get flashAlert() {
    // code here for the alerts
  }
}

module.exports = new PageSecureElements();
