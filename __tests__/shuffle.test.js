const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array with the same length as the input array", () => {
    
    const inputArray = [1, 2, 3, 4, 5];

    const result = shuffle(inputArray);

    expect(result).toHaveLength(inputArray.length);
  });

  test("return an array with the same elements as the input array", () => {
    
    const inputArray = [1, 2, 3, 4, 5];
    
    const result = shuffle(inputArray);

    expect(result).toEqual(expect.arrayContaining(inputArray));
  });
});
