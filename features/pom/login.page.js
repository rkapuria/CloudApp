const settingsPage = require("./settings.page");

class LoginPage {
  get loginLink() {
    return $("(//div[(text()='Log in')])[1]");
  }
  get signUpLink() {
    return $("//a[text()='Sign up for free']");
  }
  get inputEmail() {
    return $("#email");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSignIn() {
    return $("//input[@value='Sign in']");
  }
  get btnSignUp() {
    return $("//input[@value='Sign up']");
  }
  get myAccount() {
    return $("#avatar");
  }
  get settings() {
    return $("//a[contains(text(),'Settings')]");
  }
  get dashboardLogo() {
    return $(`//a[@href="/dashboard"]`);
  }
  get signOut() {
    return $(`//a[@href="/logout"]`);
  }

  async openCA() {
    await browser.url("https://getcloudapp.com/");
    await this.waitForLoad();
  }

  async clickOnLoginLink() {
    await this.loginLink.click();
  }

  async clickOnSignupLink() {
    await this.signUpLink.click();
  }

  async login(username, password) {
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSignIn.click();
    await this.myAccount.waitForDisplayed({ timeout: 30000 });
  }
  async signup(username, password) {
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSignUp.click();
    await this.dashboardLogo.waitForDisplayed({ timeout: 30000 });
    await this.dashboardLogo.click();
    await this.myAccount.waitForDisplayed({ timeout: 30000 });
  }

  async waitForLoad() {
    await this.loginLink.waitForDisplayed({ timeout: 30000 });
    await this.loginLink.waitForClickable();
  }

  async logout() {
    await this.myAccount.click();
    await this.signOut.waitForDisplayed({ timeout: 30000 });
    await this.signOut.click();
    await this.btnSignIn.waitForDisplayed({ timeout: 30000 });
  }

  async navigateToSettingsPage() {
    await this.myAccount.click();
    await this.settings.waitForDisplayed({ timeout: 30000 });
    await this.settings.click();
    await settingsPage.uploadImage.waitForDisplayed({ timeout: 30000 });
  }
}

module.exports = new LoginPage();
