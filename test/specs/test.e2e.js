const { expect } = require("@wdio/globals");

const Helper = require("../../utitls/Helper");
const CalculatorPage = require("../pageobjects/CalculatorPage");

describe("testing the login functionality of the application", () => {
  const helper = new Helper();

  beforeEach(async () => {
    await browser.getElementAndClick("C");
  });

  // it.skip("validate sum 2+2 =4", async () => {
  //   // await browser.getElementAndClick("2");
  //   // await browser.getElementAndClick("+");
  //   // await browser.getElementAndClick("2");
  //   // await browser.getElementAndClick("=");
  //   // const result = await $('//android.view.View[@content-desc="4.0"]');
  //   // await result.waitForDisplayed({ timeout: 1000 });
  //   // expect(await result.isDisplayed()).toEqual(true);
  //   // const text = await result.getAttribute("content-desc");
  //   const result = calculatorPage.add(1, 2);
  //   expect(result).toEqual();
  // });
  it("validate float addition 2 + 3.3", async () => {
    await browser.getElementAndClick("2");
    await browser.getElementAndClick("+");
    await browser.getElementAndClick("3");
    await browser.getElementAndClick(".");
    await browser.getElementAndClick("3");
    await browser.getElementAndClick("=");
    const result = await $('//android.view.View[@content-desc="5.3"]');
    await result.waitForDisplayed({ timeout: 1000 });
    expect(await result.isDisplayed()).toEqual(true);
    const text = await result.getAttribute("content-desc");
    expect(text).toBe("5.3");
  });
  it("validate subtraction", async () => {
    await browser.getElementAndClick("2");
    await browser.getElementAndClick("-");
    await browser.getElementAndClick("2");
    await browser.getElementAndClick("=");
    const text = await browser.getResultText();
    expect(text).toEqual("0.0");
  });
  it("verify that minus is displayed with answer when 2-3 is done", async () => {
    await browser.getElementAndClick("2");
    await browser.getElementAndClick("-");
    await browser.getElementAndClick("3");
    await browser.getElementAndClick("=");
    const text = await browser.getResultText();
    expect(helper.checkSubstringToContainMinusSign(text)).toEqual(true);
    expect(text).toEqual("-1.0");
  });
  it("verify that clear button works correctly", async () => {
    await browser.getElementAndClick("2");
    await browser.getElementAndClick("-");
    await browser.getElementAndClick("3");
    await browser.getElementAndClick("=");
    await browser.getElementAndClick("C");
    const checkIfResultExists = await browser.getResultText();
    expect(checkIfResultExists).toEqual(false);
  });
  it("verify that del button works correctly", async () => {
    await browser.getElementAndClick("2");
    await browser.getElementAndClick("-");
    await browser.getElementAndClick("3");

    await browser.getElementAndClick("DEL");
    await browser.getElementAndClick("DEL");
    const experessionElement = await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]'
    );
    const expressionLength = (
      await experessionElement.getAttribute("content-desc")
    ).length;
    expect(expressionLength).toEqual(1);
  });
});
