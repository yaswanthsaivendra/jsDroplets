//testing our code
// libraries used - mocha and chai
// mocha - consists of things like "describe" and "it"
// chai - consits of assertions(assert.equal, assert.NaN, etc..)

// Tests should be written for a code before writing an actual implementaion of the code.

// a specification for a function pow(power function) with tests.

describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
    });
});

// A spec have three builiding blocks:

/* 1.
describe("title", function() { ... })

title - title of the thing which we are testing.
function in the describe consists of it's.
*/

/*
2.
it("use case description", function() { ... })
it consits of use case description as first argument and the fucntion that tests it as second argument.
*/

/*
3.
assert.equal(value1, value2);
these assertions will be placed inside the it to test the code.
*/

// ideally one it should test for one thing by having one assert function.
// for example, here 2 will be preferred over 1

//1.
describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 4), 81);
    });

  });

// 2.
describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
      assert.equal(pow(2, 3), 8);
    });

    it("3 raised to power 4 is 81", function() {
      assert.equal(pow(3, 4), 81);
    });

  });