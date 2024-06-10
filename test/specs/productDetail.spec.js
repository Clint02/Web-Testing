import { expect } from '@wdio/globals'
import productDetailPage from '../pageobjects/productDetail.page.js'

describe('Compass Product Detail Page', () => {
  before(async () => {
    await productDetailPage.open()
  })

  it('should display product title', async () => {
    //DEBUG
    const productDetailText = await productDetailPage.productTitle.getText()
    console.log(productDetailText)

    //ASERT
    await expect(productDetailPage.productTitle).toHaveText(
      'GAZELLE HI WHITE BLUE',
    )
  })

  it('should display product description', async () => {
    //DEBUG
    const productDescriptionText = await productDetailPage.productDescription.getText()
    console.log(productDescriptionText)

    //ASERT
    await expect(productDetailPage.productDescription).toHaveText(
      expect.stringContaining('the Gazelle Hi took an iconic silhouette'),
    )
  })

  it('should display more description', async () => {
    //DEBUG
    const buttonViewMore = await productDetailPage.viewMoreButton.getText()
    console.log(buttonViewMore)

    //ACTION
    productDetailPage.clickviewMoreButton()

    //DEBUG
    const moreDescriptionText = await productDetailPage.moreProductDescription.getText()
    console.log(moreDescriptionText)

    //ASERT
    await expect(productDetailPage.moreProductDescription).toHaveText(
      expect.stringContaining('Rubber outsole'),
    )

    //ACTION
    productDetailPage.clickviewMoreButton() //click VIEW LESS
  })

  it('should display product image', async () => {
    //DEBUG
    const productImageSrc = await productDetailPage.productImageSrc
    console.log(productImageSrc)

    //ASERT
    await expect(productDetailPage.productImageSrc).toBeTruthy()
  })

  it('should display price', async () => {
    //DEBUG
    const productPriceText = await productDetailPage.productPrice.getText()
    console.log(productPriceText)

    //ASERT
    await expect(productDetailPage.productPrice).toHaveText([
      'IDR 438.000',
      'IDR 45',
    ])
  })

  it('should display size chart', async () => {
    //DEBUG
    const buttonSizeChart = await productDetailPage.sizeChartButton.getText()
    console.log(buttonSizeChart)

    //ACTION
    productDetailPage.clickViewSizeChart()

    //DEBUG
    const sizeChartText = await productDetailPage.sizeChart.getText()
    console.log(sizeChartText)

    //ASERT
    await expect(productDetailPage.sizeChart).toHaveText(
      expect.stringContaining('US 10.5 / UK 9.5 / EUR 44 / CM 29'),
    )

    //ACTION
    productDetailPage.clickViewSizeChart() //click BACK TO SIZE
  })

  it('should display pop up to get a reminder', async () => {
    //DEBUG
    const buttonReminder = await productDetailPage.reminderButton.getText()
    console.log(buttonReminder)

    //ACTION
    await productDetailPage.clickReminderButton()

    //ASERT
    const displayPopUpReminder = await productDetailPage.popUpReminder.isDisplayed()
    await expect(displayPopUpReminder).toBe(true)

    //ACTION
    await productDetailPage.clickCloseReminderButton() //click CLOSE POP UP
  })

  it('should verify the Add to Bag button is not clickable', async () => {
    //DEBUG
    const buttonAddToBag = await productDetailPage.addToBagButton.isClickable()
    console.log(buttonAddToBag)

    //ASERT
    await expect(buttonAddToBag).toBe(false)
  })

  it('should verify the Add to Bag button is disabled before choosing a size', async () => {
    //DEBUG
    const isDisabledBefore = await productDetailPage.isAddToBagButtonDisabled()
    console.log(
      'Is Add to Bag button disabled before choosing size:',
      isDisabledBefore,
    )

    //ASERT
    await expect(isDisabledBefore).toBe(true)
  })

  it('should enable the Add to Bag button after choosing a size', async () => {
    //DEBUG
    const buttonSizePick = await productDetailPage.sizePickButton.getText()
    console.log(buttonSizePick)

    //ACTION
    await productDetailPage.clickSizePickButton()
    await productDetailPage.clickAddToBag()

    //ASERT
    const displayBagContent = await productDetailPage.bagContent.isDisplayed()
    await expect(displayBagContent).toBe(true)
  })
})
