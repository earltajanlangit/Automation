const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false, // Run tests in headful mode (shows the browser)
    viewport: { width: 1280, height: 720 }, // Set the browser window size
    video: 'on-first-retry', // Record video on first retry (optional)
    screenshot: 'only-on-failure', // Take a screenshot if a test fails (optional)
    actionTimeout: 60000, // Set timeout for actions (10 seconds)
    navigationTimeout: 60000, // Set timeout for navigations (15 seconds)
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
  timeout: 60000, // Set global timeout for tests (30 seconds)
  expect: {
    timeout: 60000, // Timeout for expect assertions (5 seconds)
  },
});
