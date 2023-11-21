exports.config = {
  // add all your capabillities here
  localConfig: {
    capabilities: [
      {
        platformName: "Android",
        "appium:deviceName": "fb98571c",
        "appium:autoGrantPermissions": true,
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.example.flutter_calculator",
        "appium:appActivity": "com.example.flutter_calculator.MainActivity",
        "appium:noReset": "true",
      },
    ],
  },
  pipeline: {
    capabilities: [
      {
        platformName: "Android",
        "appium:deviceName": "fb98571c",
        "appium:autoGrantPermissions": true,
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.example.flutter_calculator",
        "appium:appActivity": "com.example.flutter_calculator.MainActivity",
        "appium:noReset": "true",
      },
    ],
  },
};
