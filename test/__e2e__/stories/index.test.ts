import { config, driver } from '../config'
import { E2E_TEST_IDS } from '../../../app/constants/tests'

beforeAll(async () => {
  await driver.init(config)
  await driver.sleep(3000) // wait for app to load
})

describe('Dummy Test', () => {
  it('dummy', async () => {
    const profileButton = await driver.elementByAccessibilityId(E2E_TEST_IDS.WELCOME.PROFILES_BUTTON)
    expect(profileButton).toBeTruthy()

    profileButton.click()
    await driver.sleep(5000)

    const searchBar = await driver.elementByAccessibilityId(E2E_TEST_IDS.PROFILES.SEARCH_BAR)
    expect(searchBar).toBeTruthy()
  })
})

afterAll(async () => {
  await driver.quit()
})
