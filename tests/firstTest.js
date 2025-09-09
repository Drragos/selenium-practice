const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

async function example() {
  // launch browser
  let driver = await new Builder().forBrowser("chrome").build();

  // navigate to app
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // add a to-do
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);

  // assert
  let todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function (value) {
      return value;
    });

  assert.strictEqual(todoText, "Learn Selenium");

  // close browser
  await driver.quit();
}

example();
