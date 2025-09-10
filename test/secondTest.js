const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

// - FOR PARALLELIZATION PURPOSES - SIMILAR FUNCTION TO THE FIRST -
// terminal cmd ! * npx mocha --no-timeouts -parallel * !

// describe block
describe("add another todo test", function () {
  // it block
  it("successfully adds another todo to the application", async function () {
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
