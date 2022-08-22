class SettingsPage {
  get uploadImage() {
    return $("#user_avatar");
  }
  get settingSave() {
    return $(`//input[@data-testid="onboarding-submit-about-you-form"]`);
  }
  async uploadAvatar(filePath) {
    await this.uploadImage.setValue(filePath);
  }
}

module.exports = new SettingsPage();
