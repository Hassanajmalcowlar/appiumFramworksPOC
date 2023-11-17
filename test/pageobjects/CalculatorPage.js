exports.module = class CalculatorPage {
  // add your selectors here

  //actions

  async add(num1, num2) {
    await browser.getElementAndClick(num1);
    await browser.getElementAndClick("+");
    await browser.getElementAndClick(num2);
    await browser.getElementAndClick("=");
    return await browser.getResultText();
  }
  async sub(num1, num2) {
    await browser.getElementAndClick(num1);
    await browser.getElementAndClick("-");
    await browser.getElementAndClick(num2);
    await browser.getElementAndClick("=");
    return await browser.getResultText();
  }
};
