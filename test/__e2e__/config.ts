import wd from 'wd'

// TODO: set your config, we leave it as is for using tests, don't forget to add udid & app path
export const config = {
  platformName: 'iOS',
  platformVersion: '12.1',
  automationName: 'XCUITest',
  deviceName: 'IPhone X'
}

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
const PORT = 4723

export const driver = wd.promiseChainRemote('localhost', PORT)
