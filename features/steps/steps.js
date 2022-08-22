const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const LoginPage = require("../pom/login.page");
const settingsPage = require("../pom/settings.page");

Given(/^I am on the Home page$/, async () => {
  await LoginPage.openCA();
});
Given(/^I navigate to Login Page$/, async () => {
  await LoginPage.clickOnLoginLink();
  await LoginPage.inputEmail.waitForDisplayed({ timeout: 30000 });
});
Given(/^I navigate to Signup Page$/, async () => {
  await LoginPage.clickOnLoginLink();
  await LoginPage.signUpLink.waitForDisplayed({ timeout: 30000 });
  await LoginPage.clickOnSignupLink();
  await LoginPage.inputEmail.waitForDisplayed({ timeout: 30000 });
});
When(/^I login with valid username and password$/, async () => {
  await LoginPage.login("xyz123@xyz.com", "1234@Cloud");
});
Then(/^I see user session$/, async () => {
  expect(await LoginPage.myAccount.isDisplayed()).to.be.true;
});
When(/^I signup with valid username and password$/, async () => {
  let email = Math.random().toString(36).slice(2);
  await LoginPage.signup(email + "@xyz.com", "1234@Cloud");
});
When(/^I logout from CA$/, async () => {
  await LoginPage.logout();
});
Then(/^I see user session logged out$/, async () => {
  expect(await LoginPage.btnSignIn.isDisplayed()).to.be.true;
});

Given(/^I navigate to settings page$/, async () => {
  await LoginPage.navigateToSettingsPage();
});
When(/^I upload a new avatar$/, async () => {
  const path = require("path");
  const filePath = path.join(__dirname, "../../avatar.webp");
  const remoteFilePath = await browser.uploadFile(filePath);

  await settingsPage.uploadAvatar(remoteFilePath);
  await settingsPage.settingSave.click();
});
Then(/^My avatar is updated$/, async () => {
    await browser.pause(10000);
});
