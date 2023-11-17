// add your custom commands here
//these command will be available in the browser object here

browser.addCommand("getElementAndClick", async (text) => {
  const element = await $(`//android.view.View[@content-desc="${text}"]`);
  await element.waitForDisplayed({ timeout: 10000 });
  await element.click();
});

browser.addCommand("getResultText", async () => {
  //if result is present than the returns the result text
  //else return false
  try {
    const element = await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]'
    );
    await element.waitForDisplayed({ timeout: 10000 });
    return await element.getAttribute("content-desc");
  } catch (e) {
    return false;
  }
});
