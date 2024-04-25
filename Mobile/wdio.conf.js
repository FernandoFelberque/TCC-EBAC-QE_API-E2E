export const config = {

    //runner: 'local',
    //port: 4723,

    user: 'oauth-fernandocaiofelberque-2f80e',
    key: '999f88f0-9637-4626-beca-0bc54f1a7cbf',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',


    specs: [
        './test/specs/**/*.js'
    ],


    maxInstances: 1,

    capabilities: [

        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutocompletion': true,
            'sauce:options': {
                build: 'appium-build-test-ebacshop-tcc',
                name: 'EBAC Shop Test',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: "2.0.0"
            },
        }


        //{

        //    platformName: 'Android',
        //    'appium:deviceName': 'ebac',
        //    'appium:platformVersion': '9.0',
        //    'appium:automationName': 'UiAutomator2',
        //    'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //    'appium:appWaitActivity': '.MainActivity',
        //    'appium:disableIdLocatorAutocompletion': true,
        //}
    ],

    logLevel: 'info',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['appium'],


    framework: 'mocha',


    reporters: ['spec'],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
