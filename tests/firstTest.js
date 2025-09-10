const { Builder, By, Key } = require("selenium-webdriver");
// const assert = require("assert");
var should = require("chai").should();

// - EXAMPLE USING MOCHA FOR TESTING -

// describe block
describe("add todo tests", function () {
  // it block
  it("successfully adds a todo to the application", async function () {
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

    // assert using chai should
    todoText.should.equal("Learn Selenium");

    // close browser
    await driver.quit();
  });
});

/*

- EXAMPLE OF SELENIUM BUILT IN FUNCTIONS AND ASSERTIONS AS WELL AS CHAI - 

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

  // assert using mode assertion
  // assert.strictEqual(todoText, "Learn Selenium");

  // assert using chai should
  todoText.should.equal("Learn Selenium");

  // close browser
  await driver.quit();
}

example();

*/
