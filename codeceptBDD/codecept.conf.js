exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.google.com',
      show: false,
      windowSize: '1200x900',
      restart: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output'
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    stepByStepReport: {
      enabled: false,
      screenshotsForAllureReport: true
    },
    allure: {
      enabled: false
    }
  },
  tests: './*_test.js',
  name: 'dummy'
}