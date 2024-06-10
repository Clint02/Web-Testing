import { browser, $ } from '@wdio/globals'

class ProductDetailPage {
  get productTitle() {
    return $('h1.content-title')
  }
  get productDescription() {
    return $('(//div[contains(@class, "story-content")])[1]')
  }
  get viewMoreButton() {
    return $('(//button[contains(@class, "btn btn-link    ")])[1]')
  }
  get moreProductDescription() {
    return $('(//div[contains(@class, "story-content")])[2]/ul')
  }
  get productImageSrc() {
    return $('img[alt="Shoes"]').getAttribute('src')
  }
  get productPrice() {
    return $('h2[class="content-price"]')
  }
  get sizeChartButton() {
    return $('(//button[contains(@class, "btn btn-link    ")])[2]')
  }
  get sizeChart() {
    return $('(//div[contains(@class, "size-chart-wrapper")])[1]/ul')
  }
  get sizePickButton() {
    return $('(//button[contains(@class, "sizes-item")])[3]')
  }
  get reminderButton() {
    return $('(//button[contains(@class, "btn btn-link    ")])[3]')
  }
  get popUpReminder() {
    return $('div.modal-content')
  }
  get closeReminderButton() {
    return $('div.close')
  }
  get addToBagButton() {
    return $('.content-sizes button.btn.btn-primary.btn-block')
  }
  get bagContent() {
    return $('.bag-menu-content')
  }

  async open() {
    return browser.url(
      'https://sepatucompass.com/shop/gazelle-hi-white-blue-20',
    )
  }
  async clickviewMoreButton() {
    await this.viewMoreButton.click()
  }
  async clickViewSizeChart() {
    await this.sizeChartButton.click()
  }
  async clickSizePickButton() {
    await this.sizePickButton.click()
  }
  async isAddToBagButtonDisabled() {
    const button = await this.addToBagButton
    const isDisabled = (await button.getAttribute('disabled')) !== null
    return isDisabled
  }
  async clickAddToBag() {
    const buttonUpdated = await this.addToBagButton
    await buttonUpdated.click()
    await buttonUpdated.click()
    await buttonUpdated.click()
  }
  async clickReminderButton() {
    await this.reminderButton.click()
  }
  async clickCloseReminderButton() {
    await this.closeReminderButton.click()
  }
}

export default new ProductDetailPage()
