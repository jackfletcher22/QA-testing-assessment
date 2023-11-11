const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser("chrome").setChromeOptions();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

test("clicking the Draw button displays the div with id = 'choices'", async () => {
  await driver.get("http://localhost:8000");

  // Assuming there is a Draw button, find and click it
  const drawButton = await driver.findElement(By.id("draw"));
  await drawButton.click();

  // Wait for the "choices" div to be displayed
  const choicesDiv = await driver.findElement(By.id("choices"));
  await driver.wait(until.elementIsVisible(choicesDiv), 1000);
});

test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
  await driver.get("http://localhost:8000");

  // Assuming there is an "Add to Duo" button, find and click it
  const addToDuoButton = await driver.findElement(By.id("duel"));
  await addToDuoButton.click();

  // Wait for the "player-duo" div to be displayed
  const playerDuoDiv = await driver.findElement(By.id("player-duo"));
  await driver.wait(until.elementIsVisible(playerDuoDiv), 1000);
});





