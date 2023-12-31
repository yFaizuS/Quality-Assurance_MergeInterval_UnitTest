const { Builder, By, Capabilities } = require('selenium-webdriver');
const path = require('path');
const chrome = require('selenium-webdriver/chrome');

// Replace 'chrome' with the appropriate browser name
const browserName = 'chrome';
const driverPath = path.resolve('./chromedriver_win32/chromedriver.exe');

const service = new chrome.ServiceBuilder(driverPath).build();
const options = new chrome.Options();
options.addArguments('--headless'); // Run Chrome in headless mode

const driver = new Builder()
  .forBrowser(browserName)
  .withCapabilities(Capabilities.chrome())
  .setChromeService(service)
  .setChromeOptions(options)
  .build();


// Perform UI tests using Selenium WebDriver and Jest
// Test Case 1: Test the form submission and merging of intervals
test('Form submission and merging of intervals', async () => {
    try {
        // Load the HTML file
        await driver.get('file://C:/Users/LEGION/OneDrive/Documents/Project front End/Quality-Assurance_MergeInterval_UnitTest/MergeInterval_FormTesting.html');

        // Simulate user input
        const numIntervalsInput = await driver.findElement(By.id('numIntervals'));
        await numIntervalsInput.sendKeys('3');

        const intervalInputs = await driver.findElements(By.css('#intervalInputs input'));
        await intervalInputs[0].sendKeys('1');
        await intervalInputs[1].sendKeys('3');
        await intervalInputs[2].sendKeys('2');
        await intervalInputs[3].sendKeys('6');
        await intervalInputs[4].sendKeys('8');
        await intervalInputs[5].sendKeys('10');

        // Trigger form submission
        const form = await driver.findElement(By.id('intervalForm'));
        await form.submit();

        // Wait for the merged intervals to be displayed
        await driver.sleep(1000);

        // Get the merged intervals from the UI
        const mergedList = await driver.findElement(By.id('mergedList'));
        const mergedText = await mergedList.getText();
        const merged = JSON.parse(`[${mergedText}]`);

        // Define the expected result
        const expected = [[1, 6], [8, 10]];

        // Compare the actual and expected results
        expect(merged).toEqual(expected);
    } finally {
        // Quit the WebDriver instance
        await driver.quit();
    }
});
