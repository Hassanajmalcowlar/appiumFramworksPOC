module.exports = class Helper {
  //add the utilities and helper functions here
  checkSubstringToContainMinusSign(string) {
    return string[0] === "-" ? true : false;
  }
};
